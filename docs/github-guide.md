# Publishing to GitHub (beginner-friendly)

This project is already a git repository with commits. You just need to create a repo on GitHub and
push. Two methods below. **Nothing is pushed automatically** — you run these commands.

> Before pushing, double-check no secrets are staged: your `.env` is gitignored (only `.env.example`
> is tracked). Verify with `git status` and `git ls-files | grep -i env` (should show only
> `.env.example`).

## Method A: via the GitHub website

1. Sign in at https://github.com.
2. Click **+ → New repository**.
3. Choose a professional name, e.g. **`anatomy-learning-platform`**.
4. Add a short description, e.g. *"Evidence-based anatomy & personal-training learning platform
   (Next.js, TypeScript, Prisma)."*
5. Choose **Public** or **Private**.
6. **Do NOT** check "Add a README/.gitignore/license" — this repo already has them (avoids conflicts).
7. Click **Create repository** and copy the repo URL.
8–10. Connect and push (from the project folder):

```bash
git remote add origin https://github.com/USERNAME/REPOSITORY-NAME.git
git branch -M main
git push -u origin main
```

Replace `USERNAME` and `REPOSITORY-NAME`. Refresh the GitHub page to verify the files appear.

## Method B: via GitHub CLI (`gh`)

Install `gh` first (https://cli.github.com — it is not preinstalled). Then:

```bash
gh auth login
gh repo create anatomy-learning-platform --public --source=. --remote=origin --push
# For a private repo, swap --public for --private:
gh repo create anatomy-learning-platform --private --source=. --remote=origin --push
```

## Common situations

- **Git already initialized** (it is): skip `git init`. Just add the remote and push.
- **`origin` already exists**: update it — `git remote set-url origin <url>`.
- **Authentication fails / GitHub asks for a password**: GitHub no longer accepts passwords over
  HTTPS. Create a **Personal Access Token** (GitHub → Settings → Developer settings → Tokens) and use
  it as the password, or use `gh auth login`, or set up SSH keys.
- **Remote already has an initial commit** (you accidentally added a README on GitHub): pull first —
  `git pull origin main --allow-unrelated-histories`, resolve conflicts, then push.
- **A file was committed by mistake**: `git rm --cached path/to/file`, add it to `.gitignore`, commit.
- **A secret was pushed**: rotate it immediately (new `AUTH_SECRET`, rotate DB creds), remove it from
  history (`git filter-repo`), and force-push. See `docs/authentication-and-security.md`.

## Publishing future changes

```bash
git status                       # see what changed
git add .
git commit -m "Describe the improvement"
git push
```

- `status` shows changes; `add` stages them; `commit` records a snapshot with a message; `push` uploads
  it to GitHub.

## Working on a feature branch (protects the stable version)

```bash
git checkout -b feature/interactive-body-map
git add .
git commit -m "feat: add interactive body map"
git push -u origin feature/interactive-body-map
```

Branches let you build without touching `main`; open a Pull Request to review and merge when ready. CI
runs automatically on PRs and on pushes to `main`.
