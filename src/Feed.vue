<template>
  <div>
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <tab-menu></tab-menu>
    <h1>{{ this.title.name }}</h1>
    <h2>キュレーター {{ this.user.name }}</h2>
    <br>
    <div v-for="movie in movies">
      <youtube-list v-bind:movie="movie"/>
    </div>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import TabMenu from './components/TabMenu.vue'
import YoutubeList from './components/YoutubeList.vue'

export default {
  name: 'app',
  components: {
    TabMenu,
    YoutubeList,
  },
  data() {
    return {
      title: {
        name: "KPOPマッシュアップ３選"
      },
      user: {
        name: "天然聖水sparkling"
      },
      movies: [
        {
          url: 'https://www.youtube.com/watch?v=pKyqm22I_Xg',
          title: 'ワン',
          comment: 'マジ最高マジ卍マジやばいマジセンスある',
        },
        {
          url: 'https://www.youtube.com/watch?v=jH2amdgftgg',
          title: 'ツー',
          comment: 'ホンマ最高ホンマ卍ホンマやばいホンマセンスある'
        },
        {
          url: 'https://www.youtube.com/watch?v=ijWZAFQecPs',
          title: 'スリー',
          comment: 'クソ最高クソ卍クソやばいクソセンスある'

        }
      ]
    }
  }
}
</script>

<style>
</style>
