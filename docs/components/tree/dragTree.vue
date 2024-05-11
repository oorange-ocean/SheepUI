<template>
  <h6><p>默认行为</p></h6>
  <STree :data="data" dragdrop></STree>

  <h6><p>排序</p></h6>
  <STree :data="data" :dragdrop="{ dropPrev: true, dropNext: true, dropInner: true }"></STree>
</template>
  <script setup>
  import STree from '../../../src/tree/src/tree'
  import '../../../src/tree/style/tree.scss'
    import { ref } from 'vue'
    const data = ref([
      {
        label: 'docs',
        id: 'docs'
      },
      {
        label: 'packages',
        id: 'packages',
        expanded: true,
        children: [
          {
            label: 'plugin-vue',
            id: 'plugin-vue'
          },
          {
            label: 'vite',
            id: 'vite',
            expanded: true,
            children: [
              {
                label: 'src',
                id: 'src'
              },
              {
                label: 'README.md',
                id: 'README.md'
              }
            ]
          }
        ]
      },
      {
        label: 'scripts',
        id: 'scripts',
        children: [
          {
            label: 'release.ts',
            id: 'release.ts'
          },
          {
            label: 'verifyCommit.ts',
            id: 'verifyCommit.ts'
          }
        ]
      },
      {
        label: 'pnpm-workspace.yaml',
        id: 'pnpm-workspace.yaml'
      }
    ])
  </script>
  <style>
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    
  </style>