<template>
  <!--
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
      <br>
      <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
    <button @click="changeHelloMsg">Change hello message</button>
  </div>
  -->
  <!-- Ionic-ify vue app. -->
  <ion-app>
    <ion-header>
 
        <ion-navbar>
            <ion-title>Ionic & Vue Home</ion-title>
        </ion-navbar>
 
    </ion-header>
 
    <ion-content>
      <ion-item>
        <ion-button @click="goToDetail">Go to detail page</ion-button>
      </ion-item>

      <ion-list>
        <ion-item v-for="post in posts" v-bind:key="post.data.id">
          {{post.data.title}}
        </ion-item>
      </ion-list>
 
    </ion-content>
  </ion-app>
</template>

<script>

import RedditService from '../services/reddit'

export default {
  name: 'HelloWorld',
  props: ['myProp'],
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      posts: []
    }
  },
  methods: {
    changeHelloMsg () {
      this.msg = 'We did it!'
    },
    goToDetail () {
      this.$router.push('detail')
    }
  },
  created () {
    RedditService.getPosts().then(response => {
      this.posts = response.body.data.children
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

/*
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
*/

</style>
