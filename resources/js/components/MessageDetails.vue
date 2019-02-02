<template >
  <ul class="messages">
    <li class="i">
      <div class="head">
        <span class="time">10:13 AM, Today</span>
        <span class="name">Буль</span>
      </div>
      <div class="message">Привет!</div>
    </li>
    <li class="i">
      <div class="head">
        <span class="time">10:13 AM, Today</span>
        <span class="name">Буль</span>
      </div>
      <div class="message">)</div>
    </li>
    <li class="i">
      <div class="head">
        <span class="time">10:14 AM, Today</span>
        <span class="name">Буль</span>
      </div>
      <div class="message">М не счастья..</div>
    </li>
    <li class="friend-with-a-SVAGina">
      <div class="head">
        <span class="name">Юния</span>
        <span class="time">10:15 AM, Today</span>
      </div>
      <div class="message">чего тебе?</div>
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
}
</script>

<style lang="css">
</style>
