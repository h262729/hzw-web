<template>
    <div class="store-info">
        <!-- 商家品牌故事 -->
        <div class="store-brand-info">
            <img src="/images-app/store-info/store-info01.webp"/>
            <h3>叫了只炸鸡品牌</h3>
            <p>叫了个炸鸡，专注成为正宗炸鸡口味的炸鸡店，为消费者带来美味的体验，带来健康的美食。叫了个炸鸡拥有自己专有食材供应养殖地和食材制作基地，</p>
            <div>
                <span>查看品牌故事</span>
            </div>
        </div>

        <!-- 配送信息 -->
        <div class="store-delivery">
            <h3>配送信息</h3>
            <p>由蜂鸟快送提供配送，约32分钟送达，距离412m</p>
            <p>配送费￥4</p>
        </div>

        <!-- 商家实景 -->
        <div class="store-img">
            <h3>商家实景</h3>
            <div>
                <a>
                    <img src="/images-app/store-info/store-info02.webp"/>
                    <span>门面（1张）</span>
                </a>
                <a>
                    <img src="/images-app/store-info/store-info03.webp"/>
                    <span>大堂（1张）</span>
                </a>
            </div>
        </div>

        <!-- 商家信息 -->
        <div class="store-info-content">
            <h3>商家信息</h3>
            <ul>
                <li>各位大佬们，有任何问题请随时骚扰哦，店里经常没信号，请联系18718745840</li>
                <li>
                    <span>品类</span>
                    <span>炸鸡炸串, 韩国炸鸡</span>
                </li>
                <li>
                    <span>商家电话</span>
                    <span>
                        <span>13521221241</span>
                        <svg class="icon" aria-hidden="true">
                          <use xlink:href="#icon-temp-pro-arrow-line-xxx"></use>
                        </svg>
                    </span>
                </li>
                <li>
                    <span>地址</span>
                    <span>广东省广州市番禺区市桥街大北路鸿成大街1巷10号、12号银苑大厦2楼316号</span>
                </li>
                <li>
                    <span>营业时间</span>
                    <span>12:00-02:00</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "store-info"
    }
</script>

<style scoped>
    @import "../../assets/css/store/store-info.css";
</style>