//
// Prompt:
//   Use Nodejs to read all package names in the `name` field of `packages/*/package.json`,
//   cannot use any third-party packages except for the built-in libraries of Nodejs.
//


const fs = require('node:fs')
const path = require('node:path')

const packagesDir = path.join(__dirname, 'packages')

// Use readdirSync to read the directories in the 'packages' folder
const packageDirs = fs.readdirSync(packagesDir, { withFileTypes: true })
  .filter(dirent => dirent.isDirectory())
  .map(dirent => dirent.name)

const packages = packageDirs.map(dir => {
  const packageJSONPath = path.join(packagesDir, dir, 'package.json')

  // Check if the package.json file exists
  if (fs.existsSync(packageJSONPath)) {
    const packageJSON = JSON.parse(fs.readFileSync(packageJSONPath, 'utf8'))
    return packageJSON
  }

  return null
}).filter(Boolean)

const packageMap = new Map(packages.map(packageJSON => [packageJSON.name, packageJSON]))

// https://pnpm.io/pnpmfile
module.exports = {
  hooks: {
    readPackage(packageJSON) {
      /**
       * only lock workspace package version in our monorepo examples/
       */
      if (!packageJSON.name.startsWith('@example/')) {
        return packageJSON
      }

      packageMap.forEach(({ version }, packageName) => {
        // the `workspace:*` will match beta version in pnpm

        if (packageJSON.dependencies?.[packageName]) {
          packageJSON.dependencies[packageName] = `workspace:*`
        }
        if (packageJSON.devDependencies?.[packageName]) {
          packageJSON.devDependencies[packageName] = `workspace:*`
        }
        if (packageJSON.peerDependencies?.[packageName]) {
          packageJSON.devDependencies[packageName] = `workspace:*`
        }
      })

      return packageJSON
    },
  },
}
