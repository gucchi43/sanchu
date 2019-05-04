<template>
  <div>
    <h2>{{ this.movie.title}}</h2>
    <h3>{{ this.movie.comment }}</h3>
    <h5>{{ this.movie.url }}</h5>
    <!-- <youtube
      ref="youtube"
      :video-id="videoId"
      @ready="ready"
      @ended="ended"
      @playing="playing"/> -->
      <youtube
        ref="youtube"
        :video-id = getId
        @ready="ready"
        @ended="ended"
        @playing="playing"/>
    <!-- <button @click="playVideo">play</button>
    <button @click="pauseVideo">pause</button>
    <button @click="stopVideo">stop</button> -->
    <br>
  </div>
</template>

<script>

import Vue from 'vue';
import VueYoutube from 'vue-youtube'
Vue.use(VueYoutube)

export default {
  name: 'YoutubeList',
  props: {
    movie: {
      title: String,
      comment: String,
      url: String
    }
    // movieTitle: String,
    // movieComment: String,
    // movieUrl: String
  },
  data() {
    return {
      videoId: ''
    }
  },
 //  created(){
 //    console.log("created呼んでID発行")
 //    this.videoId = this.$youtube.getIdFromUrl(this.movie.url)
 // },
 // mounted() {
 //   this.videoId = this.$youtube.getIdFromUrl(videoUrl)
 // },
  computed: {
    player() {
      return this.$refs.youtube.player
    },
    getId(){
      console.log("created呼んでID発行")
      // this.videoId = this.$youtube.getIdFromUrl(this.movie.url)
      return this.$youtube.getIdFromUrl(this.movie.url)
   }
  },
  methods: {
    getId() {
      return this.$youtube.getIdFromUrl(videoUrl)
    },
    playVideo() {
      this.player.playVideo()
    },
    pauseVideo() {
      this.player.pauseVideo()
    },
    stopVideo() {
      this.player.stopVideo()
    },
    ready() {
      console.log('ready')
    },
    ended() {
      console.log('ended')
    },
    playing() {
      console.log('playing')
    }
  }
}
</script>
