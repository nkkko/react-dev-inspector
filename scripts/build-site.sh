#!/usr/bin/env bash
# working directory is project root dir

# need to build examples site pages at first
#
# ```bash
# pnpm build:examples
# ```

# bash strict mode (https://gist.github.com/mohanpedala/1e2ff5661761d3abd0385e8223e16425)
# https://www.explainshell.com/explain/1posix/set
set -euxo pipefail

# https://github.com/chalk/supports-color/blob/main/index.js#L21
export FORCE_COLOR=true

SITE_DIR='.site'

# create github-page dir
rm -rf ${SITE_DIR}
mkdir -p ${SITE_DIR}

# move examples as site routes
for site_dir in $(ls -d examples/*); do
  site=$(basename ${site_dir})
  cp -fR examples/${site}/dist ${SITE_DIR}/${site}
done

# create index page
cp -f ${SITE_DIR}/vite4/index.html ${SITE_DIR}/

# domain
echo react-dev-inspector.zthxxx.me > ${SITE_DIR}/CNAME

# static
cp -fR docs/images ${SITE_DIR}/

# for preview
# ```bash
# serve .site
# ```
