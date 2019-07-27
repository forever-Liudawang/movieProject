<template>
<div id="tabBar">
   
    <router-link tag="div" to="/cinema" id="cinema">
        <div class="imgCin"></div>
        <span>影院</span>
    </router-link>
     <router-link tag="div" to="/movie"  id="movie">
        <div class="imgMov"></div>
        <span>电影</span>
    </router-link>
    <router-link tag="div" to="/mine"  id="my">
        <div class="imgMy"></div>
        <span>我的</span>
    </router-link>
</div>

</template>

<script>
export default {
    name:'TabBar'
}
</script>

<style scoped>
@import url('./index.css');
</style>