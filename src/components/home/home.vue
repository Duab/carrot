<template>
  <div id="home">
      <v-menu></v-menu>
      <v-play></v-play>
      <v-displaychoose></v-displaychoose>
      <v-foot></v-foot>
  </div>
   
</template>

<script>
import menu from './menu.vue';
import play from './play.vue';
import displaychoose from './displaychoose.vue';
import foot from './foot.vue';

export default {
  name: 'home',
  data () {
    return {
      
    }
  },
  methods:{
     
    
  },
  components:{
    'v-menu':menu,
    'v-play':play,
    'v-displaychoose':displaychoose,
    'v-foot':foot
  }
}
</script> 

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

*{
  padding:0;margin:0;
}
ul,li,a{
  text-decoration:none;
}




</style>
