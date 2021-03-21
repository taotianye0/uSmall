<template>
  <div>
    <!-- 固定菜单 -->
    <van-tabbar v-model="active" route>
      <van-tabbar-item icon="home-o" to="/home">首页</van-tabbar-item>
      <van-tabbar-item icon="search" to="/classify">分类</van-tabbar-item>
      <van-tabbar-item icon="friends-o" to="/shopcar" :badge="carNum">购物车</van-tabbar-item>
      <van-tabbar-item icon="setting-o" to="/mime">我的</van-tabbar-item>
    </van-tabbar>
    <!-- 二级路由出口 -->
    <router-view></router-view>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      active: 0
    };
  },
  computed: {
    ...mapGetters({
      user: "resUser",
      carNum: "carList/resCarNum"
    })
  },
  methods: {
    ...mapActions({
      requestCarList: "carList/carActions" //请求购物车
    })
  },
  mounted() {
    if (this.user) {
      this.requestCarList(this.user.uid);
    }
  }
};
</script>

<style scoped>
.van-tabbar .van-tabbar-item {
  font-size: 14px;
}
</style>