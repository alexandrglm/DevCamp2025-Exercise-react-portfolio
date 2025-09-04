# React/Redux/Router Starter Project

> Provided for the students of the [Bottega Code School](https://bottega.tech/)

*Fork from [es6-webpack2-starter](https://github.com/micooz/es6-webpack2-starter)*

# VERSIONS REQUIRED
#### Python 2.7
#### Node 12.x (12.22.12 works)

#### Easy Environment shell used:
`Py2-7-18_Node12-22-12_for_DevCamps.sh` from [here](https://github.com/alexandrglm/easyenv/tree/7b5d9a1e2ac1f7d36efd2be5f3c32d7d7498129f/Old-React-for_DevCamp-Courses).

# Manual Fixes Applied for using this in 2025:

#### 1. `npm run start` script won't work in many Linux setups while using Py2.x

Due to system-sec hardening, changes need to be applied in order to fix Chokidar watchers:
- Add `CHOKIDAR_USEPOLLING=true' 

```json
"scripts": {
    "preinstall": "npm set audit false",
    "start": "CHOKIDAR_USEPOLLING=true webpack-dev-server --config webpack/dev.config.js --watch",
```