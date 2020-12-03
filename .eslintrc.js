module.exports = {
	root: true,
	env: {
		browser: true,
		node: true,
	},
	parserOptions: {
		parser: 'babel-eslint',
		sourceType: "module",
	},
	extends: [
		'@nuxtjs',
		'prettier',
		'prettier/vue',
		'plugin:prettier/recommended',
		'plugin:nuxt/recommended',
	],
	plugins: [
		'prettier',
	],
	// add your custom rules here
	rules: {
		"comma-spacing": ["error", {
			"before": false,
			"after": true,
		}],
		"comma-dangle": ["error", "always-multiline"],
		"eol-last": ["warn", "always"],
		"func-style": ["error", "declaration", { "allowArrowFunctions": false }],
		"indent": ["warn", "tab"],
		"key-spacing": ["warn", {
			"singleLine": {
				"beforeColon": false,
				"afterColon": true,
			},
			"multiLine": {
				"beforeColon": false,
				"afterColon": true,
			},
		}],
		"keyword-spacing": ["warn", {
			"before": true,
			"after": true,
		}],
		"newline-per-chained-call": ["warn", {
			"ignoreChainWithDepth": 4,
		}],
		"no-console": "off",
		"no-confusing-arrow": "error",
		"no-debugger": "warn",
		"no-duplicate-imports": ["error", {
			"includeExports": true,
		}],
		"no-extra-semi": "warn",
		"no-extra-parens": ["warn", "all"],
		"no-floating-decimal": "error",
		"no-multi-assign": "error",
		"no-multi-spaces": ["warn", {
			"ignoreEOLComments": false,
		}],
		"no-nested-ternary": "error",
		"no-new-func": "error",
		"no-param-reassign": ["error", {
			"props": false,
		}],
		"no-unused-expressions": "off",
		"no-tabs": ["off", { allowIndentationTabs: true }],
		"prettier/prettier": "off",
		// "require-jsdoc": ["error", {
		// 	"require": {
		// 		"FunctionDeclaration": true,
		// 		"MethodDefinition": false,
		// 		"ClassDeclaration": false,
		// 		"ArrowFunctionExpression": false,
		// 		"FunctionExpression": false
		// 	}
		// }],
		"semi": ["error", "always"],
	},
};
