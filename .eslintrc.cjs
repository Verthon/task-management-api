/**
 * @type {import('eslint').Linter.Config}
 */
const config = {
	env: {
		browser: false,
		es2021: true,
	},
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:import/recommended",
		"plugin:import/errors",
		"plugin:import/warnings",
		"plugin:import/typescript",
		"plugin:security/recommended-legacy",
	],
	overrides: [],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module",
	},
	settings: {
		"import/resolver": {
			typescript: {
				project: ["./tsconfig.json", "./*/tsconfig.json"],
				extensions: [".ts"],
			},
		},
	},
	plugins: ["@typescript-eslint", "mocha"],
	rules: {
		"no-console": "warn",
		"no-debugger": "warn",
		"import/order": [
			"error",
			{
				groups: [
					["external", "builtin"],
					["parent", "internal"],
					["index", "sibling"],
				],
				"newlines-between": "always",
			},
		],
		"import/no-cycle": "error",
		"@typescript-eslint/consistent-type-imports": "error",
	},
};

module.exports = config;
