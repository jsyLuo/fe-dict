```
{
  // ...
  "scripts": {
	// ...
    "commit": "git-cz",
    "release": "standard-version"
    // ...
  },
  "devDependencies": {
    // ...
    "@commitlint/cli": "^7.2.1",
    "@commitlint/config-conventional": "^7.1.2",
    "commitizen": "^2.10.1",
    "cz-conventional-changelog": "^2.1.0",
    "husky": "^1.0.0-rc.14",
    "standard-version": "^4.4.0"
  },
  // ...
  "config": {
    "commitizen": {
      "path": "node_modules/cz-conventional-changelog"
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
      "pre-commit": "vue-cli-service lint",
      "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
    }
  }
}
```
