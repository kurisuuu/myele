if(window.localStorage){
    var city = localStorage.getItem("city") || "广州"
}
export default{
    city:city
}