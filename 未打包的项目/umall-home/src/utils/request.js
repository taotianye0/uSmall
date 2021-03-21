import axios from "axios";
import qs from "qs";
import { Toast } from "vant";

const baseUrl = "/api";

// 请求响应 ==》》》 请求头
axios.interceptors.request.use(config => {
  // console.group("本次响应拦截的API为：" + config.url);
  if (sessionStorage.getItem("user")) {
    config.headers.authorization = JSON.parse(
      sessionStorage.getItem("user")
    ).token;
  }
  // console.log(config);
  return config;
});

// 响应拦截
axios.interceptors.response.use(res => {
  // console.group("本次响应拦截的API为：" + res.config.url);
  if (res.data.code !== 200) {
    if (res.data.code !== 403) {
      Toast.fail(res.data.msg);
      return;
    }
  }
  // console.log(res);
  return res;
});

// banner图请求
export const reqBanner = () => {
  return axios({
    method: "get",
    url: baseUrl + "/api/getbanner"
  });
};

// 请求商品信息列表
export const reqIndexGoods = () => {
  return axios({
    method: "get",
    url: baseUrl + "/api/getindexgoods"
  });
};

// 获取分类树形结构
export const reqCatetree = () => {
  return axios({
    method: "get",
    url: baseUrl + "/api/getcatetree"
  });
};
// 获取分类商品
export const reqClassifyList = params => {
  return axios({
    method: "get",
    url: baseUrl + "/api/getgoods",
    params
  });
};
// 注册页面
export const reqRegister = data => {
  return axios({
    method: "post",
    url: baseUrl + "/api/register",
    data: qs.stringify(data)
  });
};

// 登录页面
export const reqLogin = data => {
  return axios({
    method: "post",
    url: baseUrl + "/api/login",
    data: qs.stringify(data)
  });
};
// 购物车列表 页面
export const reqCarList = params => {
  return axios({
    method: "get",
    url: baseUrl + "/api/cartlist",
    params
  });
};
// 购物车添加
export const reqAddCar = (data)=>{
  return axios({
    method:"post",
    url:baseUrl + "/api/cartadd",
    data:qs.stringify(data)
  });
};
// 购物车删除
export const reqDelCar = (data)=>{
  return axios({
    method:"post",
    url:baseUrl + "/api/cartdelete",
    data:qs.stringify(data)
  });
}
