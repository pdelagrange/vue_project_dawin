import { createRouter, createWebHistory } from 'vue-router';

const routes = [

  {
    path: '/',
    redirect: () => {
     return {name: 'movieList'}
    }
  },
  {
    path:'/movies',
    name:'movieList',
    component: () => import('@/views/MovieList.vue')
  },
  {
    path:'/movies/:id',
    name:'movieConsult',
    component: () => import('@/views/movieConsult.vue')
  },
  {
    path:'/movies/:id/edit',
    name:'movieEdit',
    component: () => import('@/views/MovieCreateEdit.vue')
  },
  {
    path:'/movies/create',
    name:'movieCreate',
    component: () => import('@/views/MovieCreateEdit.vue')
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
