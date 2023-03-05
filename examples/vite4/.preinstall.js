#!/usr/bin/env node

import fs from 'node:fs'

console.log('process.env.SHELL', process.env.SHELL)

/**
 * if running in StackBlitz WebContainer,
 *   remove `workspace:` protocol to install from npm
 */
if (process.env.SHELL === '/bin/jsh') {
  fs.readFile('package.json', 'utf8', (err, data) => {
    if (err) throw err
    fs.writeFile(
      'package.json',
      data.replace(/workspace:\*/g, 'beta'),
      'utf8',
      (err) => { if (err) { throw err } },
    )
  })
}
