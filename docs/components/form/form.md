<script setup>
  import normalForm from './normalForm.vue'
  import customForm from './customForm.vue'
  import validateForm from './validateForm.vue'
</script>
# 表单 Form

## 基础用法

传入 model 属性设置数据模型。
<normalForm/>
## 表单样式

水平排列模式下，label-size 可以设置 label 的宽度；label-align 可以设置 label 的对齐方式。

label-size 提供 sm、md、lg 三种大小，分别对应 80px、100px、150px，默认为 md；label-align 可选值为 start、center、end，默认为 start。
<customForm/>

## 表单校验
<validateForm/>
