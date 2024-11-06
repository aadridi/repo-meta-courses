module.exports = {
	testEnvironment: 'jest-environment-jsdom',
	setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
	transform: {
		'^.+\\.[jt]sx?$': 'babel-jest',
	},
	moduleFileExtensions: ['js', 'jsx'],
	transformIgnorePatterns: ['/node_modules/'],
	moduleNameMapper: {
		// Remplace les fichiers d'images par un mock
		'\\.(jpg|jpeg|png|gif|svg)$': '<rootDir>/__mocks__/fileMock.js',
	},
};
