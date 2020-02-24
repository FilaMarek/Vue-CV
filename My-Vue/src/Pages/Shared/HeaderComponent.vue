<template>
    <div class="jk-header">
        <img :src="require('../../assets/img/bg_2.jpg')" class="jk-fluid jk-main"/>
        <img :src="require('../../assets/img/gradient.png')" class="jk-fluid jk-gradient"/>
        <div class="jk-hcomp-text">
            <h2>{{img}}</h2>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        img: String
    },
}
</script>

<style lang="scss" scoped>
    @import '../../assets/css/_config.scss';
    .jk-header{
        position: relative;
        height: 85vh;
        display: flex;
        overflow: hidden;
        width: 100%;
        z-index: 0;
        justify-content: center;

        .jk-main{
            position: absolute;
            opacity: 0.75;
            left: 0;
            top: 0;
        }
        .jk-gradient{
            position: absolute;
            bottom: -1px;
            width: 100%;
            height: 35vh;
        }
        .jk-hcomp-text{
            color: $secondary;
            z-index: 4;
            margin-top: 25vh;
            font-weight: 700;
            font-size: 26px;
            text-transform: uppercase;
            position: relative;
        }
    }
</style>