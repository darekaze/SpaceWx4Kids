import Vue from 'vue';
import VueI18n from 'vue-i18n';
import en from '@/locales/en.json';

Vue.use(VueI18n);

export const i18n = new VueI18n({
  locale: process.env.VUE_APP_I18N_LOCALE || 'en',
  fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'en',
  messages: { en },
  // silentFallbackWarn: true,
});

export const Trans = {
  get defaultLanguage() {
    return 'en';
  },
  get supportedLanguages() {
    return ['en', 'zh'];
  },
  get currentLanguage() {
    return i18n.locale;
  },
  set currentLanguage(lang) {
    i18n.locale = lang;
  },
  /**
   * Gets the first supported language that matches the user's
   * @return {String}
   */
  getUserSupportedLang() {
    const userPreferredLang = Trans.getUserLang();

    if (Trans.isLangSupported(userPreferredLang.lang)) {
      return userPreferredLang.lang;
    }
    if (Trans.isLangSupported(userPreferredLang.langNoISO)) {
      return userPreferredLang.langNoISO;
    }
    return Trans.defaultLanguage;
  },
  /**
   * Returns the users preferred language
   * @return {Object} language
   */
  getUserLang() {
    const lang = window.navigator.language
              || window.navigator.userLanguage
              || Trans.defaultLanguage;
    return {
      lang,
      langNoISO: lang.split('-')[0],
    };
  },
  /**
   * Sets the language to various services (axios, the html tag etc)
   * @param {String} lang
   * @return {String} lang
   */
  setI18nLanguageInServices(lang) {
    Trans.currentLanguage = lang;
    document.querySelector('html').setAttribute('lang', lang);
    return lang;
  },
  /**
   * Loads new translation messages and changes the language when finished
   * @param lang
   * @return {Promise<any>}
   */
  changeLanguage(lang) {
    if (!Trans.isLangSupported(lang)) return Promise.reject(new Error('Language not supported'));
    if (i18n.locale === lang) return Promise.resolve(lang); // has been loaded prior
    return Trans.loadLanguageFile(lang).then((msgs) => {
      i18n.setLocaleMessage(lang, msgs.default || msgs);
      return Trans.setI18nLanguageInServices(lang);
    });
  },
  /**
   * Async loads a translation file
   * @param lang
   * @return {Promise<*>|*}
   */
  loadLanguageFile(lang) {
    return import(/* webpackChunkName: "lang-[request]" */ `@/locales/${lang}.json`);
  },
  /**
   * Checks if a lang is supported
   * @param {String} lang
   * @return {boolean}
   */
  isLangSupported(lang) {
    return Trans.supportedLanguages.includes(lang);
  },
  /**
   * Checks if the route's param is supported, if not, redirects to the first supported one.
   * @param {Route} to
   * @param {Route} from
   * @param {Function} next
   * @return {*}
   */
  routeMiddleware(to, from, next) {
    // Load async message files here
    const { lang } = to.params;
    if (!Trans.isLangSupported(lang)) return next(Trans.getUserSupportedLang());
    return Trans.changeLanguage(lang).then(() => next());
  },
  /**
   * Returns a new route object that has the current language already defined
   * To be used on pages and components, outside of the main \ route, like on Headers and Footers.
   * @example <router-link :to="$i18nRoute({ name: 'someRoute'})">Click Me </router-link>
   * @param {Object} to - route object to construct
   */
  i18nRoute(to) {
    return {
      ...to,
      params: { lang: this.currentLanguage, ...to.params },
    };
  },
};
