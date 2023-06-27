import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DashboardTemplate from "@/shared/DashboardTemplate.vue";
import AboutView from "@/views/AboutView.vue";
import Login from "@/views/LogIn.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect:"/auth"
    },
    {
      path: '/dashboard',
      component: DashboardTemplate,
      children:[
        {
          path:"",
          component: HomeView
        },
        {
          path:"about",
          component: AboutView
        },

      ]
    },
    {
      path: "/auth",
      component:Login
    }
  ]
})

export default router
