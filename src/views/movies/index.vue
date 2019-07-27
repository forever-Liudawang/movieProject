<template>
<div class="bigWrapper">
    <Header title="喵喵影院"></Header>
        <div id="nav">
            <router-link tag="div" class="city" to="/movie/city"><span>{{$store.state.city.nm}}</span></router-link>
            <router-link tag="div"  class="nowPlaying" to="/movie/nowShow"><span>正在热映</span></router-link>
            <router-link tag="div"  class="willPlaying" to="/movie/willShow"><span>即将上映</span></router-link>
            <router-link tag="div"  class="search" to="/movie/search">
                <img src="../../assets/search.png" alt="">
            </router-link>
        </div>
        <keep-alive>
           <!-- <div class="scrollBox"> -->
                <router-view class="viewBox"></router-view>
           <!-- </div> -->
        </keep-alive>
    <TabBar></TabBar>
    <router-view name="detail"/>
</div>

</template>


<script>
import Header from '@/components/header'
import TabBar from '@/components/tabBar'
import {locationInfo} from '@/components/until/location.js'
export default {
    components:{
        Header,
        TabBar,
    },
     data() {
        return {

        }
    },
    methods: {
        
    },
    mounted(){
       setTimeout(()=>{
           this.axios.get('/api/getLocation').then(res=>{
            console.log(res)
            const nm=res.data.data.nm
            if(this.$store.state.city.nm==nm)return 
            if(res.data.msg==='ok'){
                 locationInfo({
                    title:'定位',
                    content:nm,
                    cancel:'取消',
                    change:'切换定位',
                    handleChange(){
                        window.localStorage.setItem('nowCity',nm)
                        window.location.reload();
                    }
                })
            }
        }
       )},2000)
    }
    
}
</script>

<style scoped>
@import url('./index.css');
</style>