const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./",
});

const customJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
	transform: {},
	extensionsToTreatAsEsm: [".tsx", ".jsx", ".ts"]
	/* moduleNameMapper: {
  *   "^@/components/(.*)$": "<rootDir>/components/$1",
  * }, */
};

module.exports = createJestConfig(customJestConfig);
