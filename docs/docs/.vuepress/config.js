module.exports = {
  theme:"antdocs",
  title: "Elegance-UI Color",
  description: "一款基于Vue2开发的UI组件库，如果对您有帮助，不妨点一个star。",
  base: "/elegance-ui/",
  head: [
    ["link",{ rel: "icon",href: "/assets/logo.png" }]
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