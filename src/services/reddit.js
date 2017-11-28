import Vue from 'vue'

export default {

  getPosts () {
    return Vue.http.get('https://www.reddit.com/r/gifs/top/.json?limit=20&sort=hot')
  }
}
