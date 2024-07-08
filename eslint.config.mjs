import globals from "globals";
import pluginJs from "@eslint/js";

export default [
    {
        languageOptions: {
            globals: globals.browser,
        },
        rules: {
            // Possible Errors
            "no-console": "warn",
            "no-debugger": "error",
            "no-dupe-args": "error",
            "no-dupe-keys": "error",
            "no-duplicate-case": "error",
            "no-empty": "warn",
            "no-extra-semi": "error",

            // Best Practices
            eqeqeq: ["error", "always"],
            curly: ["error", "all"],
            // "default-case": "error",
            "dot-notation": ["error", { allowKeywords: true }],
            "no-eval": "error",
            // "no-extend-native": "error",
            "no-implied-eval": "error",
            "no-multi-spaces": "error",
            "no-new-wrappers": "error",

            // Variables
            "no-undef": "error",
            "no-unused-vars": ["warn", { vars: "all", args: "after-used", ignoreRestSiblings: false }],
            "no-use-before-define": ["error", { functions: true, classes: true, variables: true }],

            // // Stylistic Issues
            // "indent": ["error", 2],
            // "linebreak-style": ["error", "unix"],
            // "quotes": ["error", "single"],
            // "semi": ["error", "always"],
            // "camelcase": ["error", { "properties": "never" }],
            // "comma-dangle": ["error", "never"],
            // "eol-last": ["error", "always"],
            // "func-names": "warn",
            // "max-len": ["warn", { "code": 80 }],
            // "no-multiple-empty-lines": ["error", { "max": 1, "maxEOF": 1 }],
            // "space-before-function-paren": ["error", "always"],

            // // ECMAScript 6
            // "arrow-spacing": ["error", { "before": true, "after": true }],
            // "no-var": "error",
            // "prefer-const": ["error", {
            //     "destructuring": "all",
            //     "ignoreReadBeforeAssign": true
            // }],
            // "template-curly-spacing": ["error", "never"]

            "lines-between-class-members": ["error", "always", { exceptAfterSingleLine: true }],
        },
    },
    pluginJs.configs.recommended,
];
