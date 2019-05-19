<template>
    <div class="recommend">
        <div>
            <span>{{data.data.menuName}}</span>
        </div>
        <div>
            <HomeRecommend v-for="(val,index) in data.childTreeNode" :key="index" :data="val"></HomeRecommend>
        </div>
    </div>
</template>
<script>
export default {
    name:"HomeRecommend",
    props:["data"], 
    data(){
        return {
        }
    }
}
</script>
<style lang="scss" scoped>
    .recommend{
        padding: rem(10) rem(10);
    }
</style>


