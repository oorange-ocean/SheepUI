<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import Test from './components/Test'
import SButton from './button/src/button'
</script>

<template>
      <HelloWorld msg="You did it!" />
      <Test>
            <template #default>
            aaaa
            </template>
            <template #title>
            <h3>title</h3>
            </template>
      </Test>
      <SButton type="primary" size="large" block></SButton>
      <SButton type="primary" ></SButton>
      <SButton type="primary" size="small" disabled>确定</SButton>


</template>

