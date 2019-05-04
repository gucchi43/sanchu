import("firebase/functions");
import Vue from 'vue'
import App from './App'
import router from './router'



// firebase.initializeApp(config);

new Vue({
  router, //追加
  render: h => h(App)
}).$mount('#app')
