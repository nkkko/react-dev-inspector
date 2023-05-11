#!/usr/bin/env bash

# working directory is project root dir

# bash strict mode (https://gist.github.com/mohanpedala/1e2ff5661761d3abd0385e8223e16425)
# https://www.explainshell.com/explain/1posix/set
set -euxo pipefail

cd examples

source_code_path='vite4/src'

declare -a synced_dirs=(
  'vite3/src'
  'vite2/src'
  'umi4/src'
  'rspack/src'
  'cra5-with-rewired/src'
  'nextjs-custom-server/components'
)

for target_dir in "${synced_dirs[@]}"; do
  rm -rf "${target_dir}/ShowPage"

  cp -R "${source_code_path}/ShowPage" "$target_dir/"
done
