<template>
  <div id="app-layout">
    <div class="ui">
  <div class="left-menu">
    <form action="#" class="search">
      <input placeholder="search..." type="search" name="" id="">
      <input type="submit" value="">
    </form>
    <User :data="usersOnline"></User>
</div>
<div class="chat">
  <div class="top">
    <div class="avatar">
      <img width="50" height="50" src="http://cs625730.vk.me/v625730358/1126a/qEjM1AnybRA.jpg">
    </div>
    <div class="info">
      <div class="name">{{Auth.name}}</div>
      <div class="count">{{messageLenght}} messages</div>
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

      <label for="file">
          <span style="float: right;position: absolute;right: 130px;color: #222;"><i class="fa fa-file-o"> Upload FIle</i></span>
          <input type="file" id="file" ref="file"  v-on:change="handleFileUpload()"  style="display:none">
      </label>
      <!-- <i class="fa fa-picture-o"></i>
     -->
      <input type="submit" class="myButton" value="send" style="float: right;position: absolute;right: 30px;">
    </form>
  </div>
</div>
</div>
  </div>
</template>

<script>
import User from '../components/UserDetails.vue';
import Message from '../components/MessageDetails.vue';
import Toaster from 'v-toaster'

export default {
    data(){
      return{
          users : [{name:"aria"},{name:"ase"}],
          csrf: document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
          message : '',
          file: '',
          usersOnline :[]
      }
    },
    computed : {
        Auth() {
            return this.$store.getters.getAuth;
        },
        messages() {
            return this.$store.getters.getMessage;
        },
        messageLenght(){
          return this.messages.length
        }
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
      },
      inArray: function(needle, haystack) {
        var length = haystack.length;
        for(var i = 0; i < length; i++) {
            if(haystack[i].id == needle.id) return true;
        }
        return false;
    }
    },
     created() {
      if (this.$store.getters.getAuth != []){
            this.$store.dispatch('loadAuth');
      }

      Echo.join('chatroom')
          .here((users) => {
              this.usersOnline = users;
          })
          .joining((user) => {
            this.$toaster.success(user.name + ' Joining Chatroom', {timeout: 8000})
            if(!this.inArray(user,this.usersOnline)) this.usersOnline.push(user);
          })
          .leaving((user) => {
              this.$toaster.warning(user.name + ' Leaving Chatroom', {timeout: 8000})
              let index = this.usersOnline.indexOf(user);
              this.usersOnline.splice(index, 1);
        })
          .listen('MessagePushed', (e)=>{
            this.$store.commit('updateMessage', e.message);
          });
    }
  }
</script>

<style scoped lang="scss">
    // @import '../../sass/pages/_chat.scss';
</style>
