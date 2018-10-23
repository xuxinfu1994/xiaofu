<template>
  <div >
    <HomeHeader> </HomeHeader>
    <header-swiper> </header-swiper>
    <HeaderIcons></HeaderIcons>
    <Recommend></Recommend>
    <Weekend></Weekend>
  </div>
</template>

<script>
import Vue from 'vue'
import HomeHeader from './components/Header'
import HeaderSwiper from './components/Swiper'
import HeaderIcons from './components/Icons'
import Recommend from './components/Recommend'
import Weekend from './components/Weekend'
import axios from 'axios'

Object.defineProperty(Vue.prototype, '$axios', {value: axios})

export default {
    name: 'Home',
    components:{
    HomeHeader,
    HeaderSwiper,
    HeaderIcons,
    Recommend,
    Weekend
  },
  methods : {
    getHomeInfo (){
       this.$axios.get('api/index')
       this.$axios.get('api/detail')
    },
    getHomeInfoSucc (res){
        // console.log(res);
    }
  },
  mounted () {
    this.getHomeInfo()
  }
 }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
