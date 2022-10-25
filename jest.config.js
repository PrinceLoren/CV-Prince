/* eslint-disable @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */
const nextJest = require('next/jest')
const { pathsToModuleNameMapper } = require('ts-jest/utils')
const { compilerOptions } = require('./tsconfig')
/* eslint-enable @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env.development files in your test environment
  dir: './',
})

// Add any custom config to be passed to Jest
const customJestConfig = {
  // Add more setup options before each test is run
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  // if using TypeScript with a baseUrl set to the root directory then you need the below for alias' to work
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
  },
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths),
  snapshotSerializers: ['@emotion/jest/serializer'],
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig)
