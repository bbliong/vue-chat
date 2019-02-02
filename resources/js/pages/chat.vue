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
      <div class="name">Юния Гапонович</div>
      <div class="count">already 1 902 messages</div>
    </div>
    <i class="fa fa-star"></i>
  </div>
  <div class="wrap-message">
      <Message></Message>
  </div>
  <div class="write-form">
    <textarea placeholder="Type your message" name="e" id="texxt"  rows="2"></textarea>
    <i class="fa fa-picture-o"></i>
    <i class="fa fa-file-o"></i>
    <span class="send">Send</span>
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
        users : [{name:"aria"},{name:"ase"}]
    }
  },
  components: {
        User : User,
        Message : Message,
    },
  }
</script>

<style scoped lang="scss">
    // @import '../../sass/pages/_chat.scss';
</style>
