webpackJsonp([10],{"4ml/":function(t,n){},"991W":function(t,n){},EDgR:function(t,n){var e,r,i,a,o;e=window,r=e.document,i=r.documentElement,a="orientationchange"in e?"orientationchange":"resize",o=function(){var t=i.clientWidth||320;t>720&&(t=720),i.style.fontSize=t/7.2+"px"},r.addEventListener&&(e.addEventListener(a,o,!1),r.addEventListener("DOMContentLoaded",o,!1))},NHnr:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=e("7+uW"),i={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",[n("router-view")],1)},staticRenderFns:[]};var a=e("VU/8")({},i,!1,function(t){e("x6W5")},null,null).exports,o=e("/ocq"),u=e("Fd2+");r.a.use(o.a);var s=new o.a({routes:[{path:"/",component:function(){return Promise.all([e.e(0),e.e(3)]).then(e.bind(null,"2NXm"))},redirect:"/home",children:[{path:"home",name:"首页",component:function(){return Promise.all([e.e(0),e.e(2)]).then(e.bind(null,"vkyI"))}},{path:"classify",name:"分类",component:function(){return e.e(5).then(e.bind(null,"HR5j"))}},{path:"shopcar",name:"购物车",component:function(){return Promise.all([e.e(0),e.e(4)]).then(e.bind(null,"zhiw"))}},{path:"mime",name:"我的",component:function(){return Promise.all([e.e(0),e.e(1)]).then(e.bind(null,"qKB8"))}},{path:"classifyList",name:"商品列表",component:function(){return Promise.all([e.e(0),e.e(8)]).then(e.bind(null,"X17F"))}},{path:"",redirect:"/home"}]},{path:"/register",name:"注册",component:function(){return e.e(7).then(e.bind(null,"1cHr"))}},{path:"/login",alias:"/l",name:"登录",component:function(){return Promise.all([e.e(0),e.e(6)]).then(e.bind(null,"Luci"))}}]});s.beforeEach(function(t,n,e){if(("/mime"==t.path||"/shopcar"==t.path)&&!JSON.parse(sessionStorage.getItem("user")))return u.a.fail("请登录"),void s.push("/login");e()});var c=s,m=(e("4ml/"),e("EDgR"),e("991W"),{render:function(){var t=this.$createElement;return(this._self._c||t)("van-empty",{staticClass:"custom-image",attrs:{image:"https://img01.yzcdn.cn/vant/custom-empty-image.png",description:"空空如也"}})},staticRenderFns:[]});var d={vEmpty:e("VU/8")({},m,!1,function(t){e("ae/q")},"data-v-3711cfa3",null).exports},f=e("NYxO"),l=e("mvHQ"),p=e.n(l),h={user:sessionStorage.getItem("user")?JSON.parse(sessionStorage.getItem("user")):null},g={changeUser:function(t,n){t.user=n,n?sessionStorage.setItem("user",p()(n)):sessionStorage.removeItem("user")}},v=e("vLgD"),L={state:{carList:[]},mutations:{changeCarList:function(t,n){t.carList=n}},actions:{carActions:function(t,n){Object(v.c)({uid:n}).then(function(n){t.commit("changeCarList",n.data.list)})},addCarActions:function(t,n){Object(v.a)(n).then(function(t){})}},getters:{resCarList:function(t){return t.carList},resSumprice:function(t){var n=0;return t.carList&&t.carList.forEach(function(t){n+=t.num*t.price}),100*n},resCarNum:function(t){var n=0;return t.carList&&t.carList.forEach(function(t){n+=t.num}),n}},namespaced:!0};r.a.use(f.a);var b=new f.a.Store({state:h,mutations:g,actions:{loginActions:function(t,n){t.commit("changeUser",n)}},getters:{resUser:function(t){return t.user}},modules:{carList:L}});for(var y in r.a.use(u.b),r.a.config.productionTip=!1,r.a.prototype.$preImg="",d)r.a.component(y,d[y]);new r.a({el:"#app",router:c,store:b,components:{App:a},template:"<App/>"})},"ae/q":function(t,n){},vLgD:function(t,n,e){"use strict";e.d(n,"b",function(){return s}),e.d(n,"g",function(){return c}),e.d(n,"d",function(){return m}),e.d(n,"e",function(){return d}),e.d(n,"i",function(){return f}),e.d(n,"h",function(){return l}),e.d(n,"c",function(){return p}),e.d(n,"a",function(){return h}),e.d(n,"f",function(){return g});var r=e("mtWM"),i=e.n(r),a=e("mw3O"),o=e.n(a),u=e("Fd2+");i.a.interceptors.request.use(function(t){return sessionStorage.getItem("user")&&(t.headers.authorization=JSON.parse(sessionStorage.getItem("user")).token),t}),i.a.interceptors.response.use(function(t){if(200===t.data.code||403===t.data.code)return t;u.a.fail(t.data.msg)});var s=function(){return i()({method:"get",url:"/api/getbanner"})},c=function(){return i()({method:"get",url:"/api/getindexgoods"})},m=function(){return i()({method:"get",url:"/api/getcatetree"})},d=function(t){return i()({method:"get",url:"/api/getgoods",params:t})},f=function(t){return i()({method:"post",url:"/api/register",data:o.a.stringify(t)})},l=function(t){return i()({method:"post",url:"/api/login",data:o.a.stringify(t)})},p=function(t){return i()({method:"get",url:"/api/cartlist",params:t})},h=function(t){return i()({method:"post",url:"/api/cartadd",data:o.a.stringify(t)})},g=function(t){return i()({method:"post",url:"/api/cartdelete",data:o.a.stringify(t)})}},x6W5:function(t,n){}},["NHnr"]);
//# sourceMappingURL=app.65ded27ac7c1679c4026.js.map