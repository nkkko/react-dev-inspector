import withSolid from 'rollup-preset-solid'

// https://github.com/solidjs-community/rollup-preset-solid
export default withSolid({
  input: 'src/index.ts',
  targets: ['esm', 'cjs'],
})
