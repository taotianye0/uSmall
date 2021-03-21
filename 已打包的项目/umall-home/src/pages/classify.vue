<template>
  <div class="box">
    <!-- 导航 -->
    <van-nav-bar title="分类" left-text="返回" left-arrow @click-left="onClickLeft" />
    <!-- 一级分类 -->
 
    <van-sidebar v-model="activeKey">
      <van-sidebar-item
        v-for="(item,index) in firstList"
        :key="item.id"
        :title="item.catename"
        @click="first(index)"
      />
    </van-sidebar>
    <!-- 二级分类展示 -->
    <van-grid :border="false" :column-num="3">
      <van-grid-item v-for="item in scoendList" :key="item.id" @click="push(item.id)">
        <van-image :src="$preImg + item.img" />
        <p>{{item.catename}}</p>
      </van-grid-item>
    </van-grid>
  </div>
</template>

<script>
import { reqCatetree, reqClassifyList } from "../utils/request";
export default {
  data() {
    return {
      activeKey: 0,
      firstList: [],
      scoendList: []
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    requestClassify() {
      // axios请求分类列表
      reqCatetree().then(res => {
        this.firstList = res.data.list;
        this.first(0);
      });
    },
    first(index) {
      this.scoendList = this.firstList[index].children;
    },
    push(id) {
      this.$router.push("/classifyList?fid=" + id);
    }
  },
  mounted() {
    this.requestClassify();
  }
};
</script>

<style scoped>
.box {
  position: relative;
}
.van-grid {
  position: absolute;
  top: 60px;
  right: 0;
  width: calc(100% - 90px);
}
</style>