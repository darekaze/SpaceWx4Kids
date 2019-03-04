/* eslint-disable no-param-reassign */
import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import VueAxios from 'vue-axios';
import _filter from 'lodash/filter';

Vue.use(Vuex);
Vue.use(VueAxios, axios);

export default new Vuex.Store({
  state: {
    conditions: null,
  },
  mutations: {
    SET_CONDITIONS(state, data) {
      state.conditions = data;
    },
  },
  actions: {
    loadConditions({ commit }) {
      axios.get('https://services.swpc.noaa.gov/products/noaa-scales.json')
        .then(({ data }) => {
          commit('SET_CONDITIONS', data);
        })
        .catch(() => {
          console.log('Failed to obtain NOAA Scales..Try to retry'); // eslint-disable-line no-console
        });
    },
  },
  getters: {
    isInit: state => !!state.conditions,
    getDate: state => num => state.conditions[num],
    getCurrentDataByCode: state => code => state.conditions[0][code],
    getForecast: state => _filter(state.conditions, item => !!item.S.Prob),
  },
});
