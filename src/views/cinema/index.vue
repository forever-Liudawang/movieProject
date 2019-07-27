<template>
<div class="bigWrapper">
    <Header title="喵喵影院"></Header>
        <div class="nav">
            <div class="cityNav">全城</div>
            <div class="brand">品牌</div>
            <div class="show">特色</div>
        </div>
        <CinemaItem :data="cinemaList"/>
    <TabBar></TabBar>
</div>
</template>

<script>
import Header from '@/components/header'
import TabBar from '@/components/tabBar'
import CinemaItem from '@/components/cinemaItem'
export default {
     components:{
            Header,
            TabBar,
            CinemaItem
        },
        data(){
            return {
                cinemaList:[]
            }
        },
         mounted(){
            this.axios.get('/api/cinemaList?cityId=10').then(res=>{
                console.log(res)
                if(res.data.msg==='ok'){
                    this.cinemaList=res.data.data.cinemas
                }else{
                    console.log('error')
                }
            })
        }

}
</script>

<style scoped>
.bigWrapper{
    width:100%;
}
    .nav{
        width: 100%;
        display: flex;
        justify-content: space-around;
        height: 60px;
        align-items: center;
        padding: 10px 0;
        border-bottom: 1px solid rgb(214, 211, 211);
    }
    .nav>div::after{
        content: "";
        display: inline-block;
        width: 30px;
        height: 30px;
        background: url('../../assets/倒三角形.png') no-repeat bottom;
        background-size: 20px;
    }
</style>