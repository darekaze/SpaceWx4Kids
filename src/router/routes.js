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
        name: 'Home',
        component: Home,
      },
      {
        path: 'about',
        name: 'about',
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
