# Toyosi’s portfolio

A responsive, dependency-free static portfolio. Deploy the repository directly to GitHub Pages or any static host; no build step is required.

## Run locally

With Node.js installed:

```sh
npm start
```

Open http://127.0.0.1:4173. Set `PORT` to use another port. The development server binds to localhost and is not intended for production.

Run `npm run check` to check JavaScript syntax.

## Edit the site

- `index.html`: career introduction, six professional contribution summaries, eight experience entries, skills, education, CV links, contact details.
- `css/portfolio.css`: responsive layout, colours, and typography.
- `js/portfolio.js`: progressive contribution filtering, the footer year, and scroll-reveal animations. All contributions and links remain available without JavaScript.
- `img/`: existing project screenshots and the favicon. Keep filename capitalization exact for case-sensitive hosts.

Career content is based on the supplied Google Docs CV. Current roles, part-time status, dates, achievements, and contact details follow that source. The MSc entry has been omitted at the owner’s request. The professional work summaries replace the early demo projects; original screenshots remain in `img/` but are no longer displayed. The Panoptes contribution link comes from the current CV. KaDE and BaJor pull-request links filter the public Zooniverse repositories to author `Tooyosi`; authored PRs were verified through GitHub search. There is no contact form or external font dependency.

Before future publication, review any changing employment or education details against the current CV.

## Motion

Short entrance animations, one-time scroll reveals, and hover effects use browser-native CSS and Web Animations APIs. Reduced-motion preferences disable these effects, including when the preference changes while the page is open. Content remains visible if JavaScript or animation APIs are unavailable.

The UI screenshot gallery has been removed at the owner’s request.
