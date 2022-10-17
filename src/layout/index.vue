<template>
  <div class="app-wrapper">
    <navbar />
    <div class="main-box flex">
      <side-menu />
      <app-main />
    </div>
  </div>
</template>

<script>

import AppMain from './components/AppMain.vue'
import Navbar from './components/Navbar.vue'
import sideMenu from './components/sidebar/index.vue'
export default {
  name: 'Layout',
  components: {
    AppMain,
    Navbar,
    sideMenu,
  },
  data() {
    return {
      // 二级菜单 首页没有二级菜单为空数组
      menuLists: {
        dashborad: [],
        // 驾驶行为 后续如果需要做权限 此处的数据从接口拿
        drivingBehavior: [
          {
            id: 1,
            parentid: "0",
            name: "系统主页",
            icon: "HomeFilled",
            url: "/homepage",
          },
          {
            id: 1,
            parentid: "0",
            name: "系统主页",
            icon: "HomeFilled",
            url: "/homepage",
          },
          {
            id: 1,
            parentid: "0",
            name: "系统主页",
            icon: "HomeFilled",
            url: "/homepage",
          },
          {
            id: 1,
            parentid: "0",
            name: "系统主页",
            icon: "HomeFilled",
            url: "/homepage",
          },
          {
            id: 1,
            parentid: "0",
            name: "系统主页",
            icon: "HomeFilled",
            url: "/homepage",
          },
          {
            id: 1,
            parentid: "0",
            name: "系统主页",
            icon: "HomeFilled",
            url: "/homepage",
          },
        ],
        // 充电特征
        chargeFeature: [],
        // 用户画像
        userPortrait: [],
      },
    }
  },
  computed: {},
  methods: {}
}
</script>

<style lang="less" scoped>


</style>
