<template>
    <!-- 店铺详情 -->
    <div class="store-details">
        <!-- 顶部图片 -->
       <div class="store-header">
           <span @click="goBack">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-temp-pro-arrow-line-xxx"></use>
                </svg>
           </span>
           <div>
               <img src="/images-app/store-info/store-img.webp">
           </div>
       </div>

        <!-- 店铺信息 -->
        <div class="store-main-info">
            <div class="store-main-info-name">
                <h1>炸鸡店(广州店)</h1>
            </div>
            <div class="store-main-info-other">
                <span>评价4.6</span>
                <span>月售999单</span>
                <span>蜂鸟快送约33分钟</span>
            </div>
            <div class="store-main-info-activity">
                <span>满减</span>
                <span>满30减20，满45减30，满72减39，满100减58，满140减67</span>
                <div>
                    <span>3个优惠</span>
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-temp-pro-arrow-xxx"></use>
                    </svg>
                </div>
            </div>
            <div class="store-main-info-notice">
                <span>公告:</span>
                <span>新店开业，小姐姐首次创业经验不足，有任何问题随时骚扰，请勿随意中差评~感谢理解~</span>
            </div>
        </div>

        <!-- 信息选项卡 -->
        <div class="store-tab">
            <ul>
                <li @click="changeTab('menu')">
                    <span :class="currentTab == 'menu'? 'activate' : ''">点餐</span>
                </li>
                <li @click="changeTab('comment')">
                    <span :class="currentTab == 'comment'? 'activate' : ''">评价</span>
                </li>
                <li @click="changeTab('info')">
                    <span :class="currentTab == 'info'? 'activate' : ''">商家</span>
                </li>
            </ul>
        </div>

        <!-- 店铺菜单信息 -->
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "store-details",
        data(){
            return{
                currentTab: "menu",
            }
        },
        mounted(){
            //this.$router.push("/store/menu");
        },
        methods: {
            changeTab(tabName){ // 更新tab页显示
                this.currentTab = tabName;
                if(tabName == "menu"){ // 菜单
                    this.$router.replace("/store/menu");
                }else if(tabName == "comment"){ // 评价
                    this.$router.replace("/store/comment");
                }else if(tabName == "info"){ // 商家信息
                    this.$router.replace("/store/info");
                }
            },
            goBack(){ // 返回
                this.$router.history.go(-1);
            }
        }
    }
</script>

<style scoped>
    @import "../../assets/css/store/store-details.css";
</style>