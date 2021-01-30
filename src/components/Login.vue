<template>
    <div class="login_container">
        <!-- 登陆组件 -->
        <div class="login_box">
            <!-- 这个是登陆的白色的盒子 -->
        </div>
    </div>
</template>

<script>
export default {
//    name:'login'
//    这个不写也行，老师就没写
}
</script>

<style lang="less" scoped>
// 代表这个节点中支持less语法
// scoped用来控制组件样式生效的区间
// 加上scoped说明这个样式只在当前组件内生效
// 一个组件它的样式肯定是来美化自己组件结构的，不应该涉及到别人
// 所以一定要记得加scoped，用来防止样式冲突
// 接下来我们需要在router.js中通过路由的形式将它渲染到App根组件中

.login_container{
    background-color: #2b4b6b;
    height: 100%;
}

.login_box{
    width: 450px;
    height: 300px;
    background-color: #fff;
    border-radius: 3px;
    // 圆角边框

    // 接下来我们要把这个盒子放到页面的正中间
    position: absolute;
    // 绝对定位脱标，孤魂野鬼
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
}
</style>