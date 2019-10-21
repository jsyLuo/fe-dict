[eslint 中文网](http://eslint.cn/)

[风格指南之强烈推荐规范-vue 官网](https://cn.vuejs.org/v2/style-guide/)

[eslint-plugin-vue github](https://github.com/vuejs/eslint-plugin-vue) &&nbsp;[使用手册](https://vuejs.github.io/eslint-plugin-vue/user-guide/#installation)

## 20191021

```json
  "eslintConfig": {
    "root": true,
    "env": {
      "node": true
    },
    "extends": [
      "plugin:vue/strongly-recommended",
      "@vue/standard"
    ],
    "parserOptions": {
      "parser": "babel-eslint"
    },
    "rules": {
      "generator-star-spacing": "off",
      "no-mixed-operators": 0,
      "vue/max-attributes-per-line": [
        2,
        {
          "singleline": 5,
          "multiline": {
            "max": 1,
            "allowFirstLine": false
          }
        }
      ],
      "vue/attribute-hyphenation": 0,
      "vue/html-self-closing": 0,
      "vue/component-name-in-template-casing": 0,
      "vue/html-closing-bracket-spacing": 0,
      "vue/singleline-html-element-content-newline": 0,
      "vue/no-unused-components": 0,
      "vue/multiline-html-element-content-newline": 0,
      "vue/no-use-v-if-with-v-for": 0,
      "vue/html-closing-bracket-newline": 0,
      "vue/no-parsing-error": 0,
      "no-console": 0,
      "no-tabs": 0,
      "quotes": [
        2,
        "single",
        {
          "avoidEscape": true,
          "allowTemplateLiterals": true
        }
      ],
      "semi": [
        2,
        "never",
        {
          "beforeStatementContinuationChars": "never"
        }
      ],
      "no-delete-var": 2,
      "prefer-const": [
        2,
        {
          "ignoreReadBeforeAssign": false
        }
      ]
    }
  }
```

## 20190104

> package.json

"eslint": "^3.19.0" ---> "^5.9.0"  
 "eslint-plugin-vue": "^2.1.0" ---> "^4.7.1"

> .eslintrc.js

```js
// 老何 12月25日 19:00
// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  env: {
    browser: true
  },
  extends: ["plugin:vue/strongly-recommended"],
  parserOptions: {
    parser: "babel-eslint"
  },
  rules: {
    "arrow-parens": 2,
    "lines-around-comment": [
      1,
      {
        beforeBlockComment: true
      }
    ],
    "generator-star-spacing": [
      2,
      {
        before: true,
        after: true
      }
    ],
    "space-before-function-paren": [
      2,
      {
        anonymous: "never",
        named: "never",
        asyncArrow: "always"
      }
    ],
    "new-cap": 0,
    "no-debugger": process.env.NODE_ENV === "production" ? 2 : 0,

    // vue
    "vue/html-self-closing": 2,
    "vue/max-attributes-per-line": 0,
    "vue/no-v-html": 1,
    "vue/order-in-components": [
      1,
      {
        order: [
          "el",
          "name",
          "parent",
          "functional",
          ["delimiters", "comments"],
          ["components", "directives", "filters"],
          "extends",
          "mixins",
          "inheritAttrs",
          "model",
          ["props", "propsData"],
          "data",
          "computed",
          "watch",
          "LIFECYCLE_HOOKS",
          "methods",
          ["template", "render"],
          "renderError"
        ]
      }
    ],
    "vue/attributes-order": [
      1,
      {
        order: [
          "DEFINITION",
          "LIST_RENDERING",
          "CONDITIONALS",
          "RENDER_MODIFIERS",
          "GLOBAL",
          "UNIQUE",
          ["BINDING", "OTHER_ATTR"],
          "EVENTS",
          "CONTENT"
        ]
      }
    ]
  }
};
```

> 自动修复

```
  "scripts": {
    "lint": "eslint --ext .js,.vue src",
    }
  npm run lint
```

> 旧版本

```
// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: "babel-eslint",
  // 环境定义了预定义的全局变量。
  "env": {
    //环境定义了预定义的全局变量。更多在官网查看
    // "node": true,
    // "commonjs": true,
    // "amd": true,
    // "es6": true,
    // "mocha": true
    "browser": true
  },
  // JavaScript 语言选项
  "parserOptions": {
    "sourceType": "module" //module、script
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: "standard",
  //npm install --save-dev eslint-config-vue eslint-plugin-vue
  //https://github.com/vuejs/eslint-config-vue
  // extends: "vue",
  // 全局变量: 定义全局变量后，ESLint不会警告"
  globals: { "vm": true, "expect": true, "Vue": true },
  // required to lint *.vue files
  plugins: ["html", "vue"],
  /**
   *  "off" 或 0 - 关闭规则
   *  "warn" 或 1 - 开启规则，使用警告级别的错误：warn (不会导致程序退出),
   *  "error" 或 2 - 开启规则，使用错误级别的错误：error (当被触发的时候，程序会退出)
   */
  "rules": {
    // 要求箭头函数的参数使用圆括号
    "arrow-parens": 2,
    // 要求在注释周围有空行( 要求在块级注释之前有一空行)
    "lines-around-comment": [1, {
      "beforeBlockComment": true
    }],
    // 强制 generator 函数中 * 号周围使用一致的空格
    "generator-star-spacing": [2, {
      "before": true,
      "after": true
    }],
    // 强制在 function的左括号之前使用一致的空格
    "space-before-function-paren": [0, "always"],
    // 允许构造函数首字母非大写
    "new-cap": 0,
    // 允许开发过程使用debugger
    "no-debugger": process.env.NODE_ENV === "production" ? 2 : 0
  }
}

```
