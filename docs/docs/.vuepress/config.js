module.exports = {
  theme:"antdocs",
  title: "Elegance-UI",
  description: "基于Vue2打造的WebPC框架，让项目优雅以下！",
  base: "/",
  head: [
    ['script', { src: 'https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js' }],
    ['script', { src: 'https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js' }],
    ['script', { src: 'https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js' }],
    ['script', { src: 'https://cdn.jsdelivr.net/npm/@babel/standalone/babel.min.js' }],
    ["link",{ rel: "icon",href: "/assets/wallpaper.svg" }]
  ],
  markdown: {
    lineNumbers: false,
  },
  themeConfig: {
    smoothScroll: true,
    nav: require("./config/nav"),
    sidebar: require("./config/sidebar"),
    lastUpdated: "Last Updated",
    repo: "https://github.com/wangly19/elegance-ui",
    editLinks: false,
  },
  plugins: [
    ['vue-demo']
  ]
}