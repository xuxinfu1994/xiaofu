<template>
<div>
   <div class="recommend-title">周末去哪</div>
       <ul>
           <li class="item border-bottom" v-for="item of recommenfList" :key="item.id">
              <div class="item-title-img">
                <img :src="item.imgurl" class="item-img"/>
              </div>
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                </div>
           </li>
       </ul>
  </div> 
</template>
<script>
export default {
    name:"Weekend",
    data (){
        return{
        recommenfList :[{
            id:'0001',
            imgurl:'http://img1.qunarzz.com/sight/source/1505/7d/df6ff468331c43.jpg_r_640x214_1f3783d0.jpg',
            title:'大连深林动物园',
            desc:'与动物嬉戏，共享和谐人生'
            },{
            id:'0002',
            imgurl:'http://img1.qunarzz.com/sight/source/1505/7d/df6ff468331c43.jpg_r_640x214_1f3783d0.jpg',
            title:'大连深林动物园',
            desc:'与动物嬉戏，共享和谐人生'
            },{
            id:'0003',
            imgurl:'http://img1.qunarzz.com/sight/source/1505/7d/df6ff468331c43.jpg_r_640x214_1f3783d0.jpg',
            title:'大连深林动物园',
            desc:'与动物嬉戏，共享和谐人生'
            }]
    }
    }
}
</script>
<style lang="stylus" scoped>
     li
        list-style:none
    .recommend-title
       margin-top :1.5rem
       line-height: 2rem
       background :#eee
       text-indent:.2rem
    .item
        overflow: hidden;
        height: 14.9rem;
        margin-left: -2rem; 
    .item-img
        width  :100%
        height: 9.9rem;
        margin-left: -.5rem;
    .item-title
        line-height .54rem
        font-size 1.32rem  
        

     .item-desc
        line-height .4rem
        color :#ccc  
     
     .item-buttom
        margin-top:.1rem
        background:#ff9300
        padding: 0.1rem
        border-radius:0.3rem 
        color #fff
</style>
