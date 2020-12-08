import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const Home = () => import("views/home/Home.vue");
const Category = () => import("views/category/Category.vue");
const ShopCart = () => import("views/shopCart/ShopCart.vue");
const Profile = () => import("views/profile/Profile.vue");

const routes = [
  {
    path: "",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "home",
    component: Home,
  },
  {
    path: "/category",
    name: "category",
    component: Category,
  },
  {
    path: "/shopCart",
    name: "shopCart",
    component: ShopCart,
  },
  {
    path: "/profile",
    name: "profile",
    component: Profile,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
