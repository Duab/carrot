<template>
    <div id="displaychoose">
        <ul id="details">
            <li id="details_top">
                <span id="left" class="leftspan"></span>
                <span id="right" class="leftspan"></span>
                <span id="choose">/ 每 周 精 选 /</span>
                <p id="chooseimg">
                    <img src="../../../static/images/doge.png" />
                </p>
            </li>
           <li class="list">
               <ul class="listcontent">
                   <li class="listli" id="listlia">
                       <h2>我是标题我是标题我是标题我是标题我是标题</h2>
                       <span class="listclassify">我是标签</span>
                       <h5>2018年11月20日</h5>
                   </li>
                  <li class="listli">
                       <h2>我是标题我是标题我是标题我是标题我是标题</h2>
                       <span class="listclassify">我是标签</span>
                       <h5>2018年11月20日</h5>
                   </li>
                   <li class="listli">
                       <h2>我是标题我是标题我是标题我是标题我是标题</h2>
                       <span class="listclassify">我是标签</span>
                       <h5>2018年11月20日</h5>
                   </li>
                   <router-link to="/listall" class="more">查看更多</router-link>
               </ul>
           </li>
       
        </ul>
    </div>
</template>

<script>

export default {

}

</script>

<style>
ul,li{
    list-style: none;
}
#displaychoose{
    width: 1366px;height:1200px;
    margin: 0 auto;  
    overflow-x: hidden;
    position: relative;
}

 #details{
    width: 100%; height: 1000px;
    display: block;
    position: relative;
    left: 0;right: 0;
    margin-top: -440px;
} 
#details_top{
    width: 600px;
    height: 60px;
    line-height: 60px;
    display: block;
    position: absolute;
    font-family: '汉仪雅酷黑';
    color: #0b87fa;
    font-size: 32px;
    letter-spacing: 5px;
    margin-top: 550px;
    margin-left: 375px;
}
/* 黄色框 */
.leftspan{
    width: 60px;
    height: 12px;
    display: inline-block;
    background-color: yellow;
    position: absolute;
    margin-top: 23px;
}
#left{
    margin-left: -115px;
}
#right{
    margin-left: 305px;
}
#chooseimg img{
    width: 90px;
    height: 90px;
}
/* 列表 */
/* 列表大框 */
.list{
    width: 100%;
    height: 800px;
    display: inline-block;
    position: relative;
    bottom: -720px;
}


.listcontent{
    display: block;
    width: 100%;
    height: 800px;
    position: relative;
}
.listli{
   /*   border: 1px solid #000; #0b87fa */
    width: 70%;
    height: 230px;
    margin-left: 200px;
    margin-top: 50px;
    background-image: url('../../../static/images/listbga.jpg');
    background-size: cover;
    position: relative;
    border-radius:10px;
     transition:linear .2s;
}
.listli:hover{
    cursor: pointer;
    transform: scale(1.07);
}
.listcontent>:first-child{
    margin-top: 10px;
}
h2,h5{
    color: #fff;
    width: 100%;
    height: 20%;
    margin: auto;
    left: 0;right: 0;top: 0;bottom:0;
    position: absolute;
    letter-spacing: 2px;
}
h5{
    margin-top: 138px;
    font-family: '微软雅黑';
    font-style: normal;
}
.listclassify{
    display: block;
    color: #fff; 
    border: 1px solid #fff;
    position: absolute;
    left: 0;right: 0;
    margin-top: 20px;
    margin-left: 20px;
    /* background-color: rgb(221, 214, 214); */
    width: 120px;
    height: 30px;
    line-height: 30px;
    font-size: 15px;
    letter-spacing: 3px;
    font-family: '汉仪雅酷黑';
      transition:linear .2s;
}
.listclassify:hover{
    color: #000; 
    background-color: rgb(221, 214, 214);
    cursor: pointer;
    opacity: .9;
    
}

/* 查看更多 */
.more{
    display: block;
    width: 110px;
    height: 35px;
    line-height: 35px;
    position: absolute;
    left: 0;right: 0;top: 0;bottom:0;
    margin: 840px auto 0;
    color: #fff;
    background: #000;/*#0b87fa*/
    font-family: '黑体';  
    /* transition:linear .3s; */
    letter-spacing: 2px;
}
.more:hover{
     cursor: pointer;
     opacity: .7;
}



</style>


