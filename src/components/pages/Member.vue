<template>
    <div>
        <div>
            <van-nav-bar  title="会员中心" />
        </div>
        <div class="top">
           <img src="https://pic.baike.soso.com/ugc/baikepic2/9419/20171107161127-1887001736_jpg_311_406_14332.jpg/0" class="top-img" />
        </div>
        <div class="login">
            <router-link tag="div" to="/register">
                <van-button type="primary">我要注册</van-button>
            </router-link>
            <router-link tag="div" to="/login">
                <van-button type="warning">我要登录</van-button>
            </router-link>
            
        </div>
        <div>
            <van-cell-group>
                <van-cell title="会员卡" is-link />
                <van-cell title="地址管理" is-link  />
                <van-cell title="我的订单" is-link  />
                <van-cell title="会员权益" is-link />
                <van-cell title="联系我们" is-link  />
            </van-cell-group>

        </div>

    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    .top-img{
        width:70px;
        height: 70px;
        
        border-radius: 50%; 
    }
    .top{
        height:5rem;
        text-align: center;
        padding-top:2rem;
        background-color: #EEA2AD;
    }
    .login{
        display: flex;
        flex-direction: row;
        background-color: #fff;
        padding:10px;
    }
    .login div{
        flex:1;
        text-align: center;
    }
</style>