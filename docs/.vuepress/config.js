module.exports = {
  title: 'Vue Logics',
  description: 'Vue Logics is a Vue Plugin to let you build your logics based on Flowy.js.',
  plugins: [
    [
      'vuepress-plugin-typescript',
      {
        tsLoaderOptions: {
          transpileOnly: true,
        },
      },
    ],
  ],
  themeConfig: {
    sidebar: {
      '/guide/': [
        {
          title: 'Guide',
          path: '/guide/',
          collapsable: false,
          children: [
            {
              title: 'Installation',
              path: '/guide/installation/',
              collapsable: true
            },
            {
              title: 'Getting Started',
              path: '/guide/',
              collapsable: true
            },
          ],
        },
      ],
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
    ],
    searchPlaceholder: 'Search...',
    smoothScroll: true,
    repo: 'qazbnm456/vue-logics',
    docsDir: 'docs',
    search: true,
  },
  dest: 'public',
};
