<template>
    <div class="not-found">
        <div class="header">
            <a @click="goBack()">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-temp-pro-arrow-line-xxx"></use>
                </svg>
                <span>返回</span>
            </a>
        </div>
        <span>404</span>
    </div>
</template>

<script>
    export default {
        name: "not-found",
        methods:{
            goBack() {
                this.$router.go(-1);
            }
        }
    }
</script>

<style scoped>
    .not-found{
        width: 100%;
        height: 100%;
        font-size: 25px;
        color: #333;
        background: #fff;
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .not-found > .header{
        width: 100%;
        height: 50px;
        color: #fff;
        background: linear-gradient(to right, #0af, #0085ff);
        position: absolute;
        top: 0;
        left: 0;
    }
    .not-found > .header > a{
        height: 100%;
        width: 20%;
        display: flex;
        align-items: center;
    }
    .not-found > .header > a > svg{
        font-size: 14px;
    }
    .not-found > .header > a > span{
        font-size: 16px;
    }
</style>