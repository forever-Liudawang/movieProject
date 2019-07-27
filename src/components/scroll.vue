<template>

<div class="wrapper" ref="showBody">
    <slot></slot>
</div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
        props:{
            handleScroll:{
                type:Function,
                default:function(){},
            },
            handleTouchEnd:{
                type:Function,
                default:function(){},
            }
        },
        mounted(){
            var scroll=new BScroll(this.$refs.showBody,{
                tap:true,
                probeType:1
            })
            scroll.on('scroll',pos=>{
                this.handleScroll(pos)
            })
            scroll.on('touchEnd',pos=>{
                this.handleTouchEnd(pos)
            })
        }
}
</script>

<style scoped>
.wrapper{
    height: 100%;
}
</style>