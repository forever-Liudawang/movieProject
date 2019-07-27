<template>
<div class="bigWrapper">
    <Header title="我的喵喵"></Header>
        <div class="body">
            <div class="count">
                <input type="text" placeholder="账户名/手机号/密码">
            </div>
            <div class="password">
                <input type="password" placeholder="请输入您的密码">
            </div>
            <div class="btn">
                <button>登陆</button>
            </div>
            <div class="regOrget">
                <span>立即注册</span>
                <span>找回密码</span>
            </div>
        </div>
    <TabBar></TabBar>
</div>
</template>

<script>
import Header from '@/components/header'
import TabBar from '@/components/tabBar'
export default {
        components:{
            Header,
            TabBar
        }
}
</script>

<style scoped>
@import url('./index.css');
</style>