<template>
  <p>
    <span>layout:</span>
    <label>
      <input v-model="layout" type="radio" value="vertical" />
      vertical
    </label>
    <label>
      <input v-model="layout" type="radio" value="horizontal" />
      horizontal
    </label>
  </p>
  <s-form :model="model" :layout="layout">
    <s-form-item label="用户名：">
      <s-input v-model="model.user" />
    </s-form-item>
  </s-form>
</template>
<script setup>
import { ref } from 'vue'
import SForm from '../../../src/form/src/form'
  import SFormItem from '../../../src/form/src/form-item'
  import SInput from '../../../src/input/src/input'
const layout = ref('vertical')
const model = ref({
  user: 'tom'
})
</script>