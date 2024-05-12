<template>
  <s-form :model="model" layout="horizontal" label-size="lg" label-align="start">
    <s-form-item label="用户名:" field="user">
      <s-input v-model="model.user"/>
    </s-form-item>
  </s-form>
  {{model}}
</template>
<script setup>
  import {ref} from 'vue'
  import SForm from '../../../src/form/src/form'
  import SFormItem from '../../../src/form/src/form-item'
  import SInput from '../../../src/input/src/input'
  const model = ref({
    user: 'tom'
  })
</script>
<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

</style>