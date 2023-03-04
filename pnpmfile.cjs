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

// Read each package.json and get the 'name' field
const packageNames = packageDirs.map(dir => {
  const packageJsonPath = path.join(packagesDir, dir, 'package.json')

  // Check if the package.json file exists
  if (fs.existsSync(packageJsonPath)) {
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'))
    return packageJson.name
  }

  return null
}).filter(Boolean)


const packageNameSet = new Set(packageNames)

// https://pnpm.io/pnpmfile
module.exports = {
  hooks: {
    readPackage(packageJson) {
      if (packageNameSet.has(packageJson.name)) {
        return packageJson
      }

      packageNames.forEach(packageName => {
        if (packageJson.dependencies?.[packageName]) {
          packageJson.dependencies[packageName] = 'workspace:*'
        }
        if (packageJson.devDependencies?.[packageName]) {
          packageJson.devDependencies[packageName] = 'workspace:*'
        }
      })

      return packageJson
    },
  },
}
