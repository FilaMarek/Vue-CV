<template>
    <div class="jk-header">
        <img :src="require('../../assets/img/bg_2.jpg')" class="jk-fluid jk-main"/>
        <img :src="require('../../assets/img/gradient.png')" class="jk-fluid jk-gradient"/>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
    .jk-header{
        position: relative;
        height: 85vh;
        overflow: hidden;
        width: 100%;
        z-index: 0;
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
    }
</style>