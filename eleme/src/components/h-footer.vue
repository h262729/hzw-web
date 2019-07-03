<template>
    <!-- 底部导航栏 -->
    <div class="footer">
        <ul>
            <li @click="goPage('home')" :class="currentTab == 'home'? 'activated' : ''">
                <svg slot="icon" class="icon" aria-hidden="true">
                    <use xlink:href="#icon-temp-pro-home"></use>
                </svg>
                <span>首页</span>
            </li>
            <li @click="goPage('find')" :class="currentTab == 'find'? 'activated' : ''">
                <svg slot="icon" class="icon" aria-hidden="true">
                    <use xlink:href="#icon-temp-pro-poss-show"></use>
                </svg>
                <span>发现</span>
            </li>
            <li @click="goPage('order')" :class="currentTab == 'order'? 'activated' : ''">
                <svg slot="icon" class="icon" aria-hidden="true">
                    <use xlink:href="#icon-temp-pro-order"></use>
                </svg>
                <span>订单</span>
            </li>
            <li @click="goPage('user')" :class="currentTab == 'user'? 'activated' : ''">
                <svg slot="icon" class="icon" aria-hidden="true">
                    <use xlink:href="#icon-temp-pro-user"></use>
                </svg>
                <span>我的</span>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "h-footer",
        data(){
            return{
                currentTab: this.tab,
            }
        },
        methods: {
          goPage(tab){
              this.$set(this, "currentTab", tab);
              this.$router.push(tab);
          }
        },
        props:{
            tab: {Type:String,default:"home"}
        }
    }
</script>

<style scoped>
    .footer{
        height: 50px;
        width: 100%;
        font-size: 12px;
        color: #8e8e93;
        background: #fff;
        box-shadow: 0 -1px 5px rgba(0,0,0,0.1);
        position: fixed;
        bottom: 0;
        z-index: 50;
        overflow: hidden;
    }
    .footer > ul{
        height: 100%;
        display: flex;
        flex-wrap: nowrap;
    }
    .footer > ul > li{
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .footer > ul > li > svg{
        font-size: 16px;
    }
    .footer > ul > .activated{
        color: #0089dc;
    }
</style>