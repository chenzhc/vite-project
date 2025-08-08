<script setup>
</script>

<template>
   <div class="common-layout">
    <el-container>
      <el-header> 
        <p><strong>Current route path: </strong> {{  $route.fullPath  }}</p>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu
              default-active="2"
              class="el-menu-vertical-demo"  >
              <el-menu-item index="1">
                <router-link to="/"><span>Go to Home</span></router-link>
              </el-menu-item>
              <el-menu-item index="2">
                  <router-link to="/page1"><span>Go to Page1</span></router-link>
              </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main>
          <RouterView />
        </el-main>
      </el-container>
    </el-container>
  </div>
  
</template>

<style lang="scss" scoped>
.common-layout {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;

  .el-header {
    background-color: cadetblue;
  }
  
  .el-aside {
    border: 2px solid green;
    background-color: tan;

    .el-menu-item {
      min-width: 0;

      a {
        width: 100vh;
        display: block;
      }
    }
  }

  .el-main {
    border: 2px solid orange;
  }
  
  
}
</style>
