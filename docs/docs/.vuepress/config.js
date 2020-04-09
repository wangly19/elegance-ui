module.exports = {
  theme:"antdocs",
  title: "Elegance-UI Color UI",
  description: "A lightweight creator for VuePress project.",
  base: "/docs/docs/.vuepress/dist",
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
    repo: "https://github.com/zpfz/vuepress-creator",
    editLinks: false,
  },
  plugins: [
    ['vue-demo']
  ]
}