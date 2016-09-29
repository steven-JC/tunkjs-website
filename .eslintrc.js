module.exports = {
    "root": true,
    "parser": 'babel-eslint',
    "env": {
        "es6": true,
        "browser": true
    },
	"extends": "vue",
    "plugins": ['vue'],
    "rules": {
        "new-cap": [0],
        "func-names": [0],
        "one-var": [0],
        "eol-last": [0],
        "no-unused-vars": [1],
        "no-trailing-spaces": [0],
        "no-multi-spaces": [1],
        "no-unused-expressions": [1, {
            "allowShortCircuit": true
        }],
        "padded-blocks": [1, "never"],
        "no-else-return": [0],
        "id-length": [2, {
            "min": 1
        }],
		"no-mixed-operators":0,
        "indent": [1, "tab"],
        "brace-style": [2, "stroustrup", {
            "allowSingleLine": true
        }],
		"quotes": [0, "single"],
		"semi": [2, "always"],
        "comma-spacing": [1, {"before": false, "after": true}],
        "comma-dangle": [1, "always-multiline"],
        "key-spacing": [1, {"beforeColon": false, "afterColon": true}],
        "spaced-comment": [1, "always"],
        "space-before-blocks": [1]
    },
	"parserOptions": {
		"ecmaVersion": 6,
		"ecmaFeatures": {
			"experimentalObjectRestSpread": true,
			"jsx": true,
			"vue": true
		},
		"sourceType": "module"
	}
};
