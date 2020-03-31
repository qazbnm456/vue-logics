module.exports = {
  title: 'VueLogics',
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
};
