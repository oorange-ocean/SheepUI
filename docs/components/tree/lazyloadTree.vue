<template>
  <STree :data="data" @lazy-load="lazyLoad"></STree>
</template>
<script setup>
import { ref } from 'vue';
import STree from '../../../src/tree/src/tree'
  import '../../../src/tree/style/tree.scss'

    const data = ref([
      {
        id: 'node-1',
        label: 'node-1',
        children: [
          {
            id: 'node-1-1',
            label: 'node 1-1 - dynamic loading',
            isLeaf: false,
          },
          { 
            id: 'node 1-2',
            label: 'node 1-2',
          },
        ],
      },
      { 
        id: 'node-2',
        label: 'node 2 - dynamic loading',
        isLeaf: false
      },
    ]);

    const lazyLoad = (node, callback) => {
      setTimeout(() => {
        const data = [
          {
            label: 'lazy node 1',
            expanded: true,
            children: [
              {
                id: 'lazy node 1-1',
                label: 'lazy node 1-1',
              },
              {
                id: 'lazy node 1-2',
                label: 'lazy node 1-2',
              },
            ],
          },
          {
            id: 'lazy node 2',
            label: 'lazy node 2',
          },
        ];
        callback({
          treeItems: data,
          node,
        });
      }, 1000);
    };

</script>