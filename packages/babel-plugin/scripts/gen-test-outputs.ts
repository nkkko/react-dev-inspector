import path from 'path'
import globby from 'globby'
import fs from 'fs-extra'
import { transform } from '../src'

// working directory is package root dir
const fixturesDir = 'src/tests/fixtures'
const outputsDir = 'src/tests/outputs'


const cwd = process.cwd()

const assets = globby
  .sync(`${fixturesDir}/layouts/**/*.(ts|tsx)`)
  .map((filePath) => path.relative(fixturesDir, filePath))

assets.forEach((asset) => {
  const filePath = path.join(fixturesDir, asset)
  const source = fs.readFileSync(filePath, { encoding: 'utf-8' }).toString()

  const processed = transform({
    rootPath: path.join(cwd, fixturesDir),
    filePath: path.join(cwd, fixturesDir, filePath),
    sourceCode: source,
  })

  fs.outputFileSync(path.join(outputsDir, asset), processed)
})
