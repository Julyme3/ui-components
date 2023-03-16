import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ButtonView from '@/views/ButtonView.vue'
import TypographyView from '@/views/TypographyView.vue'
import CheckboxView from '@/views/CheckboxView.vue'
import RadioBtnView from '@/views/RadioBtnView.vue'
import ProgressView from '@/views/ProgressView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/button',
      name: 'Button',
      component: ButtonView
    },
    {
      path: '/typography',
      name: 'Typography',
      component: TypographyView
    },
    {
      path: '/checkbox',
      name: 'Checkbox',
      component: CheckboxView
    },
    {
      path: '/radio',
      name: 'Radio',
      component: RadioBtnView
    },
    {
      path: '/progress',
      name: 'Progress',
      component: ProgressView
    }
  ]
})

export default router
