<template>
  <div>
    <!-- 导航 -->
    <van-nav-bar title="我的" left-text="返回" left-arrow @click-left="onClickLeft" />
    <!-- 主要页面 -->
    <div class="image">
      <van-image round width="3rem" height="3rem" src="https://img01.yzcdn.cn/vant/cat.jpeg" />
      <p v-if="user">用户名：{{user.nickname}}</p>
    </div>
    <van-button
      color="linear-gradient(to right, #ff6034, #ee0a24)"
      type="primary"
      block
      @click="exitLogin"
    >安全退出</van-button>
    <van-cell title="我的收藏" is-link />
    <van-cell title="我的订单" is-link />
    <van-cell title="我的评价" is-link />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { Toast } from 'vant';
export default {
  computed: {
    ...mapGetters({
      user: "resUser"
    })
  },
  methods: {
    ...mapActions({
      requestLogin: "loginActions",//请求登录
      requestCarList:"carList/carActions"//请求购物车
    }),
    onClickLeft() {
      this.$router.go(-1);
    },
    exitLogin() {
      Toast.success("已安全退出");
        this.requestLogin();
        this.$router.push("/l");
    }
  },
   mounted(){
     if(this.user){
       this.requestCarList(this.user.uid);
     }
  },
};
</script>

<style scoped>
.image {
  height: 4rem;
  background-color: rgb(202, 200, 200);
  text-align: center;
}
.van-image {
  padding-top: 0.5rem;
}
.van-button {
  margin: 5px 0 10px;
  font-size: 16px;
  border-radius: 15px;
}
</style>