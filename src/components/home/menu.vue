<template>
    <div id="nav">
        <div id="logo_title_div">
            <img src="../../assets/img/logo.png" alt="logo" id="logo_img">
        </div>
        <div id="logo_intro">
            <span id="intro_name">Carrot Hu</span>
            <span id="intro_detail">一个萝卜一个坑</span>
        </div>
        <div id="logo_classify">
            <span class="main"><i class="iconfont icon-shouye"></i><router-link to="/home">首页</router-link>    
            </span>
            <span class="main"><i class="iconfont icon-fenlei-unSelect"></i><router-link to="/listall">列表</router-link></span>
            <span class="main"><i class="iconfont icon-guanyu"></i><router-link to="/about">关于</router-link></span>
            <!-- <span id="hebe"><i class="iconfont icon-hua1"></i>田馥甄</span> -->
            <!-- <i class="iconfont icon-icon-up"></i> -->
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
        }
    }
   
}

</script>

<style>

@import "//at.alicdn.com/t/font_912612_hzs4gyxt3br.css";

#nav{
   
    width: 1366px;
    height: 64px;
    background-color: #4caf50;
}

#logo_title_div{
    position: relative;
    width: 50px;
    height: 50px;
    margin-left: 40px; 
    top: 7px;
    background-color: #fff;border-radius: 50%;
}
#logo_img{
    position: absolute;
    width: 50px;
    height: 50px;
    margin: auto;
    left: 0;right: 0;top: 0px;bottom: 0;
}
/* 介绍 */
#logo_intro{
    width: 150px;
    height: 60px;
    /* border:1px solid blue; */
    position: absolute;
    margin:-50px 0 0 97px;text-align: left;
}
#logo_intro span{
    /* border: 1px solid yellow; */
    display: inline-block;
    width: 180px;
    color: #fff;
}
#intro_name{
    font-family: 'consolas';
    font-size: 24px;
    padding-top: 8px;
}
#intro_detail{
    font-size: 14px;
    /* position: absolute; */
}
#logo_classify{
    width: 350px;height: 64px;
    position: relative;top: -50px;right:-500px;z-index: 9999;
    display: inline-block; 
    color: #fff; 
}
.main a{
    color: #fff; 
}
.main a:hover{
    cursor: pointer;
    color: #d2ebd3;
}

#logo_classify span{
    width: 100px;height: 64px;line-height: 64px;
    display: inline-block;
    letter-spacing: 4px;
    font-family: '黑体';
}


   
   
</style>
