import { reqCarList, reqAddCar } from "../../utils/request";

const state = {
  carList: []
};
const mutations = {
  changeCarList(state, arr) {
    state.carList = arr;
  }
};
const actions = {
  carActions(context, uid) {
    // 发起请求购物车数据
    reqCarList({ uid }).then(res => {
      context.commit("changeCarList", res.data.list);
    });
  },
  addCarActions(context, obj) {
    reqAddCar(obj).then(res => {});
  }
};
const getters = {
  resCarList(state) {
    return state.carList;
  },
  resSumprice(state) {
    let sum = 0;
    if (state.carList) {
      state.carList.forEach(item => {
        sum += item.num * item.price;
      });
    }
    return sum * 100;
  },
  resCarNum(state) {
    let num = 0;
    if (state.carList) {
      state.carList.forEach(item => {
        num += item.num;
      });
    }
    return num;
  }
};

export default {
  state,
  mutations,
  actions,
  getters,
  namespaced: true
};
