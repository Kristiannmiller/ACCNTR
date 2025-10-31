// jest.config.js
module.exports = {
    preset: 'ts-jest/presets/js-with-ts',
    testMatch: ['**/?(*.)+(test).ts?(x)'],
    transform: {
        '^.+\\.tsx?$': 'ts-jest'
    },
    coverageDirectory: 'coverage',
    collectCoverageFrom: [
        'src/utils/**/*.ts?(x)',
        '!src/utils/type-utils.ts',
        '!src/utils/index.ts'
    ],
    moduleNameMapper: {
        '^.+\\.module\\.(css|scss)$': 'identity-obj-proxy',
        '^@/(.*)$': '<rootDir>/src/$1'
    }
};
