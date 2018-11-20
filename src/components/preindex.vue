<template>

    <div id="preindex" v-if="show" key="pre">
      <div id="div_logo">
        <img id="img_logo" src="../assets/img/logo.png" />
      </div>
      <div id="introduce">Welcome To Carrot's Blog</div>
      <button class="clickIt" @click="clickIt">点击进入</button>
    </div>
 
</template>

<script>
export default {
  name: 'preindex',
  data () {
    return {
      show:true
    }
  },
  methods:{
    clickIt(){
      this.show = !this.show;
      this.$router.push("/home");  
    }
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
/* logo */
#div_logo {
  width:200px;
  height:200px;
  position:relative;
  margin:130px auto 10px;

}
#img_logo{
  position:absolute;
  width:180px;
  height:180px;
  left:0;right:0; 
  margin:auto;    
  /* border:1px solid #000; */
  animation:slide 1.3s ;

}
@keyframes slide{
		0%{
		 transform:translateY(-15px) rotate(-180deg);
		}
	}

/* introduce */
#introduce{
background-color: #000;
  width: 550px;
  height: 55px;
  line-height: 55px;
  margin: auto;
  font-family: 'consolas';
  font-size: 38px;
  color:#fff;
}
/* 点击进入 */
button{
  outline: none;
  cursor: pointer;
  background-color: #ff9c00;
  font-family: "汉仪雅酷黑";
  font-size: 18px;
  display: inline-block;
  width: 120px;
  height: 40px;
  border: 1px solid #363636;
  position: absolute;
  left:0;right:0; top: 440px;
  margin:auto;   
}

</style>
