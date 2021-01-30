<template>
  <div class="login_container">
    <!-- 登陆组件 -->
    <div class="login_box">
      <!-- 这个是登陆的白色的盒子 -->
      <!-- 在这个登陆盒子中，可以放一个头像的盒子 -->
      <!-- 头像区域 -->
      <div class="avatar_box">
        <img src="../assets/logo.png" alt="" />
      </div>
      <!-- 登陆表单区域 -->
      <el-form label-width="0px" class="login_form">
        <!-- 用户名 -->
        <el-form-item>
          <el-input></el-input>
        </el-form-item>

        <!-- 密码 -->
        <el-form-item>
          <el-input></el-input>
        </el-form-item>

        <!-- 按钮区域 -->
        <el-form-item class="btns">
           <el-button type="primary">登陆</el-button>
           <el-button type="info">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  //    name:'login'
  //    这个不写也行，老师就没写
};
</script>

<style lang="less" scoped>
// 代表这个节点中支持less语法
// scoped用来控制组件样式生效的区间
// 加上scoped说明这个样式只在当前组件内生效
// 一个组件它的样式肯定是来美化自己组件结构的，不应该涉及到别人
// 所以一定要记得加scoped，用来防止样式冲突
// 接下来我们需要在router.js中通过路由的形式将它渲染到App根组件中

.login_container {
  background-color: #2b4b6b;
  height: 100%;
}

.login_box {
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
  transform: translate(-50%, -50%);

  // 我们可以使用Less的语法嵌套写法放一个样式在里面
  .avatar_box {
    // 首先给这个盒子设置一个宽高
    height: 130px;
    width: 130px;
    // 接下来我们给这个盒子加一个外侧边框线
    border: 1px solid #eee;
    // 头像圆角的比较好看
    border-radius: 50%;
    // overflow: hidden;
    // background-color: pink;
    padding: 10px;
    box-shadow: 0 0 10px #ddd;
    // 给外面的边框线加阴影
    // 现在开始把位置摆正，avator_box向右移动大盒子的一半减去自己盒子的一半和向上移动自己盒子的一半就可以了
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    // translate里面的百分比是根据盒子的高度来进行位移的
    background-color: #fff;
    // 不加背景色会很难看
    img {
      width: 100%;
      height: 100%;
      // 让里面的图片等于父盒子的宽高，设置为100%
      // background-color: blue;
      border-radius: 50%;
      // 图片和父盒子都要加这个圆角属性才行
      // 或者父盒子overflow:hidden我试了也行
      // 但是后面还要图片离盒子保持距离，所以不要选择overflow:hidden了
      // 给图片加背景颜色
      background-color: #eee;
    }
  }
}

.login_form{
    position: absolute;
    bottom: 0;
    // 这个时候我们发现文本框并没有占满整个区域
    // 我们可以设置宽度为父盒子的100%即可
    width: 100%;
    // 我们为了让它左右有边距，可以给他加padding
    // 上下0，左右20
    padding: 0 20px;
    // box-sizing: border-box;
    // 不设置box-sizing的话表单会超出右边部分的
}

.btns{
    display: flex;
    justify-content: flex-end;
}
</style>
