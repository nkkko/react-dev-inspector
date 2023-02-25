#!/usr/bin/env bash

# working directory is project root dir

# bash strict mode (https://gist.github.com/mohanpedala/1e2ff5661761d3abd0385e8223e16425)
# https://www.explainshell.com/explain/1posix/set
set -euxo pipefail

cd examples

rm -rf vite3/src/HomePage
rm -rf vite2/src/HomePage
rm -rf umi4/src/HomePage
rm -rf umi3/src/HomePage
rm -rf rspack/src/HomePage
rm -rf cra5-with-rewired/src/HomePage
rm -rf nextjs-custom-server/components/HomePage


cp -R vite4/src/HomePage vite3/src/
cp -R vite4/src/HomePage vite2/src/
cp -R vite4/src/HomePage umi4/src/
cp -R vite4/src/HomePage umi3/src/
cp -R vite4/src/HomePage rspack/src/
cp -R vite4/src/HomePage cra5-with-rewired/src/
cp -R vite4/src/HomePage nextjs-custom-server/components/

