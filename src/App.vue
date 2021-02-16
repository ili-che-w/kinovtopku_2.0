<template>
  <div class="jumbotron">
    <header class="page-header">
      <div class="logo">[!]</div>
      <h1 class="site-title">
        <router-link to="/">KinoVTopku</router-link>
      </h1>
    </header>
  </div>
  <div class="container">
    <router-view />
  </div>
</template>

<style lang="scss">
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.page-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
