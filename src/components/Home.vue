<template>
  <div class="h">

    <!-- Nav -->
    <div class="nav">
      <router-link :to="{name: 'Home'}" style="text-decoration: none; -webkit-tap-highlight-color: transparent !important;">
      <img src="../assets/logo.png" class="logo"/>
       </router-link>
      </div>

    <br><br>

    <!-- Title -->
      <h1 class="title">{{ title }}</h1>

    <br><br><br>

    <!-- List Background -->
    <div class="bg">
      <h2 class="t">Trending</h2>

      <!-- Blogs List -->
      <ul class="list">
          <li v-for="blog in blogs" :key="blog.id">
            <i class="far fa-newspaper"></i>
            <router-link :to="{ name: 'BlogPost', params: { id: blog.id } }" style="text-decoration: none; -webkit-tap-highlight-color: transparent !important;">
              <span class="l-span">
            {{ blog.title | capitalize }}
              </span>
            </router-link>
          </li>
      </ul>
    </div>

  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'blog',
  data() {
    return {
      title: 'WeBlog',
      blogs: []
    }
  },
  async created() {
    try {
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      this.blogs = res.data;
    }
    catch (e) {
      console.error(e);
    }
  },
  filters: {
  capitalize: function (value) {
    if (!value) return ''
    value = value.toString()
    return value.charAt(0).toUpperCase() + value.slice(1)
  }
}
}
</script>

<!-- CSS -->
<style scoped>
@import url('https://cdn.rawgit.com/mfd/09b70eb47474836f25a21660282ce0fd/raw/e06a670afcb2b861ed2ac4a1ef752d062ef6b46b/Gilroy.css');

* {
  margin: 0 !important;
  padding: 0 !important;
}

.nav {
  position: relative;
  width: 100%;
  height: 4em;
  background: #000;
  margin: 0 !important;
  padding: 0 !important;
}

.logo {
  position: relative;
  width: 42px !important;
  height: auto !important;
  top: 50%;
  left: 5%;
  transform: translate(-5%, -50%);
}

.title {
  text-align: center;
  color: #000 !important;
}

.bg {
  position: absolute;
  left: 50%;
  transform: translateX(-50%) !important;
  width: 55%;
  height: auto !important;
  padding-top: 1em !important;
  padding-bottom: 1em !important;
  margin-bottom: 3em !important;
  border: 1px solid #e2e8f0;
  border-radius: 10px;
}

.list {
  list-style-type: none;
}

.list li {
  padding-bottom: 1em !important;
  margin-bottom: 1em !important;
  margin-left: 2em !important;
  margin-right: 2em !important;
  border-bottom: 1px solid #e2e8f0;
  color: #000 !important;
  text-decoration: none !important;
  transition: all 250ms ease;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent !important;
}

li a {
color: #000 !important;
text-decoration: none !important;
-webkit-tap-highlight-color: transparent !important;
}

.list li:hover {
  color: #19BF69 !important;
}

li i {
  margin-right: 0.2em !important;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent !important;
}

.t {
  padding-left: 1.2em !important;
  padding-right: 1.2em !important;
  padding-bottom: 0.8em !important;
  margin-bottom: 1em !important;
  border-bottom: 1px solid #e2e8f0;
}

/* Media Queries */
@media screen and (max-width: 1024px) {
  .bg {
    width: 80%;
  }
}
</style>
