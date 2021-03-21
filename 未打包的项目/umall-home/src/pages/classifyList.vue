<template>
  <div>
    <!-- 导航 -->
    <van-nav-bar title="商品列表" left-text="返回" left-arrow @click-left="onClickLeft" />
    <!-- 列表 -->
    <div class="con" v-if="list">
      <van-card
        v-for="item in list"
        :key="item.id"
        :price="item.price.toFixed(2)"
        :title="item.goodsname"
        :thumb="$preImg + item.img"
      >
        <template #footer>
          <van-button type="primary" size="small" icon="cart-o" @click="addCarList(item.id)"></van-button>
        </template>
      </van-card>
    </div>
    <div v-else>
      <!-- 组件 empty -->
      <v-empty></v-empty>
    </div>
  </div>
</template>

<script>
import { reqClassifyList } from "../utils/request";
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      list: [],
      addList: {
        num: 1,
        uid: "",
        goodsid: ""
      }
    };
  },
  computed: {
    ...mapGetters({
      user: "resUser" //获取用户信息
    })
  },
  methods: {
    ...mapActions({
      requestAddCar: "carList/addCarActions", //请求添加购物车
      requestCarList: "carList/carActions" //请求购物车
    }),
    onClickLeft() {
      this.$router.go(-1);
    },
    requestClassifyList() {
      let fid = this.$route.query.fid;
      // axios请求
      reqClassifyList({ fid }).then(res => {
        this.list = res.data.list;
      });
    },
    addCarList(goodsid) {
      this.addList.uid = this.user.uid;
      this.addList.goodsid = goodsid;
      // 请求添加购物车列表
      this.requestAddCar(this.addList);
      // 刷新购物车数据
      this.requestCarList(this.user.uid);
    }
  },
  mounted() {
    this.requestClassifyList();
  }
};
</script>

<style scoped>
.con {
  padding-bottom: 70px;
}
</style>