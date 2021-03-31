import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  
  // Home
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { transitionName: 'home' },
  },

  // About
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },

  // Projects
  {
    path: '/work/',
    name: 'Projects',
    component: () => import(/* webpackChunkName: "projects" */ '../views/Projects.vue'),
    //meta: { transitionName: 'projects' },
    children: [

      // Selected Work
      { 
        path: '', 
        name: 'Selected Work',
        component: () => import(/* webpackChunkName: "selected-work" */ '../views/SelectedWork.vue'), 
      },

      // KeyoCoin
      {
        path: 'keyocoin',
        name: 'Project KeyoCoin',
        component: () => import(/* webpackChunkName: "project-keyocoin" */ '../views/Projects/KeyoCoin.vue'),
      },

      // ImpactPass
      {
        path: 'impactpass',
        name: 'Project ImpactPass',
        component: () => import(/* webpackChunkName: "project-impactpass" */ '../views/Projects/ImpactPass.vue'),
      },

      // KeyoPass
      {
        path: 'keyopass',
        name: 'Project KeyoPass',
        component: () => import(/* webpackChunkName: "project-keyopass" */ '../views/Projects/KeyoPass.vue'),
      },

      // Vacation Voucher
      {
        path: 'vacation-voucher',
        name: 'Project Vacation Voucher',
        component: () => import(/* webpackChunkName: "project-vacation-voucher" */ '../views/Projects/VacationVoucher.vue'),
      },

      // Junar
      {
        path: 'junar',
        name: 'Project Junar',
        component: () => import(/* webpackChunkName: "project-junar" */ '../views/Projects/Junar.vue'),
      },

    ],
  },  

  // Side Projects
  {
    path: '/side-projects',
    name: 'SideProjects',
    component: () => import(/* webpackChunkName: "side-projects" */ '../views/SideProjects.vue'),
    meta: { transitionName: 'side-projects' },
  }
]

const router = new VueRouter({
  routes
})

export default router
