/* eslint-disable no-unused-vars */
const subDirName = 'r2dev/spacewx4kids'; // Remember to change you site directory!!

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? `/${subDirName}/`
    : '/',
  outputDir: `dist/${subDirName}`,
  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: true,
    },
  },
  chainWebpack: (config) => {
    config.module
      .rule('markdown')
      .test(/\.md$/)
      .use('frontmatter-markdown-loader')
      .loader('frontmatter-markdown-loader')
      .tap(options => ({
        vue: {
          root: 'markdown-body',
        },
      }));
  },
};
