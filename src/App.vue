<template>
  <div class="jumbotron">
    <header class="page-header">
      <div class="logo mr-4">
        <img src="@/assets/img/popcorn.svg" alt="Logo" />
      </div>
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
.page-header {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.logo {
  width: 100px;
}
</style>
