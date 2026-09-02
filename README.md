# Gauteng Repair Network — Website

Marketing website for **Gauteng Repair Network**, an appliance, air conditioning, and refrigeration repair service serving Gauteng, South Africa (Pretoria, Johannesburg, Midrand, and surrounds).

- **Live URL:** https://www.gautengrepairnetwork.co.za
- **Framework:** Next.js 16 (App Router) + TypeScript + Tailwind CSS v4
- **Package manager:** pnpm
- **Deployment:** Vercel

---

## Getting Started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site locally.

```bash
pnpm build   # production build
pnpm start   # run the production build locally
pnpm lint    # run eslint
```

---

## Brand Reference

| | |
|---|---|
| **Company name** | Gauteng Repair Network |
| **Phone** | +27 69 382 4908 |
| **WhatsApp** | wa.me/27693824908 |
| **Email** | info@gautengrepairnetwork.co.za |
| **Location** | Gauteng, South Africa (Pretoria, Johannesburg, Midrand and surrounds — no public street address) |
| **Primary color** | `#0D5C5C` (deep teal) |
| **Secondary color** | `#E8A33D` (warm gold) |
| **Accent color** | `#FF9F1C` (safety orange, unchanged from original palette) |
| **Logo mark** | Snowflake/asterisk mark in gold on a teal rounded-square badge. See `/public/logo-icon.svg` (vector, used directly in header/footer), `/public/logo-square.png`, `/public/logo-icon-transparent-512.png` |
| **Positioning** | Fast, trusted repair service connecting Gauteng homes and businesses with experienced technicians. Same day quotes, extended hours emergency support (not 24/7 — see note below) |
| **Business model** | Cold Fix Services' original site/template was used as the technical starting point, but Gauteng Repair Network operates independently with its own brand, contact details, and positioning |

**Claims policy:** Do not add unverified stats (client counts, years in operation, review counts/ratings) to any page. This is a newer business — copy should sound confident and professional without claiming a track record that doesn't exist yet. Real numbers can be added once they're genuinely true. Social media links (Facebook/Instagram) are currently non-clickable placeholders in the header/footer until real profiles are set up — do not silently re-link them to any other business's profiles.

Do not reintroduce Cold Fix Services branding, its phone number, its email, or its "Keeping Gauteng Cool" tagline. Written copy on the site intentionally avoids the "-" character in body text.

---

## Project Structure

```
app/
├── layout.tsx                          # Root layout, metadata, JSON-LD, Google Ads tag, WhatsApp button
├── page.tsx                            # Homepage
├── about/                              # About page
├── contact/                            # Contact page
├── services/                           # Services overview (/services)
├── areas/                              # Service area hub + per-suburb pages (renamed from /service-areas)
├── privacy-policy/
├── terms-of-service/
│
├── air-conditioning-services/          # Service page — keyword + FAQ optimised
├── refrigeration-repairs/              # Service page — keyword + FAQ optimised
├── cold-room-installation-repair/      # Service page — keyword + FAQ optimised, targets "near me" queries
├── commercial-refrigeration/           # Service page — keyword + FAQ optimised
├── appliance-repairs/                  # Service page — keyword + FAQ optimised
├── hvac-maintenance-contracts/         # Service page (not yet given FAQ/keyword pass)
├── emergency-callout-service/          # Service page — keyword + FAQ optimised
├── plumbing-services/                  # Service page — keyword + FAQ optimised, scoped to appliance-connection plumbing only
├── electrical-services/                # Service page — keyword + FAQ optimised
└── property-maintenance/               # Service page (Maintenance Contracts, not yet given FAQ/keyword pass)

components/
├── header.tsx                          # Nav, services dropdown, contact bar. Logo = /logo-icon.svg + HTML text (not baked into one image, for crisp scaling)
├── footer.tsx                          # Footer nav, service list, contact info
├── whatsapp-button.tsx                 # Floating WhatsApp CTA with Google Ads conversion tracking on click
├── breadcrumbs.tsx                     # Shared breadcrumb trail
├── contact-form.tsx                    # Contact / quote request form
├── service-page-template.tsx           # Shared wrapper for all /service pages
├── service-area-template.tsx           # Shared wrapper for all /areas/[suburb] pages
├── theme-provider.tsx
└── home/
    ├── hero-section.tsx
    ├── services-overview.tsx
    ├── why-choose-us.tsx
    ├── service-areas-preview.tsx        # Note: filename unchanged, links point to /areas/ paths
    └── cta-section.tsx

public/
├── favicon.ico, favicon-16x16.png, favicon-32x32.png
├── apple-touch-icon.png
├── android-chrome-192x192.png, android-chrome-512x512.png
├── logo-icon.svg                       # Primary icon mark, used directly (not rasterized) in header/footer
├── logo-icon-transparent-512.png       # Transparent PNG variant for dark backgrounds
├── logo-horizontal.svg                 # Full wordmark lockup (icon + text baked in) — currently unused in code since header/footer use icon+HTML text instead, kept for external use (social profile images, etc.)
├── logo-square.png
├── og-image.png
├── robots.txt, llms.txt
└── service + area photography (aircon, refrigeration, appliance, plumbing, electrical, etc.) — stock imagery, not Cold Fix's own photos
```

---

## Current Services (10)

The active service list, consistent across the header nav, homepage grid, and `/services` page:

1. Air Conditioning Services
2. Refrigeration Repairs
3. Cold Room Installation and Repair
4. Commercial Refrigeration
5. Appliance Repairs
6. HVAC Maintenance Contracts
7. Emergency Callout Service
8. Plumbing Services (appliance and refrigeration related only, not general household plumbing)
9. Electrical Services (appliance and refrigeration related)
10. Maintenance Contracts (`/property-maintenance`)

