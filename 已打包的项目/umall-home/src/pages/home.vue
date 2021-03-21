<template>
  <div>
    <!-- 顶部导航 -->
    <van-nav-bar title="首页" />
    <!-- banner图 -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="item in banner" :key="item.id">
        <img :src="$preImg + item.img" :alt="item.title" />
      </van-swipe-item>
    </van-swipe>
    <!-- 热门推荐 -->
    <van-tabs v-model="active">
      <van-tab title="热门推荐">
        <van-card
          v-for="item in goodsList[0].content"
          :key="item.id"
          tag="hot"
          :price="item.price"
          :title="item.goodsname"
          :thumb="$preImg + item.img"
        >
          <template #footer>
            <van-button type="primary" size="small" icon="cart-o" @click="addCarList(item.id)"></van-button>
          </template>
        </van-card>
      </van-tab>
      <!-- 发现新品 -->
      <van-tab title="发现新品">
        <van-card
          v-for="item in goodsList[1].content"
          :key="item.id"
          tag="new"
          :price="item.price"
          :title="item.goodsname"
          :thumb="$preImg + item.img"
        >
          <template #footer>
            <van-button type="primary" size="small" icon="cart-o"  @click="addCarList(item.id)"></van-button>
          </template>
        </van-card>
      </van-tab>
      <!-- 所有商品 -->
      <van-tab title="所有商品">
        <van-card
          v-for="item in goodsList[2].content"
          :key="item.id"
          :price="item.price"
          :title="item.goodsname"
          :thumb="$preImg + item.img"
        >
          <template #footer>
            <van-button type="primary" size="small" icon="cart-o"  @click="addCarList(item.id)"></van-button>
          </template>
        </van-card>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { reqBanner, reqIndexGoods } from "../utils/request";
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      active: 0,
      banner: [],
      goodsList: [{ content: [] }, { content: [] }, { content: [] }],
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
    requestBanner() {
      // axios请求
      reqBanner().then(res => {
        this.banner = res.data.list;
      });
    },
    requestIndexGoods() {
      // axios请求
      reqIndexGoods().then(res => {
        this.goodsList = res.data.list;
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
    // 请求banner数据
    this.requestBanner();
    // 请求商品信息列表
    this.requestIndexGoods();
  }
};
</script>

<style scoped>
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
}
.van-swipe-item img {
  width: 100%;
  height: 200px;
}
.van-tab__pane {
  padding-bottom: 60px;
}
</style>