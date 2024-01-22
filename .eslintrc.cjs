module.exports = {
	root: true,
	env: { browser: true, es2020: true },
	settings: {
		react: {
			version: 'detect'
		}
	},
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended-type-checked',
		'plugin:@typescript-eslint/stylistic-type-checked',
		'plugin:react-hooks/recommended',
		'plugin:react/recommended',
		'plugin:react/jsx-runtime'
	],
	ignorePatterns: [
		'dist',
		'.eslintrc.cjs',
		'tsconfig.json',
		'next.config.js',
		'tailwind.config.js'
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: './tsconfig.json'
	},
	plugins: ['react-refresh'],
	rules: {
		'react/no-unknown-property': 'off',
		'react-refresh/only-export-components': ['off', { allowConstantExport: true }],
		'react/jsx-no-target-blank': [2, { allowReferrer: false }],
		'react/prop-types': 'off'
	},
	overrides: [
		{
			files: ['*.ts', '*.tsx']
		}
	]
}
