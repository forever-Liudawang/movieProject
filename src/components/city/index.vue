<template>
<Loading v-if="loadingIsShow"></Loading>
<div class="wrap" v-else>
    <div class="cityBody">
        <div class="hotCityWrap">
            <div class="hotCityBar">热门城市</div>
            <ul class="hotCityList">
                <li v-for="(it,index) in hotCityList" :key="index" @touchstart="changeCity(it.nm)">{{it.nm}}</li>
                
            </ul>
        </div>
       <div class="cityWrap">
            <div class="categoryCity" v-for="(city,index) in cityList" :key="index">
                <div class="categoryFir" :id="Object.keys(city)[0]">{{Object.keys(city)[0]}}</div>
                <ul class="categoryCityList">
                    <li v-for="(item,index) in Object.values(city)[0]" :key="index" @touchstart="changeCity(item)">{{item}}</li>
                </ul>
            </div>  
            
       </div>
    </div>
    <div class="firWordNav">
            <ul>
                <a :href="'#'+i" v-for="(i,index) in cityNav" :key="index">{{i}}</a>
                
            </ul>
    </div>
</div>
</template>

<script>
export default {
    data(){
        return {
            hotCityList:[],
            cityList:[],
            cityNav:[],
            loadingIsShow:true,
        }
    },
    mounted(){
        let hotCity=window.localStorage.getItem('hotCity');
        let cityList=window.localStorage.getItem('cityList');
        let cityNav=window.localStorage.getItem('cityNav');
        if(hotCity&&cityList&&cityNav){
            this.hotCityList=JSON.parse(hotCity)
            this.cityList=JSON.parse(cityList)
            this.cityNav=JSON.parse(cityNav)
        }else{
            this.axios.get('/api/cityList').then((res)=>{
            let data=res.data.data.cities
            let resObj=this.analy(data);
            let resArr=[];
            
            let navCity=Object.keys(resObj).sort(function(a,b){return a.charCodeAt(0)-b.charCodeAt(0)})
            this.cityNav=navCity
            window.localStorage.setItem('cityNav',JSON.stringify(navCity))
            for(let i in resObj){
                let newObj={};
                newObj[i]=resObj[i]
                resArr.push(newObj)
            }
            let sortArr=resArr.sort(
                function(a,b){
                    return Object.keys(a)[0].charCodeAt(0)-Object.keys(b)[0].charCodeAt(0)
                }
            )
            this.cityList=sortArr
            window.localStorage.setItem('cityList',JSON.stringify(sortArr))
            this.loadingIsShow=false
        })
        }
        
    },
    methods:{
       analy(data){
           let obj={};
           let hotArr=[];
           for(let i=0;i<data.length;i++){
               if(data[i].isHot===1){
                   hotArr.push(data[i])
               }
               if(obj[this.firLetter(data[i])]){
                   obj[this.firLetter(data[i])].push(data[i].nm)
               }else{
                   obj[this.firLetter(data[i])]=[];
                   obj[this.firLetter(data[i])][0]=data[i].nm
               }
           }
            this.hotCityList=hotArr;
            window.localStorage.setItem('hotCityList',JSON.stringify(hotArr))
            return obj
       },
       firLetter(word){
           if(word.py){
               return word.py.substring(0,1).toUpperCase();
           }
       },
       changeCity(nm){
           console.log(nm)
           let cityId=Math.ceil(Math.random()*20)
           window.localStorage.setItem('nowCity',nm)    //记录上次保存的城市
           window.localStorage.setItem('cityId',cityId)
           this.$store.commit('city/changeCityInfo',{nm,cityId})   //触发vuex子模块(city)中的mutations中的事件
           this.$router.push("/movie/nowShow")
       }
    }
}
</script>

<style scoped>
@import url('./index.css');
</style>