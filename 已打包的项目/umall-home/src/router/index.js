import Vue from "vue";
import Router from "vue-router";
import {Toast} from "vant";

Vue.use(Router);

const index = () => import("../pages/index");
const home = () => import("../pages/home");
const classify = () => import("../pages/classify");
const classifyList = () => import("../pages/classifyList");
const shopcar = () => import("../pages/shopcar");
const mime = () => import("../pages/mime");
const register = () => import("../pages/register");
const login = () => import("../pages/login");

const router = new Router({
  routes: [
    {
      path: "/",
      component: index,
      redirect: "/home",
      children: [
        {
          path: "home",
          name: "首页",
          component: home
        },
        {
          path: "classify",
          name: "分类",
          component: classify
        },
        {
          path: "shopcar",
          name: "购物车",
          component: shopcar
        },
        {
          path: "mime",
          name: "我的",
          component: mime
        },
        {
          path: "classifyList",
          name: "商品列表",
          component: classifyList
        },
        {
          path: "",
          redirect: "/home"
        }
      ]
    },
    {
      path: "/register",
      name: "注册",
      component: register
    },
    {
      path: "/login",
      alias: "/l",
      name: "登录",
      component: login
    }
  ]
});
// 全局守卫  不要全部守卫，要让用户能看到某些东西
router.beforeEach((to, from, next) => {
  if (to.path == "/mime" || to.path == "/shopcar") {
    // 获取用户信息
    let user = JSON.parse(sessionStorage.getItem("user"));
    if (!user) {
      Toast.fail("请登录");
      // 去到登录页面
      router.push("/login");
      return;
    }
  }
  next();
});

export default router;
