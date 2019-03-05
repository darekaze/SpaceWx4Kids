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
        component: load('Phenomena'),
        children: [
          {
            path: '',
            name: 'phenomena',
            component: load('PhenomenaIndex'),
          },
          {
            path: ':topic',
            name: 'phenomena-topic',
            component: load('Article'),
          },
        ],
      },
      {
        path: 'impacts',
        name: 'impacts',
        component: load('Impacts'),
      },
      {
        path: 'historical-events',
        name: 'historical-events',
        component: load('HistoricalEvents'),
      },
      {
        path: 'alerts',
        name: 'alerts',
        component: load('Alerts'),
      },
      {
        path: 'games',
        name: 'games',
        component: load('Games'),
      },
      {
        path: '*',
        redirect: `/${Trans.currentLanguage}/`,
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
