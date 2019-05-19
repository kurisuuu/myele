<template>
    <div class="shop-filter">
        <div class="filter">
            <div class="filter-header">
                <a href="javascript:void(0);">综合排序</a>
                <a href="javascript:void(0);">距离最近</a>
                <a href="javascript:void(0);">优质联盟</a>
                <a href="javascript:void(0);">筛选</a>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:"HomeRecommend.vue"
}
</script>
<style lang="scss" scoped>
        .shop-filter{
            background: #fff;
            position: sticky;
            top: rem(56);
            .filter{
                height: rem(38);
                line-height: rem(38);
                .filter-header{
                    display: flex;
                    a{
                        flex: 1;
                        text-align: center;
                        font-size: rem(14);
                        color: #333;
                    }
                }
            }
        }
        
</style>

