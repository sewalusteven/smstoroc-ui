import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DashboardTemplate from "@/shared/DashboardTemplate.vue";
import AboutView from "@/views/AboutView.vue";
import Login from "@/views/LogIn.vue";
import {getToken} from "@/config/httpClient";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect:"dashboard"
    },
    {
      path: '/dashboard',
      component: DashboardTemplate,
      children:[
        {
          path:"",
          component: HomeView,
          name:"dashboard"
        },
        {
          path:"about",
          component: AboutView
        },

      ]
    },
    {
      path: "/auth",
      component:Login,
      name: "Login"
    }
  ]
})

const isAuthenticated =  () => {
  return getToken() !== null;
}

router.beforeEach(async (to, from) => {
  console.log(to.name)
  if (to.name !== 'Login' && !isAuthenticated()) {
    return { name: 'Login' }
  }

})

export default router
