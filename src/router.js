import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Feed from './Feed.vue';
import List from './List.vue';
import Post from './Post.vue';

// export const router = [
//   { path: '/', component: App },
//   { path: '/list', component: List },
//   { path: '/post', component: Post }
// ];

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'feed',
      component: Feed
    },
    {
      path: '/list',
      name: 'list',
      component: List
    },
    {
      path: '/post',
      name: 'post',
      component: Post
    }
  ]
})
