import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TasksView from '@/views/TasksView.vue'
import ProjectsView from '../views/ProjectsView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/projects',
      name: 'projects',
      component: ProjectsView
    },
    {
      path: '/tasks',
      name: 'tasks',
      component: TasksView
    },
  ]
})

export default router