---

## Service Areas (11)

Each area has its own page at `/areas/[suburb]`, rendered via `ServiceAreaTemplate`:

Pretoria, Johannesburg, Midrand, Sandton, Centurion, Fourways, Randburg, Bedfordview, Rosebank, Roodepoort, Morningside.

**Known gap:** Search Console shows real search demand for Randburg (fridge/appliance repairs) and Midrand (tumble dryer, freezer, appliance repair service) that isn't yet reflected in those area pages' content. Also, real search volume exists for **Vereeniging** and **Alberton**, which are not yet covered — worth adding as a 12th/13th area once there's bandwidth.

Every area page uses a distinct `introImage` so the pages stay visually unique. The default image (`/cold-fix-technicians-servicing-air-conditioner.png` — filename inherited from the original template, image itself is generic stock, not Cold Fix's) is only used as a fallback when no `introImage` prop is passed.

---

## URL Structure

- Service pages: `/service-name` (e.g. `/refrigeration-repairs`)
- Service areas: `/areas/[suburb]` (e.g. `/areas/sandton`) — renamed from `/service-areas/[suburb]`

---

## SEO Files

- **`app/sitemap.ts`** — generates `/sitemap.xml`. Includes the homepage, core pages, all 10 service pages, and all 11 service areas. Update it whenever a page is added or removed.
- **`public/robots.txt`** — points crawlers to the sitemap at `https://www.gautengrepairnetwork.co.za/sitemap.xml`.
- **`public/llms.txt`** — plain language summary of the business, services, and service areas for LLM consumption. Still contains Cold Fix Services language in places — needs a rewrite pass, not yet done.
- **`app/layout.tsx`** — global metadata, Open Graph/Twitter tags, and Organization + LocalBusiness JSON-LD.

### Search Console-driven content strategy

Several service pages have been optimised using real Google Search Console query data rather than guesswork — queries the site already gets impressions for but few/no clicks, meaning the page ranks but doesn't match the searcher's exact phrasing closely enough to earn the click. When doing this for a page:

1. Pull the query + impressions data from Search Console
2. Work the exact phrase into the page `<title>`, meta description, H1/intro copy, and ideally one FAQ question
3. Prioritise by impression volume — high-impression, zero-click queries are the best ROI
4. Don't create a new URL for a query that's a close match to an existing page's intent — that risks duplicate content competing against yourself. Strengthen the existing page instead.

`cold-room-installation-repair` was the first page to get this treatment (targeting "cold room repair near me" / "cold storage repair near me", 197 combined impressions). Air Conditioning and Refrigeration pages were separately optimised using real Google **Ads** search term data (different tool, same principle). Remaining pages have not yet had a Search Console pass — check GSC for query opportunities before assuming a page is finished.

---

## Known TODOs

- [ ] **`public/llms.txt`** — still references old branding, needs a rewrite.
- [ ] **Search verification code** — placeholder value (`your-google-verification-code`) still in `layout.tsx` metadata. Add the real Google Search Console verification code once that property is set up.
- [ ] **Social media links** — Facebook/Instagram are non-clickable placeholders in header/footer. Update once real profiles exist; do not link to another business's profiles.
- [ ] **`safari-pinned-tab.svg`** — placeholder silhouette, not a true vector trace of the current logo. Replace if pixel perfect accuracy matters.
- [ ] **HVAC Maintenance Contracts and Property Maintenance pages** — have not yet had the FAQ/keyword optimisation pass the other 8 service pages received.
- [ ] **Randburg and Midrand area pages** — real Search Console demand exists for appliance-specific terms (fridge repairs, tumble dryer repairs, freezer repairs) that aren't reflected in current page content.
- [ ] **Vereeniging and Alberton** — real search demand exists (from Google Ads data) for these areas; not currently covered by a service area page.
- [ ] **About page** — has not yet had the rebrand/positioning rewrite pass applied to the rest of the site.

---

## Notes for Future Edits

- The **`ServicePageTemplate`** and **`ServiceAreaTemplate`** components in `components/` are shared wrappers. Editing them affects *every* service page or every service area page at once, so check there first before assuming a bug is page specific.
- When adding or removing a service, update it in **all** of these places: `components/header.tsx`, `components/footer.tsx`, `components/home/services-overview.tsx`, `app/services/page.tsx`, `app/sitemap.ts`, `public/llms.txt`, and any `relatedServices` arrays on individual service pages that might link to it.
- When adding or removing a service area, update `app/areas/` (the page), the service areas hub, `components/home/service-areas-preview.tsx`, `app/sitemap.ts`, and `public/llms.txt`.
- Contact details (phone `+27 69 382 4908`, WhatsApp `wa.me/27693824908`, email `info@gautengrepairnetwork.co.za`) appear across the header, footer, and home components. Change all of them together.
- The **WhatsApp button** (`components/whatsapp-button.tsx`) fires a Google Ads conversion event on click (`send_to: AW-18395132504/VSWzCMGu--UcENjkvcNE`). Don't remove the `onClick` handler without updating the Ads conversion action too, or conversion tracking silently breaks.
- Before adding any new stat, claim, or number to the site (client counts, years in business, review ratings), confirm it's actually true. See "Claims policy" above.
- Bulk find and replace across the repo works well from Git Bash:
  ```bash
  find . -type f \( -name "*.tsx" -o -name "*.ts" \) -not -path "*/node_modules/*" \
    -exec sed -i 's/OLD_VALUE/NEW_VALUE/g' {} +
  ```
  Always `grep -r` first to preview matches before running the replace, and watch out for substring collisions (e.g. replacing "24 hour" will also match inside "24 hours" and mangle it — match the most specific string possible).
