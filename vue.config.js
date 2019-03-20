/* eslint-disable no-unused-vars */
const md = require('markdown-it')({
  html: true,
  linkify: true,
  typographer: true,
})
  .use(require('markdown-it-link-attributes'), {
    attrs: {
      target: '_blank',
      rel: 'noopener noreferrer nofollow',
    },
  })
  .use(require('markdown-it-ins'))
  .use(require('markdown-it-sup'));

const subDirName = 'education/spacewx4kids'; // Remember to change you site directory!!

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
        markdown: body => md.render(body),
      }));
  },
};
