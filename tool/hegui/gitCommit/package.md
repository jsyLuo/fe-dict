> 局部安装开发依赖，6个包安装最新版本即可   

```
yarn add @commitlint/cli @commitlint/config-conventional   
commitizen cz-conventional-changelog husky standard-version  -D

npm i -D @commitlint/cli @commitlint/config-conventional    
commitizen cz-conventional-changelog  husky  standard-version
```

> 简单说明（可跳过）：  

```
commitlint/cli   校验message
commitlint/config-conventional  Angular团队校验的配置
commitizen  使用它的 git cz 替代 git commit 命令
cz-conventional-changelog   Angular团队规范的 preset，  
                            使得 commitizen 按照preset 生成合规 commit message.
husky  git hook，拦截git事件
standard-version  生成 CHANGELOG
```

> packjson.json  

```
// 安完包后自动出现
  "devDependencies": {
    "@commitlint/cli": "^7.2.1",
    "@commitlint/config-conventional": "^7.1.2",
    "commitizen": "^2.10.1",
    "cz-conventional-changelog": "^2.1.0",
    "husky": "^1.0.0-rc.14",
    "standard-version": "^4.4.0"
  },
// 手动添加
"scripts": {
    "commit": "git-cz",
    "release": "standard-version", // 通用版本发布
    "major": "standard-version --release-as major", // 主版本发布 1.0.0->2.0.0
    "minor": "standard-version --release-as minor", // 次要版本发布 1.0.0->1.1.0
    "patch": "standard-version --release-as patch", // 补丁版本发布 1.0.0->1.0.1
    "alpha": "standard-version --prerelease alpha", // alpha版本发布 1.0.0->1.0.1-alpha.0
    "beta": "standard-version --prerelease beta"    // beta版本发布 1.0.0->1.0.1-beta.0
  },

  "config": {
    "commitizen": {
      "path": "node_modules/cz-conventional-changelog"
    }
  },
  "standard-version": {
    "skip": {
      "tag": true //业务相关去除自动tag
    }
  },
  "commitlint": {
    "extends": [
      "@commitlint/config-conventional"
    ],
    "rules": {}
  },
  "husky": {
    "hooks": {
      "pre-commit": "vue-cli-service lint", // 此命令基于vue-cli3，非vue-cli3项目可以自由替换
      "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
     }
   }
```