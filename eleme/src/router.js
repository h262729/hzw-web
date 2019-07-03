import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: "/",
  routes: [
    {
      path: "/",
      redirect: {
        name: "home"
      }
    },
    {
      path: "/home",
      name: "home",
      component: ()=>import("./views/home")
    },
    {
      path: "/user",
      name: "user",
      component: ()=>import("./views/user")
    },
    {
      path: "/store",
      component: ()=>import("./views/store/store-details"),
      children: [{
        path: "",
        redirect: {
          name: "store-menu"
        }
      },{
        path: "menu",
        name: "store-menu",
        component: ()=>import("./views/store/store-menu")
      },{
        path: "comment",
        name: "store-comment",
        component: ()=>import("./views/store/store-comment")
      },{
        path: "info",
        name: "store-info",
        component: ()=>import("./views/store/store-info")
      }]
    },
    {
      path: "/404",
      name: "404",
      component: ()=>import("./views/404")
    },
    {
      path: "*",
      redirect: {
        name: "404"
      }
    }
  ]
});
