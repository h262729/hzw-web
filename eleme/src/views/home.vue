<template>
    <div class="home">
        <!-- 遮罩层 -->
        <div id="mask" v-show="showMask" @click="closeMask"></div>

        <!-- 阻止页面滑动层
        <div id="un-touch-mask" v-show="showMask" @touchmove.prevent></div>
         -->
        <!-- 顶部标题 -->
        <mt-header class="home-header" fixed title="【仿】饿了么"></mt-header>

        <!-- 顶部搜索栏 -->
        <div class="home-header-search">
            <a>
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-pro-search"></use>
                </svg>
                <span>搜索饿了么商家、商品名称</span>
            </a>
        </div>

        <!-- 菜单导航栏 -->
        <mt-swipe class="menu" :auto="0">
            <mt-swipe-item v-for="(menus, index) in menuGroups" :key="index">
                <a v-for="(menu, menuIndex) in menus" :key="menuIndex">
                    <img v-lazy="menu.imgUrl"/>
                    <span>{{menu.name}}</span>
                </a>
            </mt-swipe-item>
        </mt-swipe>

        <!-- 广告栏位 - 轮播图 -->
        <mt-swipe class="advert" :auto="0">
            <mt-swipe-item v-for="(advert, index) in adverts" :key="index">
                <a :href="advert.url" :title="advert.title">
                    <img v-lazy="advert.imgUrl"/>
                </a>
            </mt-swipe-item>
        </mt-swipe>

        <!-- 推荐商家 -->
        <p class="store-list-title">推荐商家</p>

        <!-- 条件搜索 -->
        <div class="filter">
            <div class="filter-header">
                <ul>
                    <li :class="filterClass.selected == 'sort'? 'on-select' : (filterClass.activated == 'sort'? 'activated' : '')"
                        @click="selectFilter('sort')"
                    >
                        <span>综合排序</span>
                        <svg class="icon filter-icon-1" aria-hidden="true">
                            <use xlink:href="#icon-temp-pro-arrow-xxx"></use>
                        </svg>
                    </li>
                    <li :class="filterClass.selected == 'distance'? 'on-select' : (filterClass.activated == 'distance'? 'activated' : '')"
                        @click="selectFilter('distance')"
                    >
                        <span>距离最近</span>
                    </li>
                    <li :class="filterClass.selected == 'quality'? 'on-select' : (filterClass.activated == 'quality'? 'activated' : '')"
                        @click="selectFilter('quality')"
                    >
                        <span>品质联盟</span>
                    </li>
                    <li :class="filterClass.selected == 'screen'? 'on-select' : (filterClass.activated == 'screen'? 'activated' : '')"
                        @click="selectFilter('screen')"
                    >
                        <span>筛选</span>
                        <svg class="icon filter-icon-2" aria-hidden="true">
                            <use xlink:href="#icon-pro-catalog"></use>
                        </svg>
                    </li>
                </ul>
            </div>

            <!-- 排序 -->
            <div class="filter-sort" v-show="filterClass.selected == 'sort'">
                <ul>
                    <li>
                        <span>综合排序</span>
                    </li>
                    <li>
                        <span>综合排序2</span>
                    </li>
                    <li>
                        <span>综合排序3</span>
                    </li>
                    <li>
                        <span>综合排序4</span>
                    </li>
                </ul>
            </div>

            <!-- 筛选 -->
            <div class="filter-screen" v-show="filterClass.selected == 'screen'">
                <dl>
                    <dt>商家服务</dt>
                    <dd>
                        <div>
                            <span>蜂鸟专送</span>
                        </div>
                        <div>
                            <span>品牌商家</span>
                        </div>
                        <div>
                            <span>新店</span>
                        </div>
                        <div>
                            <span>开发票</span>
                        </div>
                        <div>
                            <span>开发票</span>
                        </div>
                        <div>
                            <span>开发票</span>
                        </div>
                    </dd>
                </dl>

                <dl>
                    <dt>商家服务</dt>
                    <dd>
                        <div>
                            <span>蜂鸟专送</span>
                        </div>
                        <div>
                            <span>品牌商家</span>
                        </div>
                        <div>
                            <span>新店</span>
                        </div>
                        <div>
                            <span>开发票</span>
                        </div>
                        <div>
                            <span>开发票</span>
                        </div>
                        <div>
                            <span>开发票</span>
                        </div>
                    </dd>
                </dl>

                <div class="filter-screen-btn">
                    <span>清空</span>
                    <span>确定</span>
                </div>
            </div>
        </div>

        <div class="store-list">
            <ul>
                <li class="store" v-for="(store) in storeList"
                    :key="store.id"
                    @click="toStorePage(store)"
                >
                    <div>
                        <img v-lazy="store.img"/>
                    </div>
                    <div class="store-content">
                        <div class="store-title">
                            <span>{{store.name}}</span>
                        </div>
                        <div class="store-info-1">
                            <div>
                                <span>月售{{store.sale || 0}}单</span>
                            </div>
                        </div>
                        <div class="store-info-2">
                            <div>
                                <span>￥{{store.minGivePrice || 0}}起送</span>
                            </div>
                        </div>
                        <div class="store-info-3">
                            <div v-for="(label, labelIndex) in store.labels" :key="labelIndex">
                                <span>{{label}}</span>
                            </div>
                        </div>
                        <div class="store-info-4">
                            <div>
                                <div class="store-info-activity"
                                     v-for="(activity, actIndex) in store.activities"
                                     :key="actIndex"
                                     v-show="store.showActivity || actIndex <= 1">
                                    <span v-if="activity.keyword">{{activity.keyword}}</span>
                                    <span>{{activity.content}}</span>
                                </div>
                            </div>
                            <div @click.stop="showActivity(store)">
                                <span>{{store.activities && store.activities.length || 0}}个活动</span>
                                <svg :class="store.showActivity? 'icon icon-up' : 'icon icon-down'" aria-hidden="true">
                                    <use xlink:href="#icon-temp-pro-arrow-xxx"></use>
                                </svg>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>

        <h-footer tab="home"/>
    </div>
