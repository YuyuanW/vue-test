import Vue from 'vue';

import VueRouter, { RouteConfig } from 'vue-router';

import Change from '@/components/BottomNav/Change.vue';
import Money from '@/components/BottomNav/Money.vue';
import NotFound from '@/components/BottomNav/NotFound.vue';
// import HomeView from '../views/HomeView.vue'
import Tags from '@/components/BottomNav/Tags.vue';
import TagsEditor from '@/views/TagSection/TagsEditor.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path : '/',
    redirect:'/change'
  },
  {
    path:'/tags',
    component:Tags
  },
  {
    path:'/change',
    component:Change
  },
  {
    path:'/money',
    component:Money
  },
  {
    path : '/tags/editor/:id',
    component:TagsEditor
  },
  {
    path:'*',
    component:NotFound
  }
  // {
  //   path: '/',
  //   name: 'home',
  //   component: HomeView
  // },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
