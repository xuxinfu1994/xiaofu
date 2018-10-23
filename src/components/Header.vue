<template>
    <div class="header" >
      <div class="header-left">
          <span class="iconfont back-icon">&#xe624;</span>
      </div>
      <div class="header-input">
          <span class="iconfont">&#xe632;</span>
          输入城市/景点/游玩主题</div>
      <div class="header-right">城市<span class="iconfont arrow-icon">&#xe64a;</span></div>
    </div>
</template>
<script>

export default {
    name:"Header"
}
</script>

<style lang="stylus" scoped>
    .header
        display :flex
        color :#fff
        background :#00bcd4
        line-height: 2.86rem+0.24rem
    .header-left
        width: 1.6rem
        height: .64rem
        float :left

    .header-input
      flex :1  
      line-height :2.3rem
      margin: 0.35rem;
      background:#ffffff
      color :#ccc
      border-radius: .25rem

    .header-right
        width: 5.24rem;
        float:right
        text-align :center

    .header-left-img
        position: relative
        right: -0.2rem
        height: 1.4rem
        margin-top: 0.9rem
    
    .header-right-img
        
        height: 1.5rem;
        margin-top: 0.1rem;
        position: relative;
        top: .5rem;

    .header-input-img 
        height: 1.5rem;
        margin-top: 0.1rem;
        position: relative;
        top: .4rem; 
        margin-right :.3rem 
    </style>
