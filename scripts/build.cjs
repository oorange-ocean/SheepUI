const path = require('path');
const { defineConfig, build } = require('vite');
const fs = require('fs-extra')
const fsExtra = require('fs-extra');
//引入插件
const vue = require('@vitejs/plugin-vue');
const vueJsx = require('@vitejs/plugin-vue-jsx');
//基础配置
const baseConfig = defineConfig({
  configFile: false,
  publicDir: false,
  plugins: [vue(), vueJsx()],
});
//入口文件
const entryFile = path.resolve(__dirname, './entry.ts');
//组件目录
const componentsDir = path.resolve(__dirname,'../src')
//输出目录
const outputDir = path.resolve(__dirname, '../build');
//rollup配置
const rollupConfig = {
  external: ['vue', 'vue-router'],
  output: {
    globals: {
      vue: 'Vue',
    },
  },
};

// 生成package.json
const createPackageJson = name => {
  // 预设
  const fileStr = `{
    "name": "${name ? name : '@garymurphy/tian-ui'}",
    "version":"0.0.0",
    "main": "${name ? 'index.umd.js' : 'sheep-ui.umd.js'}",
    "module": "${name ? 'index.umd.js' : 'sheep-ui.es.js'}",
    "keywords": ["vue3", "组件库", "tsx", "UI"],
    "author":"garymurphy",
    "description":"A toy Vue.js3.0 tookkit for Web",
    "license": "ISC"
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

const buildSingle = async name => {
  await build(
    defineConfig({
      ...baseConfig,
      build: {
        rollupConfig,
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

//执行构建
const buildAll = async () => {
  await build({
    ...baseConfig,
    build: {
      lib: {
        entry: entryFile,
        name: 'sheep-ui',
        fileName: 'sheep-ui',
        formats: ['es', 'umd'],
      },
      outDir: outputDir,
      rollupOptions: {
        ...rollupConfig,
      },
    },
  });
  createPackageJson()
};

const buildLib = async () => {
  await buildAll()

  // 按需打包
  fs.readdirSync(componentsDir)
    .filter(name => {
      // 只要目录不要文件，且里面包含index.ts
      const componentDir = path.resolve(componentsDir, name)
      const isDir = fs.lstatSync(componentDir).isDirectory()
      return isDir && fs.readdirSync(componentDir).includes('index.ts')
    })
    .forEach(async name => {
      await buildSingle(name)
    })
}
buildLib();
