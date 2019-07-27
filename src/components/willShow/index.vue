<template>
<div>
    <Loading v-if="loadingIsShow"></Loading>
    <div class="scrollBody" v-else>
            {{update}}
            <scroll :handleScroll="handleScroll" :handleTouchEnd="handleTouchEnd">
                <div class="box" >
                <div class="moviePost" v-for="(item,index) in comingMovielist" :key="index">
                    <div class="img">
                        <img :src="item.img|setWH('130.100')" alt="">
                    </div>
                    <div class="detail">
                        <h3>{{item.nm}}</h3>
                        <div class="score">
                            {{item.wish}}人想看
                        </div>
                        <div class="star">
                            主演:{{item.star}}
                        </div>
                        <div class="showDetail">
                        {{item.rt}}上映
                        </div>
                    </div>
                    
                    <div class="getTicket">
                        预售
                    </div>
                </div>
            </div>
            </scroll>
    </div>
</div>

</template>

<script>
export default {
    data(){
        return {
            comingMovielist:[],
            loadingIsShow:true,
            prevCityId:-1,
            update:''
        }
    },
    activated(){
        let cityId=this.$store.state.city.id;
        if(this.prevCityId===cityId){
            return 
        }
        console.log(cityId,this.prevCityId)
        this.axios.get('/api/movieComingList?cityId=10').then(res=>{
            if(res.data.msg==='ok'){
                console.log(res.data.data.comingList)
                this.comingMovielist=res.data.data.comingList
                this.loadingIsShow=false;
                this.prevCityId=cityId
            }else{
                console.log('接口错误')
            }
        })
    },
    methods:{
        handleScroll(pos){
               if(pos.y>30){
                        this.update='正在更新...'
                }
        },
        handleTouchEnd(pos){
              if(pos.y>30&&this.update){
                    this.update='更新完成'
                    setTimeout(() => {
                        this.axios.get('/api/movieComingList?cityId=20').then(res=>{
                            if(res.data.msg==='ok'){
                            this.movieList=res.data.data.movieList
                                this.update=""
                            }
                        })
                    }, 500);
                }
        }
    }
}
</script>

<style scoped>
@import url('./index.css');
</style>