<template>
  <el-container class="home-container">
    <!-- 我们让el-container撑满全屏 -->
    <!-- 头部区域 -->
    <el-header>
      <div>
        <!-- 在这里放布局用的div -->
        <img src="../assets/heima.png" alt="" />
        <span>电商后台管理系统</span>
      </div>
      <el-button type="info" @click="logout">退出</el-button>
    </el-header>
    <!-- 页面主体区域 -->
    <el-container>
      <!-- 侧边栏 -->
      <el-aside width="200px">
        <!-- 侧边栏菜单区域 -->
        <el-menu
          background-color="#333744"
          text-color="#fff"
          active-text-color="#409eff"
          
        >
          <!-- 一级菜单 -->
          <el-submenu :index="item.id + ''" v-for="item in menulist" :key="item.id">
            <!-- index如果相同的话，你点击一个，所有的菜单都会展开，关闭，所有的菜单也会关闭的 -->
            <!-- 每一个菜单都应该有一个独属于自己的index值 -->
            <!-- 如果有id，建议key值绑定id-->
            <!-- 一级菜单的模版区域 -->
            <template slot="title">
              <!-- i是图标 -->
              <i :class="iconsObj[item.id]"></i>
              <!-- span是文本 -->
              <span>{{item.authName}}</span>
            </template>

            <el-menu-item :index="subItem.id + ''" v-for="subItem in item.children" :key="subItem.id">
              <template slot="title">
                <!-- i是图标 -->
                <i class="el-icon-menu"></i>
                <!-- span是文本 -->
                <span>{{subItem.authName}}</span>
              </template>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <!-- 右侧内容主体 -->
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data(){
    return {
      // 左侧菜单数据
      menulist:[],
      iconsObj:{
        // 对象是Key：value
        // 每个菜单项都有一个唯一的id，可以作为key
        // id对应的图标类名，可以当作value
        '125':'iconfont icon-user',
        '103':'iconfont icon-tijikongjian',
        '101':'iconfont icon-shangpin',
        '102':'iconfont icon-danju',
        '145':'iconfont icon-baobiao'
      }
    }
  },
  created(){
    this.getMenuList()
    // 调用getMenuList来获取所有的左侧菜单。
  },
  methods: {
    logout() {
      window.sessionStorage.clear()
      this.$router.push('/login')
    },
    // 获取所有的菜单
    async getMenuList(){
      const {data:res} = await this.$http.get('menus')
      if(res.meta.status !== 200) return this.$message.error(res.meta.msg)
      this.menulist = res.data
      console.log(res);
    }
  }
}
</script>

<style lang="less" scoped>
.home-container {
  height: 100%;
}
.el-header {
  background-color: #373d41;
  // 给el-header来一个flex布局
  display: flex;
  justify-content: space-between;
  padding-left: 0;
  align-items: center;
  // 让右边按钮垂直居中
  color: #fff;
  font-size: 20px;
  > div {
    display: flex;
    align-items: center;
    span {
      margin-left: 15px;
    }
  }
}

.el-aside {
  background-color: #333744;
}

.el-main {
  background-color: #eaedf1;
}

.iconfont{
  margin-right: 10px;
}
</style>
