<template>
  <div >
    <Header> </Header>
    <header-swiper> </header-swiper>
    <HeaderIcons></HeaderIcons>
    <Recommend></Recommend>
    <Weekend></Weekend>
  </div>
</template>

<script>
import Header from './components/Header'
import HeaderSwiper from './components/Swiper'
import HeaderIcons from './components/Icons'
import Recommend from './components/Recommend'
import Weekend from './components/Weekend'

export default {
  name: 'Home',
  components:{
    Header,
    HeaderSwiper,
    HeaderIcons,
    Recommend,
    Weekend
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
