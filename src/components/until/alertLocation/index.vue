<template>
    <div class="wrapper">
        <div class="location">{{title}}</div>
        <div class="locaCity">{{content}}</div>
        <div class="confOrCan">
            <div class="cancel" @touchstart="handleCancel">{{cancel}}</div>
            <div class="change" @touchstart="handleChange">{{change}}</div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .wrapper{
        width: 350px;
        box-shadow: 1px 1px 3px #333;
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
        background-color: #fff;
        border-radius: 10px;
    }
    .wrapper .location,.locaCity{
        text-align: center;
        font-size: 40px;
        font-weight: 400;
        padding: 14px 0;
        color: black;
    }
    .wrapper .locaCity{
        font-size: 35px;
    }
    .wrapper .confOrCan{
        display: flex;
        padding: 8px 10px;
        border-top: 1px solid #ccc;
        
    }
    .wrapper .confOrCan div{
        flex: 1;
      
        text-align: center;
    }
    .wrapper .confOrCan .change{
        border-left: 1px solid #ccc;
    }
</style>