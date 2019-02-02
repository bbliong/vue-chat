<template >
  <ul class="messages" v-chat-scroll>
    <li :class="classToogle(message.user_id)" v-for="(message, index) in messages" id="">
      <div class="head">
        <!-- <span class="time">10:13 AM, Today</span> -->
        <span class="name">{{(message.user['id'] !== Auth.id)?message.user['name']:'Me'}}</span>
      </div>
      <div class="message">{{message.text}}</div>
      <div class="message-files" v-if="message.file_id !== null">
        <section v-if="message['file'].file.substring(message['file'].file.length - 3, message['file'].file.length) == 'jpg' || message['file'].file.substring(message['file'].file.length - 3, message['file'].file.length) === 'png'">

            <img :src='message["file"].file' :alt='message["file"].title' class="img-chat">
        </section>
        <section v-else>
              <a :href='message["file"].file'>{{message["file"].title}}</a>
        </section>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  data(){
    return{
        users : [{name:"aria"},{name:"ase"}]
    }
  },
  computed :{
    messages() {
        return this.$store.getters.getMessage;
    },
    Auth() {
        return this.$store.getters.getAuth;
    },
    messageStatus(){
      return this.$store.getters.getMessageStatus;
    }
  },
  // watch : {
  //   messageStatus(val){
  //     if(val == 1) {
  //
  //     }
  //   }
  // },
  methods :{
    classToogle : function(id){
        var kelas
        if (id == this.Auth['id'] )
          kelas = "i"
        else
          kelas = "friend-with-a-SVAGina"

          return kelas
      },

  },
  created() {
    if (this.$store.getters.getMessage != []){
          this.$store.dispatch('loadMessage');
    }
  }
}
</script>

<style lang="css">
</style>
