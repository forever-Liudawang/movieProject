<template>
<div class="detailContainer">
    <Header title="影片详情" class="head"> 
        <img src="../../../assets/back.png" class="back" @touchstart="handleBack"/>
    </Header>
    <div class="main">
        <div class="movieHeader">
            <div class="img">
                <img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3139953554,3011511497&fm=27&gp=0.jpg" alt="">
            </div>
            <ul class="movieDetail">
                <h3>{{movieDetail.nm}}</h3>
                <li class="eNm">{{movieDetail.enm}}</li>
                <li class="movieType">{{movieDetail.cat}}</li>
                <li class="from">中国香港,中国大陆/100分钟</li>
                <li class="time">{{movieDetail.pubDesc}}</li>
            </ul>
        </div> 
        <p class="movieIntro">
           {{movieDetail.dra}}
        </p>
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1817942452,3032982386&fm=27&gp=0.jpg" alt="">
                </div>
                <div class="swiper-slide">
                    <img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3139953554,3011511497&fm=27&gp=0.jpg" alt="">
                </div>
                <div class="swiper-slide">
                    <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3893146502,314297687&fm=27&gp=0.jpg" alt="">
                </div>
                <div class="swiper-slide">
                    <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2594954460,618903872&fm=27&gp=0.jpg" alt="">
                </div>
                <div class="swiper-slide">
                    <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1117035161,2826823365&fm=27&gp=0.jpg" alt="">
                </div>
            </div>
        </div> 
    </div>
</div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
import Header from '@/components/header'
export default {
    components:{
        Header,
       
    },
    data(){
        return {
             movieDetail:{},
        }
    },
    props:['movieId'],  //通过路由传过来的参数
    methods:{
        initSwiper(){
            var mySwiper=new Swiper('.swiper-container',{
                slidesPerView:'auto',
                freeMode:true,
                freeModeSticky:true             
            })
        },
        handleBack(){
            this.$router.back();
        }
    },
    mounted(){
        console.log(this.movieId)
        this.axios.get('/api/detailmovie?movieId='+this.movieId).then(res=>{
            if(res.data.msg==='ok'){
                console.log(res.data.data.detailMovie)
                this.movieDetail=res.data.data.detailMovie
            }
        })
         this.initSwiper()
    },
    
    created(){
       
    }
}
//F:\Pratice\vue喵喵电影\miaomiaoProject - 副本 (2)\node_modules\_swiper@4.5.0@swiper\dist\css\swiper.css

</script>

<style scoped>
@import url('./index.css');
</style>