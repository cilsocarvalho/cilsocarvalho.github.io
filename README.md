# Cilso Carvalho Portfolio

Based on the existing Lovable design with reviewed project descriptions.

Run `npm ci` and `npm run dev`. Build with `npm run build`. GitHub Actions deploys main to GitHub Pages. Edit `src/data/portfolio.ts` for content. Preserve delivery status and publish only sanitized, supported claims.

## Architecture diagrams

Diagrams in `public/architecture/` are generated from `tools/diagrams/diagrams.py` using the official AWS Architecture Icons (Release 01/30/2026) and Simple Icons for third-party logos. Edit a diagram there and run:

```
python3 tools/diagrams/diagrams.py            # all diagrams
python3 tools/diagrams/diagrams.py aiops      # one diagram
```

Case study text lives in `src/data/case-studies.ts`.
