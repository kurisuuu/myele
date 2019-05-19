<template>
    <div class="tab-wrap">
        <ul class="tab">
            <li class="tab-item">点餐</li>
            <li class="tab-item">评价</li>
            <li class="tab-item">商家</li>
        </ul>
    </div>
</template>
<script>
export default {
    name:"DetailTab"
}
</script>
<style lang="scss" scoped>
    .tab-wrap{
        .tab{
            display: flex;
            .tab-item{
                flex: 1;
                text-align: center;
                font-size: rem(14);
                line-height: rem(40);
            }
        }
    }
</style>


