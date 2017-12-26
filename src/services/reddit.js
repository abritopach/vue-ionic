import Vue from 'vue'

export default {

  getPosts (value) {
    return Vue.http.get('https://www.reddit.com/r/' + value + '/top/.json?limit=20&sort=hot')
  }
}
