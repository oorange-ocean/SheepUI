<template>
  <s-tree :data="data" :height="300"></s-tree>
</template>
<script lang="ts" setup>
import { defineComponent, ref } from 'vue';
import STree from '../../../src/tree/src/tree'
  import '../../../src/tree/style/tree.scss'
    const data = ref([
      ...Array.from({ length: 1000 }).map((_, index) => ({
        id: 'node ' + index,
        label: 'node ' + index,
      })),
    ]);

</script>