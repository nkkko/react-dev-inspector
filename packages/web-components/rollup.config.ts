import ts from 'typescript'
import { defineConfig } from 'rollup'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import terser from '@rollup/plugin-terser'
import postcss from 'rollup-plugin-postcss'
import { babel, type RollupBabelInputPluginOptions } from '@rollup/plugin-babel'

// import { dts } from 'rollup-plugin-dts'

import pkg from './package.json'

// https://github.com/solidjs-community/rollup-preset-solid/blob/master/src/index.ts
export default defineConfig(() => {
  const input = 'src/index.ts'
  const sourcemap = false
  const minify = true

  const extensions = ['.js', '.ts', '.jsx', '.tsx']

  /**
   * https://github.com/solidjs-community/rollup-preset-solid/blob/2.0.0/src/index.ts#L265
   * https://github.com/solidjs/solid/blob/main/packages/babel-preset-solid/README.md
   */
  const solidOptions = {}

  /**
   * @type {RollupBabelInputPluginOptions}
   */
  const babelOptions: RollupBabelInputPluginOptions = {}

  const babelTargets = 'browserslist' in pkg
    ? pkg.browserslist
    : 'last 2 years'

  return {
    input,
    targets: ['esm', 'cjs'],
    external: [
      'solid-js',
      'solid-js/web',
      'solid-js/store',
      ...Object.keys(pkg.dependencies || {}),
      ...Object.keys('peerDependencies' in pkg
        ? pkg.peerDependencies as object
        : {},
      ),
    ],
    output: [
      {
        dir: 'dist/esm',
        format: 'esm',
        sourcemap,
      },
      {
        dir: 'dist/cjs',
        format: 'cjs',
        sourcemap,
      },
    ],
    plugins: [
      minify && terser(),
      babel({
        extensions,
        babelHelpers: 'bundled',
        presets: [
          ['babel-preset-solid', solidOptions || {}],
          '@babel/preset-typescript',
          ['@babel/preset-env', {
            bugfixes: true,
            targets: babelTargets,
          }],
        ],
        ...babelOptions,
      }),
      nodeResolve({ extensions }),
      {
        name: 'ts',
        buildEnd() {
          const program = ts.createProgram(
            [
              'src/index.ts',
              'src/utils/index.ts',
            ],
            {
              ...readCompilerOptions(),
              noEmit: false,
              outDir: `dist/source`,
              sourceMap: sourcemap,
              declaration: true,
              declarationDir: `dist/types`,
              declarationMap: sourcemap,
              emitDeclarationOnly: true,
            },
          )

          program.emit()
        },
      },

      postcss({
        inject: false,
      }),
      // dts({
      //   respectExternal: true,
      //   compilerOptions: {
      //     noEmit: false,
      //     declaration: true,
      //     declarationDir: `dist/types`,
      //     emitDeclarationOnly: true,
      //     declarationMap: sourcemap,
      //   },
      // }),
    ],
  }
})


/**
 * @returns {ts.CompilerOptions}
 */
const readCompilerOptions = (tsconfigPath = 'tsconfig.json') => {
  const configFile = ts.readConfigFile(
    tsconfigPath,
    ts.sys.readFile,
  )

  // parse with extend config
  const parsedConfig = ts.parseJsonConfigFileContent(
    configFile.config,
    ts.sys,
    '.',
  )

  const compilerOptions = parsedConfig.options

  return compilerOptions
}

