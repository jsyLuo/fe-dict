```
{ // VScode主题配置
    "editor.tabSize": 2,
    "editor.lineHeight": 24,
    "editor.renderLineHighlight": "none",
    "editor.renderWhitespace": "none",
    "editor.fontSize": 12,
    "editor.cursorBlinking": "smooth",
    "editor.multiCursorModifier": "ctrlCmd",
    "editor.formatOnPaste": true,
    // 是否允许自定义的snippet片段提示,比如自定义的vue片段开启后就可以智能提示
    "editor.snippetSuggestions": "top",
    "workbench.colorTheme": "Darcula Theme from IntelliJ",
    "workbench.startupEditor": "newUntitledFile",
    "html.suggest.angular1": false,
    "html.suggest.ionic": false,
    "files.trimTrailingWhitespace": true,
    // vetur插件格式化使用beautify内置规则
    "vetur.format.defaultFormatter.html": "js-beautify-html",
    // VScode 文件搜索区域配置
    "search.exclude": {
        "**/dist": true,
        "**/build": true,
        "**/elehukouben": true,
        "**/.git": true,
        "**/.gitignore": true,
        "**/.svn": true,
        "**/.DS_Store": true,
        "**/.idea": true,
        "**/.vscode": false,
        "**/yarn.lock": true,
        "**/tmp": true
    },
    // 排除文件搜索区域，比如node_modules(贴心的默认设置已经屏蔽了)
    "files.exclude": {
        "**/.idea": true,
        "**/yarn.lock": true,
        "**/.git": true,
        "**/.svn": true,
        "**/.hg": true,
        "**/CVS": true,
        "**/.DS_Store": true,
        "**/tmp": true,
        "**/node_modules": true,
        "**/bower_components": true,
        "**/dist": true
    },
    "files.watcherExclude": {
        "**/.git/objects/**": true,
        "**/.git/subtree-cache/**": true,
        "**/node_modules/**": true,
        "**/tmp/**": true,
        "**/bower_components/**": true,
        "**/dist/**": true
    },
    // 配置文件关联，以便启用对应的智能提示，比如wxss使用css
    "files.associations": {
        "*.vue": "vue",
        "*.wxss": "css"
    },
    // 配置emmet是否启用tab展开缩写
    "emmet.triggerExpansionOnTab": true,
    // 配置emmet对文件类型的支持，比如vue后缀文件按照html文件来进行emmet扩写
    "emmet.syntaxProfiles": {
        "vue-html": "html",
        "vue": "html",
        "javascript": "javascriptreact",
        // xml类型文件默认都是单引号，开启对非单引号的emmet识别
        "xml": {
            "attr_quotes": "single"
        }
    },
    // 在react的jsx中添加对emmet的支持
    "emmet.includeLanguages": {
        "jsx-sublime-babel-tags": "javascriptreact"
    },
    // 是否开启eslint检测
    "eslint.enable": true,
    // 文件保存时，是否自动根据eslint进行格式化
    "eslint.autoFixOnSave": true,
    // eslint配置文件
    "eslint.options": {
        "configFile": "/Users/rainwalker/Library/Application Support/Code/User/.eslintrc.js",
        "plugins": [
            "html",
            "javascript",
            {
                "language": "vue",
                "autoFix": true
            },
            {
                "language": "html",
                "autoFix": true
            },
            "vue"
        ]
    },
    // eslint能够识别的文件后缀类型
    "eslint.validate": [
        "javascript",
        "javascriptreact",
        {
            "language": "vue",
            "autoFix": true
        },
        {
            "language": "html",
            "autoFix": true
        },
        "typescript",
        "typescriptreact"
    ],
    // 格式化快捷键 shirt+alt+F
    // prettier进行格式化时是否安装eslint配置去执行，建议false
    "prettier.eslintIntegration": true,
    // 如果为true，将使用单引号而不是双引号
    "prettier.singleQuote": true,
    // 细节,配置gitlen中git提交历史记录的信息显示情况
    "gitlens.advanced.messages": {
        "suppressShowKeyBindingsNotice": true,
        "suppressUpdateNotice": true
    },
    "editor.formatOnSave": true,
    "editor.formatOnType": false,
    "workbench.iconTheme": "material-icon-theme"
}

```
