import Vue from 'vue';
import VueRouter from 'vue-router';

import PageLayout from '../layouts/PageLayout.vue';
import SideLayout from '../layouts/SideLayout.vue';

import store from '../store/index';

import PageIndex from '../views/PageIndex/PageIndex.vue';
import OrderIndex from '../views/OrderIndex/OrderIndex.vue';
import Allorder from '../views/OrderIndex/Allorder.vue';
import Newsorder from '../views/OrderIndex/Newsorder.vue';
import Delorder from '../views/OrderIndex/Delorder.vue';
import FinanceIndex from '../views/Finance/FinanceIndex.vue';
import FinanceAnalysis from '../views/Finance/FinanceAnalysis.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/Page',
    component: PageLayout,
    redirect: '/page/pageindex',
    meta: {
      chinese: '首页',
    },
    children: [
      // 项目首页
      {
        path: 'pageindex',
        component: PageIndex,
        name: 'pageindex',
        meta: {
          Bigc_e: 'pageindex',
          Bigc_c: '项目首页',
        },
      },
      // 订单项目
      {
        path: 'order',
        component: SideLayout,
        name: 'order',
        redirect: '/Page/order/orderindex',
        meta: {
          Bigc_e: 'order',
          Bigc_c: '订单',
        },
        children: [
          // 订单首页
          {
            path: 'orderindex',
            component: OrderIndex,
            name: 'orderindex',
            meta: {
              Bigc_e: 'order',
              Bigc_c: '订单',
              chinese: '订单首页',
            },
          },
          // 所有订单
          {
            path: 'allorder',
            component: Allorder,
            name: 'allorder',
            meta: {
              Bigc_e: 'order',
              Bigc_c: '订单',
              Samllc_e: 'allorder',
              Samllc_c: '全部订单',
              chinese: '全部订单',
            },
          },
          // 新建订单
          {
            path: 'newsorder',
            component: Newsorder,
            name: 'newsorder',
            meta: {
              Bigc_e: 'order',
              Bigc_c: '订单',
              Samllc_e: 'newsorder',
              Samllc_c: '新建订单',
              chinese: '新建订单',
            },
          },
          // 删除订单
          {
            path: 'delorder',
            component: Delorder,
            name: 'delorder',
            meta: {
              Bigc_e: 'order',
              Bigc_c: '订单',
              Samllc_e: 'delorder',
              Samllc_c: '删除订单',
              chinese: '删除订单',
            },
          },
        ],
      },
      // 财务
      {
        path: 'finance',
        component: SideLayout,
        name: 'finance',
        redirect: '/Page/finance/finance-index',
        meta: {
          Bigc_e: 'finance',
          Bigc_c: '财务',
        },
        children: [
          // 财务概览
          {
            path: 'finance-index',
            component: FinanceIndex,
            name: 'finance-index',
            meta: {
              Bigc_e: 'finance',
              Bigc_c: '财务',
              Samllc_e: 'finance-index',
              Samllc_c: '财务概览',
            },
          },
          {
            path: 'finance-analysis',
            component: FinanceAnalysis,
            name: 'finance-analysis',
            meta: {
              Bigc_e: 'finance',
              Bigc_c: '财务',
              Samllc_e: 'finance-analysis',
              Samllc_c: '财务分析',
            },
          },
        ],
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

router.afterEach((to, from) => {
  console.log('后置守卫', to, from);
  store.commit('routerStore/changeC', {
    Bigc_e: to.meta.Bigc_e,
    Bigc_c: to.meta.Bigc_c,
    Samllc_c: to.meta.Samllc_c,
    Samllc_e: to.meta.Samllc_e,
  });
});

// 以下是百度的，解决重复点击跳转引发重复路由的报错
// 获取原型对象上的push函数
const originalPush = VueRouter.prototype.push;
// 修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};

export default router;
