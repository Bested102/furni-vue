import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ShopView from "../views/ShopView.vue";
import BlogView from "../views/BlogView.vue";
import ContactView from "../views/ContactView.vue";
import ServicesView from "../views/ServicesView.vue";
import AboutView from "../views/AboutView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomeView,
    },
    {
      path: "/shop",
      name: "Shop",
      component: ShopView,
    },
    {
      path: "/about-us",
      name: "AboutUs",
      component: AboutView,
    },
    {
      path: "/contact-us",
      name: "ContactUs",
      component: ContactView,
    },
    {
      path: "/services",
      name: "Services",
      component: ServicesView,
    },
    {
      path: "/blog",
      name: "Blog",
      component: BlogView,
    },
  ],
});

export default router
