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
        component: load('Impacts'),
        children: [
          {
            path: '',
            name: 'impacts',
            component: load('ImpactsIndex'),
          },
          {
            path: ':topic',
            name: 'impacts-topic',
            component: load('Article'),
          },
        ],
      },
      {
        path: 'historical-events',
        component: load('HistoricalEvents'),
        children: [
          {
            path: '',
            name: 'historical-events',
            component: load('HistoricalEventsIndex'),
          },
          {
            path: ':topic',
            name: 'historical-events-topic',
            component: load('Article'),
          },
        ],
      },
      {
        path: 'alerts',
        name: 'alerts',
        component: load('Alerts'),
      },
      {
        path: 'monitor',
        name: 'monitor',
        component: load('TheMonitor'),
      },
      {
        path: 'sun',
        name: 'sun',
        component: load('TheSun'),
      },
      {
        path: 'earth',
        name: 'earth',
        component: load('TheEarth'),
      },
      {
        path: 'games',
        name: 'games',
        component: load('Games'),
      },
      {
        path: '404',
        name: '404',
        component: load('404'),
      },
      {
        path: '*',
        redirect() {
          return `/${Trans.currentLanguage}/404`;
        },
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
