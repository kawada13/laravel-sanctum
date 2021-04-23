import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Home from '../pages/HomeComponent.vue'
import notFound from '../pages/404.vue'
// import CategoryList from '../pages/category/index.vue'
// import CreateCategory from '../pages/category/create.vue'
// import EditCategory from '../pages/category/edit.vue'

// import ProductList from '../pages/product/index.vue'
// import CreateProduct from '../pages/product/create.vue'
// import EditProduct from '../pages/product/edit.vue'

// 認証ページ

import Login from '../pages/auth/login.vue'
import Register from '../pages/auth/register.vue'



const routes = new VueRouter({
  mode:'history',
  routes: [
    {
      path: '/',
      component: Home,
      name:'home',
      meta: { authOnly: true }
    },
    // {
    //   path: '/category',
    //   component: CategoryList,
    //   name:'category-list',
    // },
    // {
    //   path: '/category/create',
    //   component: CreateCategory,
    //   name:'create-category',
    // },
    // {
    //   path: '/category/edit/:id',
    //   component: EditCategory,
    //   name:'edit-category',
    // },
    // {
    //   path: '/product',
    //   component: ProductList,
    //   name:'product-list',
    // },
    // {
    //   path: '/product/create',
    //   component: CreateProduct,
    //   name:'create-product',
    // },
    // {
    //   path: '/product/edit/:id',
    //   component: EditProduct,
    //   name:'edit-product',
    // },
     {
       path: '/auth/login',
       component: Login,
       name:'login',
       meta: { guestOnly: true }
     },
     {
       path: '/auth/register',
       component: Register,
       name:'register',
       meta: { guestOnly: true }
     },
    {
      path: '*',
      component: notFound,
      name:'notFound',
    },
  ]
})

function isLoggedIn() {
  return localStorage.getItem("auth");
}

routes.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.authOnly)) {
      if (!isLoggedIn()) {
          next("/auth/login");
      } else {
          next();
      }
  } else if (to.matched.some(record => record.meta.guestOnly)) {
      if (isLoggedIn()) {
          next("/");
      } else {
          next();
      }
  } else {
      next();
  }
});

export default routes;
