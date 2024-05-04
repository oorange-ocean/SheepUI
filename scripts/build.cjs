const path = require('path');
const { defineConfig, build } = require('vite');
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
    "name": "${name ? name : 'sheep-ui'}",
    "main": "${name ? 'index.umd.js' : 'sheep-ui.umd.js'}",
    "module": "${name ? 'index.umd.js' : 'sheep-ui.es.js'}",
    "keywords": ["vue3", "组件库", "tsx", "UI"],
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
  await buildAll();
}
buildLib();
