<template>
  <STree :data="data" operable>
  </STree>
  </template>
  <script setup>
  import STree from '../../../src/tree/src/tree'
  import '../../../src/tree/styles/tree.scss'
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