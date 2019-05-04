<template>
  <div>
    <p>ここはページPostです</p>
    <h1>{{ getTaskTitle() }}</h1>
    <h2>{{ formPageTitle }}</h2>

    <!-- <p v-if="!isValid">
      <button type="submit" class="disabled">送信</button>
    </p>
    <p v-if="isValid">
      <button type="submit" class="">送信</button>
    </p> -->
    <!-- <button type="submit" v-else="" class="disabled">送信</button> -->
    <!-- <button type="submit" v-bind:disabled="!isValid" class="btn btn-primary">送信</button> -->
    <!-- <button v-on:click="testLog()">テストコンソール</button>
    <button v-on:click="updateForm()">reset</button>
    <button v-on:click="getNextPath()">NextPath</button>
    <button v-on:click="savePost()">savePost</button> -->
    <!-- <router-link v-bind:to="{ name : 'post', params : { id:  formNo}}"> -->
      <!-- <button type="submit" v-bind:disabled="!isValid" v-on:click="nextPage">送信</button> -->
      <!-- <button v-on:click="submit()" v-bind:disabled="!isValid">送信</button> -->

    <!-- </router-link> -->
    <!-- <router-link to="/list">Go to List</router-link> -->
    <!-- <youtube-list v-bind:posts[0]="movie"/> -->
    <div v-show="isTitileForm">
      "タイトルフォーム"
      <div class="form-group">
        <label for="exampleInputEmail1">ページタイトル</label>
        <input v-model="formPageTitle" type="text" placeholder="ページタイトル">
        <p>
          <small v-if=isFirstValid>NICE!!!</small>
          <small v-else>{{ errorMessage.title }}</small>
        </p>
      </div>
      <!-- <button v-on:click="nextAndDone()" v-bind:disabled="!isFirstValid">次へ</button> -->
      <button v-on:click="saveContact()" v-bind:disabled="!isFirstValid">次へ</button>
    </div>

    <div v-show="isMovieForm">
      "動画フォーム"
      <div class="form-group">
        <label for="exampleInputEmail1">URL</label>
        <input v-model="form.url" type="url" placeholder="URL">
        <p>
          <small v-if=validation.url>NICE!!!</small>
          <small v-else>{{ errorMessage.url }}</small>
        </p>
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1">タイトル</label>
        <input v-model="form.title" type="text" placeholder="タイトル">
        <p>
          <small v-if=validation.title>NICE!!!</small>
          <small v-else>{{ errorMessage.title }}</small>
        </p>
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1">コメント</label>
        <input v-model="form.comment" type="text" placeholder="コメント">
        <p>
          <small v-if=validation.comment>NICE!!!</small>
          <small v-else>{{ errorMessage.comment }}</small>
        </p>
      </div>
      <button v-on:click="nextAndDone()" v-bind:disabled="!isValid">{{ doneButtonTitle() }}</button>
    </div>

    <div v-show="isPreview">
      "チューチューブ"
      <div v-for="post in posts">
        <youtube-list v-bind:movie="post"/>
      </div>
      <button v-on:click="nextAndDone()">{{ doneButtonTitle() }}</button>
    </div>
  </div>
</template>

<script>

import db from '../firebaseInit'
import FormInput from './components/FormInput.vue'
import YoutubeList from './components/YoutubeList.vue'

export default {
  components: {
    YoutubeList
  },
  data() {
    return {
      formPageTitle: '',
      form: {
        url: '',
        title: '',
        comment: ''
      },
      errorMessage: {
        url: 'URLを入力してください',
        title: 'タイトルを入力してください',
        comment: 'コメントを入力してください'
      },
      posts: [
        {
          url: '',
          title: '',
          comment: ''
        },
        {
          url: '',
          title: '',
          comment: ''
        },
        {
          url: '',
          title: '',
          comment: ''
        }
      ],
      formNo: 0
    }
  },
  computed: {
    validation() {
      const form = this.form
      return {
        title : !!form.title,
        comment : !!form.comment,
        url : !!form.url,
      }
    },
    isFirstValid() {
      return !!this.formPageTitle
    },
    isValid() {
      var validation = this.validation
      return Object.keys(validation).every(function (key) {
        return validation[key]
      })
    },
    isTitileForm() {
      if (this.formNo == 0) {
        return true
      } else {
        return false
      }
    },
    isMovieForm() {
      if (this.formNo >= 1 && this.formNo <= 3) {
        return true
      } else {
        return false
      }
    },
    isPreview() {
      if (this.formNo == 4) {
        return true
      } else {
        return false
      }
    }
  },
  // 追記
  // beforeRouteUpdate (to, from, next) {
  //   // URL の id が変わったときに src/components/items-detail.vue の updateItem 関数を実行してモデルを更新する
  //   updateForm()
  //   next()
  // },
  methods: {
    submit () {
      console.log(`save url: ${this.form.url} title: ${this.form.title} comment: ${this.form.comment} id: `)
    },
    savePost() {
      switch( this.formNo ) {
        case 0:
        console.log('zero save!');
        console.log(this.formPageTitle)
        break;
        case 1:
        this.posts[0].url = this.form.url
        this.posts[0].title = this.form.title
        this.posts[0].comment = this.form.comment
        console.log('first movie save!');
        break;
        case 2:
        this.posts[1].url = this.form.url
        this.posts[1].title = this.form.title
        this.posts[1].comment = this.form.comment
        console.log('second movie save!');
        break;
        case 3:
        this.posts[2].url = this.form.url
        this.posts[2].title = this.form.title
        this.posts[2].comment = this.form.comment
        console.log('third movie save!');
        break;
        case 4:
        //ここでfirebaseに入れる
        console.log('fourth movie save!');
        break;
      }
      console.log(this.posts);
    },
    testLog () {
      console.log("テストログ")
    },
    doneButtonTitle() {
      if (this.formNo <= 3) {
        return "次へ"
      } else {
        return "決定"
      }
    },
    nextAndDone() {
      console.log("nextAndDone");
      console.log(this.formNo);

      this.savePost()
      this.resetForm()
      this.getNextPath()
    },
    getNextPath() {
      if (this.formNo < 4) {
        this.formNo ++
        // this.$router.push({ name: 'post', params: { id: this.$route.params.id + 1}})
        // this.$router.push({ path: 'list'})
      } else {
        // this.$router.push({ name: 'post', params: { id: this.formNo + 1}})
        // this.$router.push({ path: 'post', params: { id: this.formNo + 1}})
        this.$router.push({ name: 'list'})
        // this.$router.push({ path: '/list'})
        // this.$router.push({ fullPath: 'list'})
      }
    },
    resetForm () {
      this.form.url = ''
      this.form.title = ''
      this.form.comment = ''
    },
    getTaskTitle() {
      if (this.formNo == 0) {
        return "サンチュ巻こう！"
      } else if (this.formNo == 4) {
        return "ナイスサンチュ！"
      } {
        return this.formNo + "ンチュ!"
      }
    },
    saveContact () {
      db.collection('feed').add({
        pageTitle: this.formPageTitle
      }).then(function (docRef) {
        console.log('Document written with ID: ', docRef.id);
      }).catch(function (error) {
        console.error('Error adding document: ', error);
      });
    },
    sendPost() {
      firebase
      .database()
      .ref("Feed/")
      .push({
        pageTitle: this.formPageTitle
      }, () => {
        console.log("sendPost成功")
      });
    }
  }
}
</script>


<style>
</style>
