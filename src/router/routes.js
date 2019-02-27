import { Trans } from '@/plugins/i18n';
import Home from '@/views/Home.vue';
import Template from '@/router/Template.vue';

function load(component) {
  return () => import(/* webpackChunkName: "[request]" */ `@/views/${component}.vue`);
}

export default [
  {
    path: '/:lang',
    component: Template,
    beforeEnter: Trans.routeMiddleware,
    children: [
      {
        path: '',
        name: 'home',
        component: Home,
      },
      {
        path: 'phenomena',
        name: 'phenomena',
        component: load('About'),
      },
      {
        path: 'impacts',
        name: 'impacts',
        component: load('About'),
      },
      {
        path: 'historical-events',
        name: 'historical-events',
        component: load('About'),
      },
      {
        path: 'alerts',
        name: 'alerts',
        component: load('About'),
      },
      {
        path: 'games',
        name: 'games',
        component: load('About'),
      },
      {
        path: '*',
        component: load('404'),
      },
    ],
  },
  { // Redirect user to supported lang version.
    path: '*',
    redirect() {
      return Trans.getUserSupportedLang();
    },
  },
];
