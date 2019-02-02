<template >
  <menu class="list-friends">
    <li v-for="(user, index) in users" :key="index">
      <img width="50" height="50" src="http://cs625730.vk.me/v625730358/1126a/qEjM1AnybRA.jpg">
      <div class="info">
        <div class="user">{{user.name}}</div>
        <div class="status on"> online</div>
      </div>
    </li>
  </menu>
</template>

<script>
export default {
  data(){
    return{
        users : [{name:"aria"},{name:"ase"}]
    }
  },
}
</script>

<style lang="css">
</style>
