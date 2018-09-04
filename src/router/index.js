import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home";
const Tabbar = () =>
  import(/* webpackChunkName: "Tabbar" */ "@/components/Tabbar/");
const About = () => import(/* webpackChunkName: "About" */ "@/views/About.vue");
const Goods = () => import(/* webpackChunkName: "About" */ "@/views/Goods");

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "main",
      redirect: "/home"
    },
    {
      path: "/home",
      name: "home",
      components: {
        default: Home,
        tabbar: Tabbar
      }
    },
    {
      path: "/about",
      name: "about",
      components: {
        default: About,
        tabbar: Tabbar
      }
    },
    {
      path: "/goods",
      name: "goods",
      components: {
        default: Goods
      }
    },
    {
      path: "*",
      redirect: "/home"
    }
  ]
});
