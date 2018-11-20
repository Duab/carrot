

<template>
  <div class="slide">
      <!-- 配置slider组件 -->
    <slider ref="slider" :options= "options">
          <slideritem class="slideul" v-for= "(item,index) in someList" :key= "index" :style= "item.style"> 
           {{item.img}}
          </slideritem>
      </slider> 
     <div slot="loading">loading...</div>
 </div>
</template>



 <script>
import {slider,slideritem} from 'vue-concise-slider'
    export default {
      data () {
      return {
        someList:[],
        options: {
         currentPage: 0,
          thresholdDistance:800,
          thresholdTime:800,
          autoplay:4000,
          loop:true,
          loopedSlides:1,
          slidesToScroll:1,
          timingFunction: 'ease',
          speed: 2000
        }
  
      }
    },
    components:{
      slider,
      slideritem
    },
     mounted () {
      let that = this;
      setTimeout(function () {
        that.someList = [
          {
            img: '',
            style: {
              background:'url(./static/images/playa.jpg)'
      
            }
          },
          {
            img: '',
            style: {
               background:'url(./static/images/playb.jpg)'
            }
          },
          {
            img: '',
            style: {
               background:'url(./static/images/playc.jpg)'
            }
          },
         {
            img: '',
            style: {
               background:'url(./static/images/playd.jpg)'
            }
          }
        ]
      },0)
    }
}

 </script>


<style>
.slide {
    width: 1366px;
    height: 561px;
    margin: 0 auto;
    overflow: hidden;
    position: relative;
  }
  
</style> 
