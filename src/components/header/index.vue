<template>
    <div id="head">
        <slot></slot>
        <span>{{title}}</span>
    </div>
</template>

<script>
export default {
    name:'Header',
    props:{
        title:{
            type:String,
            default:'喵喵电影'
        }
    }
}
</script>

<style scoped>
    @import url('./index.scss');
</style>