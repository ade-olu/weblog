<template>
  <div class="p">
      <!-- Nav -->
    <div class="nav">
      <router-link :to="{name: 'Home'}" style="text-decoration: none; -webkit-tap-highlight-color: transparent !important;">
      <img src="../assets/logo.png" class="logo"/>
       </router-link>
      </div>
      
<br><br>

      <div class="post">
          <!-- Blog Post Title -->
        <h1 class="p-title">{{ post.title | capitalize }}</h1>
        <br>

<!-- Image -->
        <img src="../assets/image.jpg" class="img">
        <br><br>

        <!-- Blog Post Body -->
        <p class="p-body">{{ post.body | capitalize }}</p>
      </div>
      <div>
          <br><br>

<!-- Comment Button -->
<div class="comment-bg">
  <p>Comments ({{ total }})</p>
<i class="far fa-comment" @click="commentIs = !commentIs"></i>
</div>

<br>

<!-- Comment Input -->
  <div v-if="commentIs">
    <div class="comment-input">
                  <form>

                    <!-- User Icon -->
                    <i class="far fa-user-circle u-i"></i>

                    <!-- Name -->
                    <input class="name" type="text" name="name" id="name" v-model="details.name" placeholder="Name">
                    
                    <!-- Comment -->
                    <input class="comment" type="text" name="comment" id="comment" v-model="details.body" placeholder="Comment">
                    
                    <!-- Button -->
                    <button @click.prevent="addComments" class="c-b">Comment</button>
                  </form>
              </div>
              <br>
</div>

          <!-- Comments Section -->
          <div class="comment-sec">
          <ul class="c-l">
              <li class="c" v-for="comment in comments" :key="comment.id">
                    <!-- Name -->
                  <h3 class="n">
                    <!-- User Icon -->
                    <i class="far fa-user-circle u" ></i>
                    <span class="n-span">
                    {{ comment.name | capitalize }}
                    </span>
                    </h3>
                  <br>

                  <!-- Comment -->
                  <p>{{ comment.body | capitalize }}</p>
              </li>
          </ul>
          </div>

          <div>
  
          </div>
      </div>
  </div>
</template>

<script>

