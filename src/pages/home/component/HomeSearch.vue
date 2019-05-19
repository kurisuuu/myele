<template>
    <div class="home-search-wrap">
        <div class="home-search-box">
            搜商家、商品名称
        </div>
    </div>
</template>
<script>
export default {
    name:"HomeSearch",
}

</script>
<style lang="scss" scoped>
    .home-search-wrap{
        margin-top: -1px;
        padding:rem(10) rem(14);
        background:$bgColor;
        position:sticky;
        z-index: 999;
        top: 0;
        .home-search-box{
            background:#fff;
            height: rem(36);
            line-height: rem(36);
            font-size: rem(16);
            color: #ccc;
            text-align: center;
        }
            
    }
</style>


