# TODO

## SEO / AI-search visibility

Background: in Aug 2026 Google Search Console flagged pages as "Duplicate
without user-selected canonical" (the `.com` domain mirrored the site).
Fixed by redirecting all `.com` variants to `https://www.swissdefibrillator.ch`
and adding canonical tags to every page. The items below are the remaining
follow-ups from that work plus the AI-search (GEO) audit.

### Needs a human (5–10 min each)

- [ ] **Google Search Console: validate the duplicate-content fix.**
      Open the indexing report (Pages → "Duplicate without user-selected
      canonical") and click **Validate fix**. Google emails the result in
      1–3 weeks. Requires Monica's GSC access.
- [ ] **Submit the sitemap in Search Console.**
      GSC → Sitemaps → add `https://www.swissdefibrillator.ch/sitemap.xml`.
- [ ] **Register with Bing Webmaster Tools** (https://www.bing.com/webmasters).
      ChatGPT's web search is largely powered by Bing's index, so this matters
      for AI visibility. It can import the site + sitemap directly from GSC.

### Bigger projects (worth discussing first)

- [x] **Language routes (`/fr`, `/de`, `/it`).** Done on branch `lang-routes`:
      each language is server-rendered at its own URL with per-language
      canonical + hreflang, `<html lang>`, localized internal links, and a
      sitemap covering all variants. English stays at the unprefixed URLs,
      and browser-language auto-detect on those URLs is unchanged.
      Follow-up once merged: resubmit the sitemap in GSC/Bing so the new
      language URLs get crawled.
- [ ] **FAQ page with FAQPage schema.** Answer-shaped content is what AI
      engines cite. Candidate questions: "Is an AED mandatory for companies
      in Switzerland?", "How much does a defibrillator cost?", "How often
      does an AED need maintenance?", "What training do employees need?"
- [ ] **Schema for training and maintenance pages** (`Service`/`Course`
      JSON-LD), mirroring what product pages now have.

### Housekeeping

- [ ] **62 dependency vulnerabilities** (14 high) reported by GitHub Dependabot:
      https://github.com/Nacho114/swissdef-template/security/dependabot
- [ ] `aws-stripe/` and `_redirects` interplay: redirect rules live in root
      `_redirects` (deployed by adapter-netlify); keep it as the single place
      for domain redirects.

### Done (Aug 2026)

- [x] Redirect all `swissdefibrillator.com` variants (incl. bare apex) → `.ch`
- [x] Canonical tag on every page via root layout
- [x] `robots.txt` (was 404) with sitemap reference
- [x] `sitemap.xml` endpoint generated from product/training/maintenance data
- [x] Homepage JSON-LD: fixed stale `.com` URLs/email, wrong product links and
      prices; upgraded `Organization` → `LocalBusiness`
- [x] Product pages: `<title>`, meta description, `Product` JSON-LD
- [x] `noindex` on cart/checkout/confirmation pages
