<template>
  <div id="app-layout">
    <div class="ui">
  <div class="left-menu">
    <form action="#" class="search">
      <input placeholder="search..." type="search" name="" id="">
      <input type="submit" value="">
    </form>
    <User></User>
</div>
<div class="chat">
  <div class="top">
    <div class="avatar">
      <img width="50" height="50" src="http://cs625730.vk.me/v625730358/1126a/qEjM1AnybRA.jpg">
    </div>
    <div class="info">
      <div class="name">{{Auth.name}}</div>
      <div class="count">already 1 902 messages</div>
    </div>
    <i class="fa fa-star"></i>
  </div>
  <div class="wrap-message">
      <Message></Message>
  </div>
  <div class="write-form">
    <form class="" v-on:submit.prevent="submitLogin" enctype="multipart/form-data" accept="image/*">
      <textarea placeholder="Type your message" name="message" v-model="message" rows="2"></textarea>
      <input type="hidden" name="_token" :value="csrf">
      <input type="file" id="file" ref="file" v-on:change="handleFileUpload()"/>
      <i class="fa fa-picture-o"></i>
      <i class="fa fa-file-o"></i>
      <input type="submit" class="send" value="send">
    </form>
  </div>
</div>
</div>
  </div>
</template>

<script>
import User from '../components/UserDetails.vue';
import Message from '../components/MessageDetails.vue';

export default {
  data(){
    return{
        users : [{name:"aria"},{name:"ase"}],
        csrf: document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
        message : '',
        file: ''
    }
  },
  computed : {
      Auth() {
          return this.$store.getters.getAuth;
      },
  },
  components: {
      User : User,
      Message : Message,
  },
  methods :{
    submitLogin(){
       let formData = new FormData();
       formData.append('message', this.message);
       formData.append('file', this.file);
       this.$store.dispatch('postMessage', {formData})
    },
    handleFileUpload(){
      this.file = this.$refs.file.files[0];
    }
  },
   created() {
    if (this.$store.getters.getAuth != []){
          this.$store.dispatch('loadAuth');
    }
  }
  }
</script>

<style scoped lang="scss">
    // @import '../../sass/pages/_chat.scss';
</style>
