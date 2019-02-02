<template >
  <ul class="messages">
    <li :class="classToogle(message.user_id)" v-for="(message, index) in messages">
      <div class="head">
        <!-- <span class="time">10:13 AM, Today</span> -->
        <span class="name">{{message.user}}</span>
      </div>
      <div class="message">{{message.text}}</div>
      <div class="message-files" v-if="message.file_id !== null">
        <a :href="message['file'].file">{{message["file"].title}}</a>
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
  },
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
