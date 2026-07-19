// Minimal, dependency-free Markdown renderer for trusted, editor-authored lesson
// content. It escapes all HTML first (defense in depth against XSS) and then
// applies a small, well-defined subset of Markdown. This avoids pulling in a
// large Markdown library and keeps the output predictable.
//
// Supported: headings (##, ###), bold **x**, italic *x*, inline `code`,
// links [text](url) (http/https/relative only), unordered and ordered lists,
// blockquotes, horizontal rules, and paragraphs.

function escapeHtml(input: string): string {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function inline(text: string): string {
  let out = escapeHtml(text);
  // Inline code first so its contents are not further transformed.
  out = out.replace(/`([^`]+)`/g, (_m, code) => `<code>${code}</code>`);
  // Links — only allow http(s) and relative URLs; drop anything else.
  out = out.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_m, label, url) => {
    const safe = /^(https?:\/\/|\/)/i.test(url) ? url : "#";
    const external = /^https?:\/\//i.test(safe);
    const rel = external ? ' target="_blank" rel="noopener noreferrer"' : "";
    return `<a href="${safe}"${rel}>${label}</a>`;
  });
  out = out.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  out = out.replace(/(^|[^*])\*([^*]+)\*/g, "$1<em>$2</em>");
  return out;
}

/** Render a trusted Markdown string to a safe HTML string. */
export function renderMarkdown(markdown: string): string {
  const lines = markdown.replace(/\r\n/g, "\n").split("\n");
  const html: string[] = [];
  let listType: "ul" | "ol" | null = null;
  let paragraph: string[] = [];

  const flushParagraph = () => {
    if (paragraph.length) {
      html.push(`<p>${inline(paragraph.join(" "))}</p>`);
      paragraph = [];
    }
  };
  const closeList = () => {
    if (listType) {
      html.push(`</${listType}>`);
      listType = null;
    }
  };

  for (const line of lines) {
    const trimmed = line.trim();

    if (trimmed === "") {
      flushParagraph();
      closeList();
      continue;
    }
    if (trimmed === "---" || trimmed === "***") {
      flushParagraph();
      closeList();
      html.push("<hr />");
      continue;
    }
    const heading = /^(#{2,4})\s+(.*)$/.exec(trimmed);
    if (heading) {
      flushParagraph();
      closeList();
      const level = heading[1].length;
      html.push(`<h${level}>${inline(heading[2])}</h${level}>`);
      continue;
    }
    if (/^>\s?/.test(trimmed)) {
      flushParagraph();
      closeList();
      html.push(`<blockquote>${inline(trimmed.replace(/^>\s?/, ""))}</blockquote>`);
      continue;
    }
    const ul = /^[-*]\s+(.*)$/.exec(trimmed);
    if (ul) {
      flushParagraph();
      if (listType !== "ul") {
        closeList();
        listType = "ul";
        html.push("<ul>");
      }
      html.push(`<li>${inline(ul[1])}</li>`);
      continue;
    }
    const ol = /^\d+\.\s+(.*)$/.exec(trimmed);
    if (ol) {
      flushParagraph();
      if (listType !== "ol") {
        closeList();
        listType = "ol";
        html.push("<ol>");
      }
      html.push(`<li>${inline(ol[1])}</li>`);
      continue;
    }
    // Otherwise part of a paragraph.
    closeList();
    paragraph.push(trimmed);
  }

  flushParagraph();
  closeList();
  return html.join("\n");
}
