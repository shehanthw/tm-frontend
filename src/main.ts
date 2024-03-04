import './assets/index.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia';
import axiosIntercepter from "./api/AuthTokenStore"

const app = createApp(App)
const pinia = createPinia();

app.config.globalProperties.$axios = axiosIntercepter;

app.use(router)
app.use(pinia)

router.beforeEach((to, from, next) => {
    const isAuthenticated = localStorage.getItem('token') !== null;
  
    // If the route requires authentication and the user is not authenticated, redirect to login
    if (to.meta.requiresAuth && !isAuthenticated) {
      next('/login');
    } else if (to.meta.redirectIfAuthenticated && isAuthenticated) {
      // If the route is the login page and the user is already authenticated, redirect to dashboard
      next('/');
    } else {
      // Continue with the navigation
      next();
    }
  });

app.mount('#app')
