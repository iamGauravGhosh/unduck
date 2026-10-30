# Unduck

Fast, client-side bang redirects with Google as the default search engine.

- Website: [search.gauravghosh.me](https://search.gauravghosh.me)
- Bang directory: [Browse and search all shortcuts](https://search.gauravghosh.me/docs.html)

## Add to your browser

Add a custom search engine with this URL:

```text
https://search.gauravghosh.me/?q=%s
```

Search normally to use Google, or add a bang to search another website:

| Search | Destination |
| --- | --- |
| `hello world` | Google |
| `!gh vite` | GitHub |
| `!yt music` | YouTube |
| `!w typescript` | Wikipedia |

## How it works

The browser looks up the bang locally and redirects directly to the destination. A service worker caches the application after the first visit.

## Development

```sh
pnpm install
pnpm dev
```

Run `pnpm build` to generate the production site in `dist/`. The build includes both the homepage and `docs.html`.

## Deployment

Hosted on Vercel at [search.gauravghosh.me](https://search.gauravghosh.me). The homepage generates its search-engine URL from the current domain, so preview deployments also show the correct URL.

## Credits

Forked from [T3-Content/unduck](https://github.com/T3-Content/unduck), created by Theo. Bang data originates from DuckDuckGo.
