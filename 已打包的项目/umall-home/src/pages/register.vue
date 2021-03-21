<template>
  <div>
    <!-- 导航 -->
    <van-nav-bar title="注册" right-text="去登录" @click-right="onClickRight" />
    <!-- main -->
    <van-form @submit="onSubmit">
      <van-field
        v-model="user.phone"
        label="手机号"
        placeholder="手机号"
        :rules="[{ required: true, message: '请填写手机号' }]"
      />
      <van-field
        v-model="user.nickname"
        label="昵称"
        placeholder="昵称"
        :rules="[{ required: true, message: '请填写昵称' }]"
      />
      <van-field
        v-model="user.password"
        type="password"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">注 册</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import { reqRegister } from "../utils/request";
import { Toast } from 'vant';
export default {
  data() {
    return {
      user: {
        phone: "", //手机号
        nickname: "", //昵称
        password: ""
      }
    };
  },
  methods: {
    onClickRight() {
      this.$router.push("/login");
    },
    onSubmit() {
      // 提交到数据库
      reqRegister(this.user).then(res => {
        Toast.success(res.data.msg);
      });
      // 1秒以后跳转到登录
      setTimeout(() => {
        this.$router.push("/login");
      }, 1000);
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