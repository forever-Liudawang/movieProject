<template>
    <div class="wrap">
       <div class="cinemaItem" v-for="(item,index) in data" :key="index">
            <div class="detail">
            <div class="store">
                {{item.nm}}
                <span>{{item.sellPrice}}元起</span>
            </div>
            <div class="detailAdd">
                {{item.addr}}
            </div>
            <div class="tag">
                <span class="back" v-if="item.tag.sell===1">退</span>
                <span class="count">折扣卡</span>
                <span class="snack" v-if="item.tag.snack===1">小吃</span>
            </div>
        </div>
        <div class="distance">{{item.distance}}</div>
       </div>
    </div>

</template>

<script>
export default {
    props:["data"],
        data(){
            return {
                
            }
        },
       
}
</script>

<style scoped>
    @import url('./index.css');
</style>