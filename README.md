# Anatomy Learning Platform

An evidence-based web app for learning human anatomy, movement, and personal training fundamentals.

**[▶ Browse the live demo](https://saharr1372.github.io/AnatomyKnowledge/)**

16 body regions · 51 muscles · 49 exercises · 38 lessons · every claim cited.

> The demo is a static export, so it is read-only: all the content is browsable and
> the flashcards and exercise filters work, but accounts, saved progress, and the
> quiz engine need the full server-rendered app. Run it locally in ~2 minutes below,
> or see [docs/deployment.md](docs/deployment.md) for how both are deployed.

## 🚀 Quick Start

### Prerequisites
- Node.js 20+ 
- Git

### Installation
```bash
git clone https://github.com/SaharR1372/AnatomyKnowledge.git
cd AnatomyKnowledge
npm install
```

### Development
```bash
cp .env.example .env   # SQLite + a dev auth secret; no external services needed
npm run setup          # generate the Prisma client, create the DB, seed content
npm run dev
```
Visit http://localhost:3000. The seeder creates two demo logins —
`learner@demo.local` and `admin@demo.local`, password `password123`.

### Build for Production
```bash
npm run build
npm start
```

### Build the read-only static demo
```bash
npm run demo:preview   # builds and serves it at http://localhost:3001
```
This is what gets published to GitHub Pages — see [docs/deployment.md](docs/deployment.md).

## 📚 Project Structure
- `src/app/` - Next.js routes (App Router); `src/components/`, `src/lib/` - UI and server logic
- `content/` - Anatomy content and data, one file per body region
- `prisma/` - Database schema and seed script
- `public/` - Static assets (original SVG diagrams)
- `scripts/` - Content validation and the static-demo builder
- `demo/overlay/` - Files layered over the app to build the static demo

## 📖 For Detailed Documentation
See [docs/README_DETAILED.md](docs/README_DETAILED.md) for comprehensive setup, architecture, and contribution guidelines.

## 📝 License
See [LICENSE](LICENSE) file for details.

## 🤝 Contributing
See [CONTRIBUTING.md](CONTRIBUTING.md)
