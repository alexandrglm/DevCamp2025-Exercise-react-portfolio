# React/Redux/Router Starter Project

> Provided for the students of the [Bottega Code School](https://bottega.tech/)

*Fork from [es6-webpack2-starter](https://github.com/micooz/es6-webpack2-starter)*
---
# 2025 Update
-
## REQUIRED VERSIONS
#### Python 2.7
#### Node 12.x (12.22.12 confirmed working)

#### Environment Shell Used:
`Py2-7-18_Node12-22-12_for_DevCamps.sh` from [here](https://github.com/alexandrglm/easyenv/tree/7b5d9a1e2ac1f7d36efd2be5f3c32d7d7498129f/Old-React-for_DevCamp-Courses).
---
# Manual Fixes Needed for 2025:

#### 1. Do not update packages
Avoid running `npm i <package>`. This environment is intended to stay on these legacy versions.

#### 2. `npm run start` may fail on many Linux setups with Python 2.x
Because of modern system security hardening, you need to adjust Chokidar watchers:
- Add `CHOKIDAR_USEPOLLING=true`

```json
"scripts": {
    "preinstall": "npm set audit false",
    "start": "CHOKIDAR_USEPOLLING=true webpack-dev-server --config webpack/dev.config.js --watch",
```

#### 3. `axios` updated to 1.12.0 (no breaking changes)

