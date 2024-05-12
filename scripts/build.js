//引入vite导出的build方法，用它来创建
const path = require('path')
const fsExtra = require('fs-extra')

const fs = require('fs')
const { defineConfig, build } = require('vite')
const vue = require('@vitejs/plugin-vue')
const vueJsx = require('@vitejs/plugin-vue-jsx')

const inquirer = require('inquirer')
let version

// 入口文件
const entryFile = path.resolve(__dirname, './entry.ts')
// 组件目录
const componentsDir = path.resolve(__dirname, '../src')
// 输出目录
const outputDir = path.resolve(__dirname, '../build')

// 基础配置
const baseConfig = defineConfig({
  configFile: false,
  publicDir: false,
  plugins: [vue(), vueJsx()]
})
// rollup 配置
const rollupOptions = {
  // 外置
  external: ['vue', 'vue-router'],
  output: {
    exports: 'named',
    globals: {
      vue: 'Vue'
    }
  }
}
// 生成 package.json
const createPackageJson = name => {
  // 预设
  const fileStr = `{
    "name": "${name ? name : '@garymurphy/tian-ui'}",
    "version": "${version}",
    "main": "${name ? 'index.umd.js' : 'Tian-ui.umd.js'}",
    "module": "${name ? 'index.mjs' : 'Tian-ui.mjs'}",
    "author": "Tian",
    "github": "",
    "description": "Tian-UI，a Vue 3.0 UI Library",
    "repository": {
      "type": "git",
      "url": "https://github.com/oorange-ocean/Tian-UI.git"
    },
    "keywords": ["vue3", "组件库", "tsx", "UI"],
    "license": "ISC",
    "bugs": {
      "url": "https://github.com/oorange-ocean/Tian-UI/issues"
    }
  }`

  if (name) {
    // 单个组件，输出对应的package.json
    fsExtra.outputFile(
      path.resolve(outputDir, `${name}/package.json`),
      fileStr,
      'utf-8'
    )
  } else {
    // 全量
    fsExtra.outputFile(
      path.resolve(outputDir, 'package.json'),
      fileStr,
      'utf-8'
    )
  }
}
//全量构建
const buildAll = async () => {
  await build(
    defineConfig({
      ...baseConfig,
      build: {
        rollupOptions,
        lib: {
          entry: entryFile,
          name: 'MinSheepUI',
          fileName: 'Tian-ui',
          formats: ['es', 'umd']
        },
        outDir: outputDir
      }
    })
  )
  // 全量打包
  createPackageJson()
}
// 单组件按需构建
const buildSingle = async name => {
  await build(
    defineConfig({
      ...baseConfig,
      build: {
        rollupOptions,
        lib: {
          entry: path.resolve(componentsDir, name),
          name: 'index',
          fileName: 'index',
          formats: ['es', 'umd']
        },
        outDir: path.resolve(outputDir, name)
      }
    })
  )
  createPackageJson(name)
}

// 执行创建
const buildLib = async () => {
  if (/^\d+(?:\.\d+){2}$/.test(process.argv.slice(2)[0])) {
    //npm run build 版本号会执行
    version = process.argv.slice(2)[0]
  } else if (
    process.argv.slice(2)[0] == '--v' ||
    process.argv.slice(2)[0] == '--version'
  ) {
    // node ./scripts/build.js --v 版本号 或 node ./scripts/build.js --version 版本号 或 yarn build --v 版本号 或 yarn build --version 版本号 会执行
    version = process.argv.slice(2)[1]
  } else if (!/^\d+(?:\.\d+){2}$/.test(version)) {
    // 没有版本号或者版本号不正确会执行
    let { version: res } = await inquirer.prompt({
      name: 'version',
      type: 'input',
      message: '（必填）请输入版本号 ，将用Tian-ui发布于使用：',
      validate: value => {
        if (value.trim() === '') {
          return '版本号不能为空'
        }
        if (!/^\d+(?:\.\d+){2}$/.test(value)) {
          return '版本号格式不正确，版本号一个为 0.0.0 这种格式'
        }
        return true
      }
    })
    version = res
  }
  await buildAll()
  // 按需打包
  fs.readdirSync(componentsDir)
    .filter(name => {
      // 过滤组件目录：只要目录不要文件，且目录中包含index.ts
      const componentDir = path.resolve(componentsDir, name)
      const isDir = fs.lstatSync(componentDir).isDirectory()
      return isDir && fs.readdirSync(componentDir).includes('index.ts')
    })
    .forEach(async name => {
      await buildSingle(name)
    })
}

buildLib()
