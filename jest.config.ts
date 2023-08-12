import type { Config } from 'jest';

const jestConfig: Config = {
  preset: 'jest-preset-angular',
  transformIgnorePatterns: ['node_modules/(?!.*\\.mjs$)'],
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts']
};

export default  jestConfig;
