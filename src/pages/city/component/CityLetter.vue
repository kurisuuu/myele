<template>
    <div class="letter-wrapper">
        <div v-for="(item,key,index) of cities" :key="index" class="letter" @click="changeLettter(key)">{{key}}</div>
    </div>
</template>
<script>
export default {
    name:"CityLetter",
    props:["cities"],
    methods:{
        changeLettter(key){
            this.$emit("getKey",key)
        }
    }
}
</script>
<style lang="scss" scoped>
    .letter-wrapper{
        position: absolute;
        display: flex;
        right: rem(10);
        // right: 0;
        top: rem(100);
        bottom: 0;
        flex-direction: column;
        justify-content: center;
        font-size: rem(12);
        color: #999;
        // z-index: 20;
        .letter{
            padding: rem(4);
        }
    }
</style>


