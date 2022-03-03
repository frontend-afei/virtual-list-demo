<template>
  <div class="main">
    <div class="title">虚拟列表</div>
    <div class="nav">
      <router-link to="/" exact>列表项高度固定</router-link> |
      <router-link to="/dynamic">列表项高度不固定</router-link> |
      <router-link to="/handWrite">手写一个虚拟列表</router-link>
    </div>
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss">
  .main {
    padding: 10px;
    text-align: center;
    .title {
      margin-bottom: 10px;
      font-weight: 600;
      font-size: 20px;
    }
    .nav {
      a {
        text-decoration: none;
        &.active {
          color: #409eff;
        }
      }
    }
    .content {
      padding: 20px;
    }
  }
</style>
