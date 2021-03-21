<template>
  <div>
    <!-- 导航 -->
    <van-nav-bar title="登录" right-text="去注册" @click-right="onClickRight" />
    <!-- main -->
    <van-form @submit="onSubmit">
      <van-field
        v-model="user.phone"
        label="手机号"
        placeholder="手机号"
        :rules="[{ required: true, message: '请填写手机号' }]"
      />
      <van-field
        v-model="user.password"
        type="password"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">登 录</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { Toast } from "vant";
import { reqLogin } from "../utils/request";
export default {
  data() {
    return {
      user: {
        phone: "", //手机号
        password: ""
      }
    };
  },
  methods: {
    ...mapActions({
      requestLogin: "loginActions"
    }),
    onClickRight() {
      this.$router.push("/register");
    },
    onSubmit() {
      //  1.vuex 和sessionStorage 本地存储 ==>> vuex中请求数据库
      // 进行axios请求登录
      reqLogin(this.user).then(res => {
        this.requestLogin(res.data.list);
        Toast.success(res.data.msg);
        //跳转到登录
        this.$router.push("/mime");
      });
    }
  }
};
</script>

<style scoped>
.van-form {
  margin: 20px 0;
}
.van-button {
  border-radius: 15px;
}
* {
  font-size: 16px;
}
</style>