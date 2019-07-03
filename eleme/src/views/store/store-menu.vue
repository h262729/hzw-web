<template>
    <!-- 商店菜单列表 -->
    <div class="store-menu-info">
        <!-- 店铺广告位 -->
        <div class="store-advert">
            <a>
                <img src="/images-app/store-info/advert01.webp"/>
            </a>
        </div>

        <!-- 商家推荐 -->
        <div class="store-recommend">
            <p>商家推荐</p>
            <ul>
                <li class="store-recommend-item" v-for="goods in recommendGoods" :key="goods.id">
                    <img v-lazy="goods.imgUrl"/>
                    <div>
                        <p>{{goods.name}}</p>
                        <p>
                            <span>月售{{goods.sale}}</span>
                            <span>好评率{{goods.goodRate}}%</span>
                        </p>
                        <p class="recommend-goods-price">
                            <span><small>￥</small>{{goods.price}}</span>
                            <span>
                                <a v-if="shoppingCart[goods.id] && shoppingCart[goods.id].num > 0" @click="reduceGoods(goods)">
                                    <svg class="icon" aria-hidden="true">
                                        <use xlink:href="#icon-temp-pro-reduce"></use>
                                    </svg>
                                </a>
                                <span v-if="shoppingCart[goods.id] && shoppingCart[goods.id].num > 0">
                                    {{shoppingCart[goods.id] && shoppingCart[goods.id].num || 0}}
                                </span>
                                <a @click="addGoods(goods)">
                                    <svg class="icon" aria-hidden="true">
                                        <use xlink:href="#icon-temp-pro-add"></use>
                                    </svg>
                                </a>
                            </span>
                        </p>
                    </div>
                </li>
            </ul>
        </div>

        <!-- 商品菜单 -->
        <div class="store-menu">
            <!-- 侧边栏分类 -->
            <div class="store-menu-aside">
                <ul>
                    <li :class="activatedType == goodsType.id? 'activate' : ''" v-for="goodsType in goodsTypeList" :key="goodsType.id" @click="scrollForType(goodsType.id)">
                        <span>{{goodsType.name}}</span>
                    </li>
                </ul>
            </div>

            <!-- 菜单列表 -->
            <div class="store-menu-list" @scroll="onScrollForGoodsList($event)">
                <dl v-for="(goodsAndType, index) in goodsAndTypeList" :key="index">
                    <dt v-if="goodsAndType.typeData">
                        <p :id="'type-' + goodsAndType.typeData.id">
                            <strong>{{goodsAndType.typeData.name}}</strong>
                            <span>{{goodsAndType.typeData.desc}}</span>
                        </p>
                    </dt>
                    <dd v-for="goods in goodsAndType.goodsList" :key="goods.id">
                        <div class="goods-img">
                            <img v-lazy="goods.img" />
                        </div>
                        <div class="goods-info">
                            <p class="goods-info-name">{{goods.name}}</p>
                            <p class="goods-info-desc">{{goods.desc}}</p>
                            <p class="goods-info-sales">
                                <span>月售{{goods.sale || 0}}份</span>
                                <span>好评率{{goods.goodRate || 0}}%</span>
                            </p>
                            <p class="goods-info-activity" v-if="goods.activity && goods.activity.discount">
                                <span>{{goods.activity.discount || 0}}折</span>
                                <span>{{goods.activity.desc}}</span>
                            </p>
                            <p class="goods-info-price">
                                <span><small>￥</small>{{goods.price || 0}}</span>
                                <del v-if="goods.delPrice">￥{{goods.delPrice}}</del>

                                <span>
                                    <a v-if="shoppingCart[goods.id] && shoppingCart[goods.id].num > 0" @click="reduceGoods(goods)">
                                        <svg class="icon" aria-hidden="true">
                                            <use xlink:href="#icon-temp-pro-reduce"></use>
                                        </svg>
                                    </a>
                                    <span v-if="shoppingCart[goods.id] && shoppingCart[goods.id].num > 0">
                                        {{shoppingCart[goods.id] && shoppingCart[goods.id].num || 0}}
                                    </span>
                                    <a @click="addGoods(goods)">
                                        <svg class="icon" aria-hidden="true">
                                            <use xlink:href="#icon-temp-pro-add"></use>
                                        </svg>
                                    </a>
                                </span>
                            </p>
                        </div>
                    </dd>
                </dl>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "store-menu",
        data(){
            return{
                recommendGoods: [], // 推荐商品
                shoppingCart: {}, // 购物车
                goodsTypeList: [], // 商品分类
                goodsAndTypeList: [], // 商品列表
                activatedType: 0, // 当前显示分类
            }
        },
        mounted(){
            this.initData();

            // 设置商品列表的宽度
            let menuDoc = document.getElementsByClassName("store-menu")[0];
            let tabDoc = document.getElementsByClassName("store-tab")[0].getElementsByTagName("ul")[0];
            menuDoc.style.height = (window.innerHeight - tabDoc.clientHeight) + "px";
            console.log(window.innerHeight, tabDoc.clientHeight, menuDoc.style.height);
        },
        methods: {
            initData(){ // 模拟数据初始化
                // 推荐商品
                for(let i = 0; i < 6; i++){
                    let tempData = {
                        id: i,
                        imgUrl: "/images-app/store-info/goods01.jpeg",
                        name: "叫了只鸡（送汽水）",
                        sale: 99,
                        goodRate: 100,
                        price: 16.8
                    }
                    this.recommendGoods.push(tempData);
                }

                // 所有商品列表
                for(let i = 0; i < 10; i++){
                    let typeData = {
                        id: i,
                        name: "分类-" + i,
                        desc: "大家喜欢吃，才叫真好吃。",
                    }
                    this.goodsTypeList.push(typeData);

                    let goodsList = [];
                    let radom = Math.ceil(Math.random() * 10);
                    for(let j = 0; j < radom; j++){
                        let goodsData = {
                            id : i * 10 + j,
                            name: "鸡肉卷" + i + "-" + j,
                            desc: "墨西哥鸡肉卷一条，送鸡一只主要原料：鸡肉",
                            img: "/images-app/store-info/goods02.jpeg",
                            sale: 80 + i * j,
                            goodRate: 100,
                            activity: {discount: "0.3折", desc: "每单限1份优惠"},
                            price: 39.8,
                            delPrice: 45.0,
                        }
                        goodsList.push(goodsData);
                    }
                    this.goodsAndTypeList.push({typeData:typeData, goodsList:goodsList});
                }
            },
            addGoods(goods){ // 添加商品
                 let temp = {
                     id: goods.id,
                     name: goods.name,
                     price: goods.price,
                     num: (this.shoppingCart[goods.id] && this.shoppingCart[goods.id].num || 0) + 1
                };
                this.$set(this.shoppingCart, goods.id, temp);
            },
            reduceGoods(goods){ // 减少商品
                this.shoppingCart[goods.id] = {
                    id: goods.id,
                    name: goods.name,
                    num: (this.shoppingCart[goods.id] && this.shoppingCart[goods.id].num || 0) - 1
                };
                if(this.shoppingCart[goods.id].num <= 0){
                    delete this.shoppingCart[goods.id];
                }
            },
            scrollForType(id){ // 锚点定位
                if(id == null) return;
                document.getElementById("type-" + id).scrollIntoView();
            },
            onScrollForGoodsList(event){ // 监听商品列表滚动事件
                //let goodsListElem = document.getElementsByClassName("store-menu-list")[0];
                let goodsListElem = event.target;
                let currentScrollTypeId = this.activatedType;
                for(let item of this.goodsTypeList){
                    let goodsTypeElem = document.getElementById("type-" + item.id);
                    if(goodsTypeElem.offsetTop - goodsListElem.offsetTop <= goodsListElem.scrollTop){
                        currentScrollTypeId = item.id
                    }else{
                        break;
                    }
                }
                this.activatedType = currentScrollTypeId;
            }
        }
    }
</script>

<style scoped>
    @import "../../assets/css/store/store-menu.css";
</style>