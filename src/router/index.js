import { createRouter, createWebHistory } from 'vue-router'

import APP from '../views/APP.vue'
// import CreateList from '../views/CreateList.vue'
import MagazinView from '../views/ShopsView.vue'
import CosCumparaturi from '../components/CartView.vue'
import LangSwitch from '@/views/LangSwitch.vue'
import MagazineApropiere from '@/views/ShopsNear.vue'
import OferteAfisare from '@/views/OfferView.vue'
import ContView from '@/views/AccountView.vue'
import ListeCumparaturi from '@/views/ShoppingList.vue'
import LayoutMain from '@/components/LayoutMain.vue'
import CreateList from '@/views/CreateList.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: HomeView,
    // },
    {
      name: 'myhome',
      component: APP,
    },
    // {
    //   path: '/about',
    //   name: 'about',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue'),
    // },
    { path: '/langsSwitch', name: 'langsSwitch', component: LangSwitch },

    {
      path: '/shops',
      name: 'shops',
      component: MagazinView,
    },
    {
      path: '/shopsnear',
      name: 'shopsnear',
      component: MagazineApropiere,
    },
    {
      path: '/offer',
      name: 'offer',
      component: OferteAfisare,
    },
    // {
    //   path: '/shoppingcart',
    //   name: 'shoppingcart',
    //   component: () => import('../components/CosCumparaturi.vue'),
    // },
    {
      path: '/cont',
      name: 'cont',
      component: ContView,
    },
    {
      path: '/createlist',
      name: 'createlist',
      component: CreateList,
    },
    {
      path: '/shoppingcart',
      name: 'shoppingcart',
      component: CosCumparaturi,
    },
    {
      path: '/shoppinglist',
      name: 'shoppinglist',
      component: ListeCumparaturi,
    },
    {
      path: '/layout',
      name: 'layout',
      component: LayoutMain,
    },
  ],
})

export default router
