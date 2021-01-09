import Vue from 'vue';
import VueRouter from 'vue-router';
import PageLayout from '../layouts/PageLayout.vue';
import SideLayout from '../layouts/SideLayout.vue';
import Asia from '../views/Asia.vue';
import Europe from '../views/Europe.vue';
import Jayzhou from '../views/Jayzhou.vue';
import Yyqx from '../views/Yyqx.vue';
import Newsindex from '../views/Newsindex.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/Page',
    component: PageLayout,
    meta: {
      chinese: '首页',
    },
    children: [
      {
        path: 'news',
        component: SideLayout,
        meta: {
          chinese: '新闻',
        },
        children: [
          // 当news/后面为空时所显示的组件
          {
            path: '',
            component: Newsindex,
          },
          {
            path: 'asia',
            component: Asia,
            meta: {
              chinese: '非洲新闻',
            },
          },
          {
            path: 'europe',
            component: Europe,
            meta: {
              chinese: '欧洲新闻!',
            },
          },
        ],
      },
      {
        path: 'music',
        component: SideLayout,
        meta: {
          chinese: '音乐',
        },
        children: [
          // 当music后面路径都不符合的时候，直接跳转到music/jayzhou
          {
            path: '',
            redirect: 'jayzhou',
          },
          {
            path: 'jayzhou',
            component: Jayzhou,
            meta: {
              chinese: '周杰伦',
            },
          },
          {
            path: 'yyqx',
            component: Yyqx,
            meta: {
              chinese: '易烊千玺',
            },
          },
        ],
      },
    ],
  },
  // 这个*表示当用户输入为http://127.0.0.1:8080/时可自动
  // 跳转到http://127.0.0.1:8080/#/Page/news
  {
    path: '*',
    redirect: '/Page/news',
  },
];

const router = new VueRouter({
  routes,
});

export default router;
