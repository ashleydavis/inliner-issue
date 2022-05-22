# inliner-issue

Demonstrates an issue with the inliner package.

Clone the repo then install dependencies:

```bash
npm install
```

## Working

To see it working:

```bash
npm run build-working
```

Note that the output file `./out/index.html` contains the web page.

## Not working

To see it broken:

```bash
npm run build-broken
```

Note that the output file `./out/index.html` is now empty and it should not be empty.

## Workaround

To see a workaround for the issue:

```bash
npm run build-workaround
```

Note that the output file `./out/index.html` contains the web page.