export default {
    data(){
        return {
            id: this.$route.params.id,
            post: {},
            comments: [],
            commentIs: false,
            details: {
                name: "",
                body: ""
            },
            total: 5
        }
    },
    created(){
        this.getPosts(),
        this.getComments()
    },
    methods: {
        getPosts(){
            this.$http.get('https://jsonplaceholder.typicode.com/posts/' + this.id).then(
            response=> response.json()
        ).then(
            data => this.post = data
            )
        },
        getComments(){
            this.$http.get('https://jsonplaceholder.typicode.com/comments?postId=' + this.id).then(
                response => response.json()
            ).then(
                data => {this.comments = data
                console.log(this.comments)}
            )
        },
        addComments(){
            if (this.details.name && this.details.body){
                this.comments.push(this.details)
                this.details = {}
                this.total++
            }
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
*{
  margin: 0;
  padding: 0;
}

.p {
  height: auto !important;
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

.img {
  width: 50% !important;
  height: auto !important;
  background-size: cover !important;
 position: relative !important;
 left: 50% !important;
 transform: translateX(-50%) !important;
 border-radius: 2px;
}

.p-title {
    width: 50%;
    text-align: left;
    margin-left: auto !important;
    margin-right: auto !important;
}

.p-body {
    width: 50%;
    margin-left: auto !important;
    margin-right: auto !important;
    font-size: 18px;
}

.comment-bg {
  position: relative !important;
  margin-left: auto !important;
  margin-right: auto !important;
  width: 48%;
  height: 2em;
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  padding: 1em !important;
}

.comment-bg i {
  position: absolute !important;
  top: 50%;
  left: 95%;
  transform: translate(-95%, -50%) !important;
  font-size: 24px;
  cursor: pointer;
  transition: all 250ms ease;
  -webkit-tap-highlight-color: transparent !important;
}

.comment-bg p {
  position: absolute !important;
  top: 50%;
  left: 5%;
  transform: translate(-5%, -50%) !important;
  font-size: 18px;
  font-weight: bold;
}

.comment-bg i:hover {
  color: #19BF69 !important;
}

.comment-input {
  position: relative !important;
  margin-left: auto !important;
  margin-right: auto !important;
  width: 48%;
  height: 3em;
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  padding: 1em !important;
}

.name, .comment {
  font-family: 'Gilroy', sans-serif !important;
  outline: none !important;
  border: 1px solid #e2e8f0;
  border-radius: 6px;
  width: 9em;
  height: 2.4em;
  padding-left: 1em !important;
  font-size: 16px;
}

.u-i {
  position: absolute;
  top: 50%;
  left: 5%;
  transform: translate(-5%, -50%) !important;
  font-size: 24px;
}

.name {
  position: absolute;
  top: 50%;
  left: 20%;
  transform: translate(-20%, -50%) !important;
}

.comment {
  position: absolute;
  top: 50%;
  left: 62%;
  transform: translate(-62%, -50%) !important;
}

.c-b {
  position: absolute;
  top: 50%;
  left: 94%;
  transform: translate(-94%, -50%) !important;
  font-family: 'Gilroy', sans-serif !important;
  width: 7em;
  height: 2.4em;
  border-radius: 6px;
  background: #000;
  color: #fefefe;
  cursor: pointer;
  text-decoration: none;
  border: none;
  outline: none;
  transition: all 250ms ease;
  font-size: 16px;
  font-weight: bold;
  -webkit-tap-highlight-color: transparent !important;
}

.c-b:hover {
  background: #19BF69;
}

.comment-sec {
  position: relative !important;
  margin-left: auto !important;
  margin-right: auto !important;
  width: 48%;
  height: auto;
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  padding: 1em !important;
  margin-bottom: 3em !important;
}

.c-l {
  list-style-type: none;
}

.c {
  margin: 1em !important;
}

.u {
  font-size: 20px;
   margin-right: 0.2em !important;
}

.n {
  font-size: 20px;
}

/* Media Queries */
/* 1024px */
@media screen and (max-width: 1024px) {
  .comment-input {
    height: auto;
    padding-top: 2em !important;
    padding-bottom: 2em !important;
  }

  .name {
  position: relative;
  top: 0%;
  left: 0%;
  transform: translate(0, 0) !important;
  margin-left: 2em !important;
}

.comment {
  position: relative;
  top: 0;
  left: 0;
  transform: translate(0, 0) !important;
  margin-left: 3.5em !important;
}

.u-i {
  position: relative;
  top: 0;
  left: 0;
  transform: translate(0, 0) !important;
  margin-left: 0.5em !important;
  font-size: 24px;
}

.c-b {
  position: relative;
   top: 0;
  left: 0;
  transform: translate(0, 0) !important;
  margin-top: 1.5em !important;
  margin-left: 4.2em !important;
}
}

/* 768px */
@media screen and (max-width: 768px) {
.p-title, .p-body, .img {
  width: 60% !important;
}

.comment-bg, .comment-input, .comment-sec {
  width: 58%;
}

.comment {
  margin-left: 2em !important;
}
}

/* 575px */
@media screen and (max-width: 575px) {
  .p-title, .p-body, .img {
  width: 80% !important;
}

  .comment-bg, .comment-input, .comment-sec {
  width: 74%;
  }

  .comment-bg i {
  position: absolute !important;
  top: 50%;
  left: 90%;
  transform: translate(-90%, -50%) !important;
}

.comment-bg p {
  position: absolute !important;
  top: 50%;
  left: 12%;
  transform: translate(-12%, -50%) !important;
}

.name {
  width: 10em;
}

.comment {
  position: relative;
  top: 0;
  left: 0;
  transform: translate(0, 0) !important;
  margin-top: 1.5em !important;
  margin-left: 4.2em !important;
  width: 10em;
}
}

/* 320px */
@media screen and (max-width: 320px) {
.name {
  margin-left: 1.5em !important;
  width: 9em;
}

.comment {
  width: 9em;
}

.comment, .c-b {
  margin-left: 3.7em !important;
}
}
</style>
