module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": "react-app",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": false
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "semi": 1,
        "no-duplicate-imports": 1
    }
};