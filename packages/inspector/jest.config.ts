import type { Config } from 'jest'


const config: Config = {
  testTimeout: 20000,
  testEnvironment: 'jsdom',
  testMatch: ['<rootDir>/src/**/*.test.(ts|tsx)'],
  testPathIgnorePatterns: [
    '/node_modules/',
    '/templates/',
    '/coverage/',
    '/dist/',
    '/lib/',
    '/es/',
  ],
  transform: {
    '^.+\\.tsx?$': [
      'ts-jest',
      // https://kulshekhar.github.io/ts-jest/docs/getting-started/options#options
      {
        diagnostics: false,
        isolatedModules: true,
      },
    ],
  },
  collectCoverage: false,
  collectCoverageFrom: [
    '**/src/**/*.{ts,tsx}',
    '!**/node_modules/**',
    '!**/coverage/**',
    '!**/*.mock.ts',
    '!**/mocks/**',
    '!**/dist/**',
    '!**/lib/**',
    '!**/es/**',
  ],
}

export default config
