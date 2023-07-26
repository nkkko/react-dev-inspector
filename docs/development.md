# Development

## Install Dependencies

> This project use [`pnpm`](https://pnpm.io/motivation) as monorepo package manager,
> so it's need to install `pnpm` to global at first. (maybe run `npm i -g pnpm`)

```bash
# install all dependencies in monorepo
pnpm i
```

### Update Dependency

```bash
# example for update version of dependency package `typescript` in all monorepo package
pnpm update -rDL typescript
# it's equal to
pnpm update --recursive --dev --latest typescript
# https://pnpm.io/cli/update
```

Or

```bash
# example for update dependency version in one package
cd examples/vite4
pnpm update -L typescript
```


## Build Packages

```bash
# build core and plugins packages
pnpm build:packages
```

## Unit Testing

```bash
pnpm test
# it's equal to
pnpm test -r
pnpm run -r test
pnpm run --recursive test
```

## Develop Example Sites

> need to [build plugins packages](#build-packages) at first

```bash
pnpm --filter @example/vite4 dev
pnpm --filter @example/nextjs dev
# pnpm --filter <...> dev
```

Or

```bash
cd examples/vite4
pnpm dev
```

sync demo code from vite4 to other examples:

```bash
# at project root dir
./scripts/sync-page-code.sh
```

> **NOTE:** use copied files rather than symlink is design for StackBlitz online demo with pure subpath.


### build examples sites

> need to [build plugins packages](#build-packages) at first

```bash
pnpm build:examples && pnpm build:site
```

## Publish

Bump to specify versions manually:

```bash
pnpm --filter './packages/**' exec pnpm version 2.0.0-beta.2
```


publish packages manually:

```bash
# for check
pnpm publish -r --report-summary --tag beta --dry-run

# to publish
pnpm publish -r --report-summary --tag beta

# to check log
cat pnpm-publish-summary.json
```

### Miscellaneous

```bash
# compress svg files
svgo -p 1 -i docs/images/browser-inspect.svg
svgo -p 1 --pretty -i docs/images/working-pipeline.svg
```

