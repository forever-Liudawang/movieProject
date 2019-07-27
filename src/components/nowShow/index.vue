<template>
<div>
    <Loading v-if="loadingIsShow"></Loading>
    <div class="showBody" v-else>
        {{update}}
        <scroll :handleScroll="handleScroll" :handleTouchEnd="handleTouchEnd">
            <div class="box">
                <div class="moviePost" v-for="(movieItem,index) in movieList" :key="index">
                    <div class="img">
                    <img :src="movieItem.img | setWH('130.100')" alt="">
                    </div>
                    <div class="detail" @touchstart="handleToDetail">
                        <h3>{{movieItem.nm}}</h3>
                        <div class="score">观众评分
                            <span>{{movieItem.sc}}</span>
                        </div>
                        <div class="star">
                            主演:{{movieItem.star}}
                        </div>
                        <div class="showDetail">
                        {{movieItem.showInfo}}
                        </div>
                    </div>
                    <div class="IMAX" v-if="movieItem.version=='v3d imax'">
                        <img src="../../assets/影院信息-IMAX.png" alt="">
                    </div>
                    <div class="getTicket">
                        购票
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
            movieList:[],
            loadingIsShow:true,
            prevCityId:-1,
            update:"",
        }
    },
    activated(){
        let cityId=this.$store.state.city.id;
        if(this.prevCityId===cityId){
            return 
        }
        this.axios.get('/api/movieOnInfoList?cityId='+cityId).then(res=>{
            if(res.data.msg==='ok'){
                this.movieList=res.data.data.movieList
                this.loadingIsShow=false
                this.prevCityId=cityId
                // this.$nextTick(function(){
                //     var scroll=new BScroll(this.$refs.showBody,{
                //         tap:true,
                //         probeType:1
                //     })
                //     scroll.on('scroll',(pos)=>{
                //         if(pos.y>30){
                //             this.update='正在更新...'
                //         }
                //     })
                //     scroll.on('touchEnd',(pos)=>{
                //         if(pos.y>30&&this.update){
                //             this.update='更新完成'
                //             setTimeout(() => {
                //                  this.axios.get('/api/movieOnInfoList?cityId=20').then(res=>{
                //                      if(res.data.msg==='ok'){
                //                         this.movieList=res.data.data.movieList
                //                          this.update=""
                //                      }
                //                  })
                                 
                                
                //             }, 500);
                //         }
                           
                        
                //     })
                // })
               
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
                            this.axios.get('/api/movieOnInfoList?cityId=20').then(res=>{
                                if(res.data.msg==='ok'){
                                this.movieList=res.data.data.movieList
                                    this.update=""
                                }
                            })
                            
                        
                    }, 500);
                }
        },
        handleToDetail(){
            console.log(11)
            let movieId=20;
            this.$router.push('detail/'+movieId)
        }
    }
}
</script>
    
<style scoped>
@import url('./index.css');
</style>