</template>

<script>
    import { Header,Swipe,SwipeItem} from 'mint-ui';
    import hFooter from "../components/h-footer";

    export default {
        name: "home",
        data(){
          return {
              menuGroups: [
                  [
                      {imgUrl: "/images-app/menu-type/meishi.jpeg", name: "美食"},
                      {imgUrl: "/images-app/menu-type/zaocan.png", name: "早餐"},
                      {imgUrl: "/images-app/menu-type/bianli.jpeg", name: "商超便利"},
                      {imgUrl: "/images-app/menu-type/shuiguo.jpeg", name: "水果"},
                      {imgUrl: "/images-app/menu-type/yiyao.jpeg", name: "医药健康"},
                      {imgUrl: "/images-app/menu-type/xianhua.jpeg", name: "浪漫鲜花"},
                      {imgUrl: "/images-app/menu-type/hanbao.jpeg", name: "汉堡披萨"},
                      {imgUrl: "/images-app/menu-type/shengxian.jpeg", name: "厨房生鲜"},
                      {imgUrl: "/images-app/menu-type/zhaji.jpeg", name: "炸鸡炸串"},
                      {imgUrl: "/images-app/menu-type/caixi.jpeg", name: "地方菜系"},
                  ],
                  [
                      {imgUrl: "/images-app/menu-type/malatang.jpeg", name: "麻辣烫"},
                      {imgUrl: "/images-app/menu-type/sushi.jpeg", name: "速食简餐"},
                      {imgUrl: "/images-app/menu-type/xiaochi.jpeg", name: "地方小吃"},
                      {imgUrl: "/images-app/menu-type/huichi.jpeg", name: "大牌惠吃"},
                      {imgUrl: "/images-app/menu-type/mianguan.jpeg", name: "米粉面馆"},
                      {imgUrl: "/images-app/menu-type/baozi.jpeg", name: "包子粥店"},
                  ]
              ],

              adverts: [
                  {imgUrl: "/images-app/adverts/advert01.jpeg", title: "1号推广广告", url: "#"},
                  {imgUrl: "/images-app/adverts/advert02.jpeg", title: "2号推广广告", url: "#"},
                  {imgUrl: "/images-app/adverts/advert03.jpeg", title: "3号推广广告", url: "#"},
              ],

              storeList: [],

              filterClass: {}, // 控制筛选条件样式
              showMask: false, // 是否显示遮罩层
          }
        },
        mounted(){
            this.initData();
        },
        methods: {
            initData(){ // 数据初始化
                // 商家数据初始化
                for(let i = 0; i < 6; i++){
                    let tempData = {
                        id: i,
                        name: "华莱士炸鸡汉堡",
                        img: "/images-app/store-info/goods03.jpeg",
                        sale: 9909,
                        labels: ["汉堡"],
                        minGivePrice: 22,
                        activities: [
                            {keyword:"减", content:"满30减20，满45减30，满72减39，满100减58，满140减67"},
                            {keyword:"减", content:"满30减20，满45减30，满72减39，满100减58，满140减67"},
                            {keyword:"减", content:"满30减20，满45减30，满72减39，满100减58，满140减67"}
                            ]
                    }
                    this.storeList.push(tempData);
                }
            },

            showActivity(store){ // 显示或隐藏商家的活动信息
                this.$set(store, "showActivity", !store.showActivity);
            },

            toStorePage(store){ // 前往商店详情页
                this.$router.push({path:"/store", query:{ id : store.id}});
            },

            selectFilter(tabName){ // 选中筛选
                if(this.showMask && this.filterClass.selected === tabName) {
                    this.closeMask();
                    return;
                }
                if(tabName === "distance" || tabName === "quality"){
                    this.$set(this.filterClass, "activated", tabName);
                    this.closeMask();
                    return;
                }
                // 筛选栏置顶
                let doc = document.getElementsByClassName("filter-header")[0];
                doc.scrollIntoView();
                // 显示遮罩层
                this.showMask = true;
                // 根据tabName显示筛选区内容
                this.$set(this.filterClass, "selected", tabName);

               // this.afterOpenDialog();
            },
            closeMask(){ // 关闭遮罩层
                //this.beforeCloseDialog();
                this.showMask = false;
                // 关闭筛选栏内容显示区
                this.$set(this.filterClass, "selected", "");
            },
            afterOpenDialog(){ // 给body添加相关样式，禁止滚动
                document.body.classList.add("dialog-open");
            },
            beforeCloseDialog(){ // 恢复滚动行为
                document.body.classList.remove("dialog-open");
            }
        },
        components: {
            mtHeader: Header,
            mtSwipe: Swipe,
            mtSwipeItem: SwipeItem,
            hFooter: hFooter,
        }
    }
</script>

<style scoped>
    @import "../assets/css/home.css";
</style>
<style>
    /* 改写mint-ui样式 */
    .mint-swipe-indicator{
        width: 10px;
        height: 2px;
        background: #000;
        border-radius: 0;
    }
    .mint-swipe-indicator.is-active{
        background: #fe7100;
    }
</style>