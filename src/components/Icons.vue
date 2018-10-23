<template>
    <div class=" icons">
   <swiper>
        <swiper-slide v-for="(page,index) of pages" :key="index">
       <div class="icon" v-for="item of page" :key="item.id">
           <div class="icon-img">
           <img class="icon-imgcontent" :src='item.imgUrl'/>
           <p class="incn-desc">{{item.desc}}</p>
           </div>
       </div>
      </swiper-slide>
    </swiper>
    </div>
</template>
<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
    name:"Icons",
    data (){
        return {
            iconsList:[{
                id: '0001',
                imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
                desc:'景点门票'
            },{
                id: '0002',
                imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
                desc:'动物园'
            },{
                id: '0003',
                imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
                desc:'景点门票'
            },{
                id: '0004',
                imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
                desc:'景点门票'
            },{
                id: '0005',
                imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
                desc:'景点门票'
            },{
                id: '0006',
                imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
                desc:'景点门票'
            },{
                id: '0007',
                imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
                desc:'景点门票'
            },{
                id: '0008',
                imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
                desc:'景点门票'
            },{
                id: '0009',
                imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
                desc:'11'
            }]
        }
    },
        components: {
        swiper,
        swiperSlide
    },
    computed:{
        pages(){
            const pages =[];
            this.iconsList.forEach((item,index)=>{
                const page = Math.floor(index/8)
                if(!pages[page]) {
                    pages[page] = [];
                }
                pages[page].push(item);
            })
            return pages
        }
    }

}
</script>
<style lang="stylus" scoped>
    .icons >>> .swiper-container
        overflow: hidden
        height :0
        padding-bottom :50%
    .icons 
        margin-top :0.75rem 
    .icon
        position :relative
        overflow :hidden
        float: left
        width :25%
        height :0
        padding-bottom :25%
        
    .icon-img
        position :absolute
        top:0
        left :0
        right :0
        bottom :0
        bottom :1.1rem
        
        box-sizing:border-box
        padding .1rem

    .icon-imgcontent
        height :100%
        display :block
        margin :0 auto

    .incn-desc 
        position :absolute
        left :0rem
        right :0rem
        bottom :0
        height :1.2rem
        bottom: -2rem; 
        text-align :center
        color :#333
        overflow hidden
        white-space :nowrap
        text-overflow :ellipsis
</style>
