<template>
  <s-form 
    ref="loginForm" 
    :model="model" 
    :rules="rules"
    layout="vertical"
    @submit="onLogin"
  >
    <s-form-item label="用户名：" field="user">
      <s-input v-model="model.user" />
    </s-form-item>
    <s-form-item label="密码：" field="pwd">
      <s-input v-model="model.pwd" type="password" />
    </s-form-item>
    <s-form-item>
      <button>登录</button>
    </s-form-item>
  </s-form>
</template>
<script setup>
  import SForm from '../../../src/form/src/form'
  import SFormItem from '../../../src/form/src/form-item'
  import SInput from '../../../src/input/src/input'
  import '../../../src/input/style/input.scss'
  import {ref} from 'vue'
  const model = ref({
    user: '',
    pwd: ''
  })
  const rules = ref({
    user: [{required: true, message: '用户名为必填项'}],
    pwd: [{required: true, message: '密码为必填项'}],
  })

  const loginForm = ref(null)
  const onLogin = () => {
    loginForm.value.validate(valid => {
      if (valid) {
        alert('登录成功')
      } else {
        alert('校验失败，请重试！')
      }
    })
  }
</script>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>