<template>
<div>
   <div class="recommend-title">热销推荐</div>
       <ul>
           <li class="item border-bottom" v-for="item of recommenfList" :key="item.id">
              <img :src="item.imgurl" class="item-img"/>
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                    <button class="item-buttom">查看详情</button>
               </div>
           </li>
       </ul>
  </div> 
</template>
<script>

export default {
    name:"Recommend",
    data (){
        return{
        recommenfList :[{
            id:'0001',
            imgurl:'http://img1.qunarzz.com/sight/p0/1603/17/170481fb9caf500790.water.jpg_150x150_1b331280.jpg',
            title:'大连深林动物园',
            desc:'与动物嬉戏，共享和谐人生'
            },{
            id:'0002',
            imgurl:'http://img1.qunarzz.com/sight/p0/1603/17/170481fb9caf500790.water.jpg_150x150_1b331280.jpg',
            title:'大连深林动物园',
            desc:'与动物嬉戏，共享和谐人生'
            },{
            id:'0003',
            imgurl:'http://img1.qunarzz.com/sight/p0/1603/17/170481fb9caf500790.water.jpg_150x150_1b331280.jpg',
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
        overflow: hidden   
        
        display :flex
        height :7.9rem
        margin-left :-2rem
    .item-img
        width  :5.9rem
        height 5.9rem
        padding :0.4rem
    .item-info
        flex:1 
        padding :0.1rem
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

