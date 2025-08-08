<script>
export default {
  methods: {
    goToPage1() {
      this.$router.push('/page1')
    },
  },
}
</script>

<template>
  <h2>HomeView</h2>
  <el-button type="primary" plain @click="goToPage1">Go to Page1</el-button>
</template>