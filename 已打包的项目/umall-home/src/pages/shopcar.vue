<template>
  <div>
    <!-- 导航 -->
    <div class="navBox">
      <van-nav-bar title="购物车" left-text="返回" left-arrow @click-left="onClickLeft" />
    </div>
    <!-- 列表 -->
    <div class="card" v-if="sumPrice">
      <van-card
        v-for="item in carList"
        :key="item.id"
        :price="item.price.toFixed(2)"
        desc="描述信息"
        :title="item.goodsname"
        :thumb="$preImg + item.img"
      >
        <template #footer>
          <van-stepper v-model="item.num" theme="round" button-size="22" disable-input />
          <van-button type="danger" @click="del(item.id)">删除</van-button>
        </template>
      </van-card>
      <van-submit-bar :price="sumPrice" button-text="提交订单" @submit="onSubmit" />
    </div>
    <div v-else>
      <v-empty></v-empty>
    </div>
  </div>
</template>

<script>
import { reqDelCar } from "../utils/request";
import { mapActions, mapGetters } from "vuex";
import { Toast } from "vant";
export default {
  computed: {
    ...mapGetters({
      form: "resUser", //获取用户信息
      carList: "carList/resCarList", //获取购物车列表
      sumPrice: "carList/resSumprice" //商品总价
    })
  },
  methods: {
    ...mapActions({
      requestCarList: "carList/carActions" //请求购物车列表
    }),
    onClickLeft() {
      this.$router.go(-1);
    },
    onSubmit() {
      // 对接第三方支付
    },
    del(id) {
      // axios请求删除
      reqDelCar({ id }).then(res => {
        Toast.success(res.data.msg);
        this.requestCarList(this.form.uid);
      });
    }
  },
  mounted() {
    if (this.form) {
      // 请求购物车列表
      this.requestCarList(this.form.uid);
    }
  }
};
</script>

<style scoped>
.card {
  padding-bottom: 110px;
}
.van-submit-bar {
  margin-bottom: 50px;
}
.van-button--normal {
  display: inline-block;
  margin: 5px 10px;
}
.van-stepper {
  display: inline-block;
  margin-right: 10px;
}
</style>