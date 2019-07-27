<template>
    <div class="wrap">
        <div class="search">
            <input type="text" id="inp" v-model="message">
        </div>
        <div class="nav">
            电影/电视/综艺
        </div>

         <div class="moviePost" v-for="(item,index) in searchList" :key="index">
            <div class="img">
            <img :src="item.img|setWH('130.100')" alt="">
            </div>
            <div class="detail">
                <h3>{{item.nm}}</h3>
                <div class="score">
                    {{item.enm}}
                </div>
                <div class="star">
                   {{item.cat}}
                </div>
                <div class="showDetail">
                {{item.pubDesc}}上映
                </div>
            </div>
        </div>
    </div>

</template>

<script>
export default {
        data(){
            return {
                message:"",
                searchList:[]
            }
        },
        watch:{
            message(newVal){
                clearTimeout()
                setTimeout(
                     this.axios.get('/api/searchList?cityId=10&kw='+newVal).then(res=>{
                        if(res.data.data.movies){
                            console.log(res.data.data.movies.list)
                            this.searchList=res.data.data.movies.list
                        }
                },500)
                )      
               
            }
        },
        methods:{
            
        }
         
}
</script>

<style scoped>
@import url('./index.css');
</style>