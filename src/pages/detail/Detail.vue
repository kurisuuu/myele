<template>
    <div>
        <detail-header></detail-header>
        <detail-tab></detail-tab>
        <router-view></router-view>
        <detail-footer></detail-footer>
    </div>
</template>
<script>
import DetailHeader from './component/DetailHeader'
import DetailTab from './component/DetailTab'
import DetailFooter from './component/DetailFooter'
export default {
    name:"Detail",
    data(){
        return {
            menuList:[]
        }
    },
    components:{
        DetailHeader,
        // DetailFood,
        DetailFooter,
        DetailTab
    },
    methods:{
        getInfo(){
            this.$axios.get("/api/data.json").then(res=>{
                let menu = res.data.goods;
                
                this.menuList = menu;
            })
        }
    },
    created(){
        // this.getInfo()
    }
}
</script>
<style lang="scss" scoped>

</style>


