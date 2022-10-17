<template>
  <div class="navbar">
    <div class="title">上汽通用汽车 新能源车数据洞察</div>
    <el-menu
      :default-active="activeIndex"
      class="navmenu"
      mode="horizontal"
      @select="handleSelect"
      router
    >
      <el-menu-item index="/">首页</el-menu-item>
      <el-menu-item index="/drivingBehavior">驾驶行为</el-menu-item>
      <el-menu-item index="/chargeFeature">充电特征</el-menu-item>
      <el-menu-item index="/userPortrait">用户画像</el-menu-item>
      <el-menu-item index="/thermoPicture">热力图</el-menu-item>
    </el-menu>
    <div class="userinfo">欢迎您 Alfred</div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      activeIndex: "",
      navmenu: [], // 后期权限需求或扩展 可从接口取值渲染
    };
  },
  mounted() {
    this.activeIndex = sessionStorage.getItem("keyPath") || "/";
  },
  watch: {
    $route(to, from) {
      console.log(to);
      if (this.activeIndex !== to.path) {
        // 输入跳转后将当前路由存起来 刷新的时候获取
        sessionStorage.setItem("keyPath", to.path);
        this.activeIndex = to.path;
      }
    },
  },
  computed: {},
  methods: {
    handleSelect(keyPath) {
      // console.log("keyPath:", keyPath);
      // 点击跳转后将当前路由存起来 刷新的时候获取
      sessionStorage.setItem("keyPath", keyPath);
    },
  },
};
</script>

<style lang="less" scoped>
.navbar {
  background: #0063d1;
  height: 66px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 0 10px;
  .title {
    font-size: 24px;
    color: #fff;
    font-weight: bold;
    margin-bottom: 18px;
  }
  .userinfo {
    font-size: 16px;
    color: #fff;
    line-height: 66px;
  }
  .navmenu {
    height: 48px;
    background: #0063d1;
    .el-menu-item {
      height: 48px;
      line-height: 48px;
      font-size: 16px;
      border-radius: 4px 4px 0 0;
      border: 1px solid rgba(255, 255, 255, 0.5);
      background: rgba(255, 255, 255, 0.2);
      width: 120px;
      text-align: center;
      margin: 0 10px;
      color: #fff;
    }
    .is-active {
      background: #fff;
      color: #0063d1;
    }
  }
}
</style>
