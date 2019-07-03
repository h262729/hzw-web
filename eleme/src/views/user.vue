<template>
    <div class="user">
        <div class="user-header">
            <div>
                <img src="/images-app/user/user01.webp" />
            </div>
            <div>
                <p>
                    <span>用户123</span>
                </p>
                <p>
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-temp-pro-tel"></use>
                    </svg>
                    <span>13532112124</span>
                </p>
            </div>
            <div>
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-temp-pro-arrow-line-xxx"></use>
                </svg>
            </div>
        </div>

        <!-- 用户信息 -->
        <div class="user-info">
            <a class="user-info-item-1">
                <p>
                    <span><strong>0</strong>个</span>
                </p>
                <p>红包</p>
            </a>
            <a class="user-info-item-2">
                <p>
                    <span><strong>0</strong>个</span>
                </p>
                <p>金币</p>
            </a>
        </div>

        <!-- 其余信息杂项 -->
        <div class="other-info">
            <a class="other-info-item">
                <p>
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-temp-pro-location"></use>
                    </svg>
                    <span>我的地址</span>
                </p>
                <p>
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-temp-pro-arrow-line-xxx"></use>
                    </svg>
                </p>
            </a>
        </div>

        <!-- 底部导航栏 -->
        <h-footer tab="user"></h-footer>
    </div>
</template>

<script>
    import hFooter from "../components/h-footer";

    export default {
        name: "user.vue",
        components: {
            hFooter: hFooter,
        }
    }
</script>

<style scoped>
    @import "../assets/css/user.css";
</style>