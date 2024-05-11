<template>
  <SPagination :total="50"></SPagination>

  <h6>total=1时应该只显示首页</h6>
  <SPagination :total="1"></SPagination>
  <h6>total=11时应该显示首页和尾页</h6>
  <SPagination :total="11"></SPagination>
  <h6>total=800 && pageIndex=4，应该显示右更多按钮</h6>
  <h6>total=800 && pageIndex=5，应该显示左更多按钮</h6>
  <SPagination :total="800"></SPagination>
  <h6>total=900 && pageIndex=5，应该显示左、右更多按钮</h6>
  <h6>total=900 && pageIndex=4，应该只显示右更多按钮</h6>
  <SPagination :total="900"></SPagination>
</template>
<script setup>
import SPagination from '../../../src/pagination/src/pagination'
import '../../../src/pagination/style/pagination.scss'
</script>
<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

</style>
