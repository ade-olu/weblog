<template>
  <div id="app">
    <router-view>
      <blog></blog>
      </router-view>
  </div>
</template>

<script>
import blog from './components/Home.vue'

export default {
  name: 'App',
  components: {
    'blog': blog
  }
}
</script>

<style>
@import url('https://cdn.rawgit.com/mfd/09b70eb47474836f25a21660282ce0fd/raw/e06a670afcb2b861ed2ac4a1ef752d062ef6b46b/Gilroy.css');

* {
  margin: 0 !important;
  padding: 0 !important;
}

body {
  background: #fefefe !important;
}

#app {
  font-family: 'Gilroy', sans-serif;
  color: #000;
}
</style>
