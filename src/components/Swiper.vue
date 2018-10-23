<template>
<div class="weapper">
   <swiper :options="swiperOption" >
    <!-- slides -->
    <swiper-slide v-for="item of swiperList" :key="item.id">
        <img :src="item.imgurl" class="swiper-img">
        </swiper-slide>
   <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
    </swiper> 
    </div>
</template>
<script>

import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
    name:"Swiper",
    data (){
        return {
            swiperOption: {
                pagination: '.swiper-pagination'
            },
            swiperList: [{
                id:"0001",
                imgurl:'http://img1.qunarzz.com/piao/fusion/1809/86/deb33800de224c02.jpg_750x200_74fb795e.jpg'
            },{
               id:"0002",
                imgurl:'http://img1.qunarzz.com/piao/fusion/1810/7d/f709657f0d63a602.jpg_750x200_6a7f8635.jpg'  
            }]
        }
    },
    components: {
        swiper,
        swiperSlide
    }
}
</script>
<style lang="stylus" scoped>
    .swiper-img
        width :100%;
    .weapper
        overflow: hidden
        width 100%;
        padding-bottom 31.25%vm 
        background:#eee
    
</style>
