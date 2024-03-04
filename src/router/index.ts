import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import TasksView from '../views/Tasks/TasksView.vue'
import TasksCreateView from '../views/Tasks/TaskCreate.vue'
import TasksUpdateView from '../views/Tasks/TaskUpdate.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: LoginView,
      meta: { redirectIfAuthenticated: true }
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView,
      meta: { redirectIfAuthenticated: true }
    },
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { requiresAuth: true } 
    },
    {
      path: '/users',
      name: 'users',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Users/UsersView.vue')
    },
    {
      path: '/tasks',
      name: 'tasks',
      component: TasksView,
      meta: { requiresAuth: true } 
    },
    {
      path: '/tasks/create',
      name: 'tasksCreate',
      component: TasksCreateView,
      meta: { requiresAuth: true } 
    },
    {
      path: '/tasks/update/:id',
      name: 'tasksUpdate',
      component: TasksUpdateView,
      meta: { requiresAuth: true } 
    }
  ]
})

export default router
