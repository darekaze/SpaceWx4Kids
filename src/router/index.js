import Vue from 'vue';
import Router from 'vue-router';
import routes from './routes';

Vue.use(Router);

export default new Router({
  routes,
  // mode: 'history', // HACK
  base: __dirname,
  scrollBehavior(to, from, savedPosition) {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (savedPosition) {
          resolve(savedPosition);
        }
        resolve({ x: 0, y: 0 });
      }, 220);
    });
  },
});
