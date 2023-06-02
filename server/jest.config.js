module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    moduleFileExtensions: ['ts', 'js'],
    rootDir: '__tests__',
    testPathPattern: '__tests__',

    modulePathIgnorePatterns: [
        '<rootDir>/domain/repositories/AdnRepositoryMock.test.ts',
        '<rootDir>/domain/repositories/UserRepositoryMock.test.ts'

    ],
};