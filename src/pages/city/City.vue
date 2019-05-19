<template>
    <div>
        <city-header></city-header>
        <city-search :cities="cities"></city-search>
        <city-list :cities="cities" ref="child"></city-list>
        <city-letter :cities="cities" @getKey="getKey"></city-letter>
    </div>
</template>
<script>
import CityHeader from './component/CityHeader'
import CitySearch from './component/CitySearch'
import CityList from './component/CityList'
import CityLetter from './component/CityLetter'
export default {
    name:"City",
    data(){
        return {
            cities:{}
        }
    },
    components:{
        CityHeader,
        CitySearch,
        CityList,
        CityLetter
    },
    methods:{
        getCityData(){
            this.$axios.get("api/city.json").then(res=>{
                const cities = res.data.data.cities;
                this.cities = cities
            })
        },
        getKey(val){
            this.$refs.child.changeLettter(val); //触发CityList的滚动事件
        }
    },
    created(){
        this.getCityData();
    }
}
</script>

<style lang="scss" scoped>
    
</style>


