<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>
  <div class="box">test</div>
  <el-button type="primary">主要按钮</el-button>
  <el-button type="success">成功按钮</el-button>
  <el-button type="warning">警告按钮</el-button>
  <el-button type="danger">危险按钮</el-button>
  <el-button type="info">信息按钮</el-button>
</template>


<style lang="scss" scoped>
.card {
  color: $color;
  background-color: $color;
}
.box {
  height: 200px;
  width: 300px;
  border: 2px solid $color;
  // background-color: $color;
}
</style>
