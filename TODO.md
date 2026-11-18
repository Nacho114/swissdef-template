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
- [x] **FAQ page with FAQPage schema.** Live at `/faq` in all four languages
      (footer-linked, in the sitemap). Questions chosen from researched Swiss
      search/AI demand; answers fact-checked against SUVA, Swiss Heart
      Foundation, SRC, Philips specs and the Ticino 821.355 directives.
      Worth having Monica review the wording — especially the legal answer.
- [x] **Schema for training and maintenance pages** (`Course`/`Service`
      JSON-LD plus title/meta description on detail pages).

### Housekeeping

- [x] **Dependabot vulnerabilities: 62 → ~12 remaining.** Applied all
      non-breaking audit fixes, cleaned `aws-stripe` to zero, and migrated
      SvelteKit 1 → 2 (with adapter-netlify 4 + vite 5; removed unused
      adapter-auto). What remains is dev-tooling-only (vite/esbuild dev
      server, Windows-centric) or requires the Svelte 4 → 5 migration
      (theoretical SSR XSS that needs user-generated content the site
      doesn't have). Revisit when doing the Svelte 5 migration.
- [ ] **Svelte 4 → 5 migration** (larger project; would clear the remaining
      svelte/vite/esbuild advisories and unlock current tooling).
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

## Website improvements

### Website and search pull request

- [x] Show training, maintenance and shop actions near the top of the mobile homepage.
- [x] Improve mobile menu accessibility and remove unused image preloads.
- [x] Render product details and policies in the initial HTML.
- [x] Link the training pages to the Swiss Resuscitation Council directory.
- [x] Compare maintenance plans with annual prices and pass the choice to the enquiry.
- [x] Show AED prices and compatible parts in the shop, and remove unverified availability from product markup.
- [x] Put essential contact fields first and keep quote details optional.

### Checkout and measurement

- [ ] Keep checkout error and return-language changes in the separate Stripe work.
- [ ] Identify the deployed Stripe handler and coordinate server-owned price and shipping calculations. Verify with an end-to-end test payment before switching production.
- [ ] Review the current analytics setup and measure successful enquiries by service, paid maintenance orders and paid product purchases.

### Business follow-ups

- [ ] Confirm maintenance inclusions, cabinet supplements and VAT treatment against the live payment links.
- [ ] Ask SRC to update the company directory entry to the .ch domain.
- [ ] Collect one customer-approved training case study.
- [ ] Have the appropriate reviewer approve and date FAQ claims, with links to official Swiss guidance and model-specific manuals.
- [ ] Verify Search Console, Bing Webmaster Tools and Google Business Profile using the owner's access. Check AI search referrals and citations against actual enquiries.
