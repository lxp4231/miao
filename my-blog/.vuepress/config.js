module.exports = {
  title: "liuxp",
  description: "this is a blog",
  dest: "public",
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "/favicon.ico",
      },
    ],
    [
      "meta",
      {
        name: "viewport",
        content: "width=device-width,initial-scale=1,user-scalable=no",
      },
    ],
    // 引入jquery
    [
      "script",
      {
        language: "javascript",
        type: "text/javascript",
        src: "https://cdn.bootcdn.net/ajax/libs/jquery/3.5.1/jquery.min.js",
      },
    ],
    // 引入鼠标点击脚本
    [
      "script",
      {
        language: "javascript",
        type: "text/javascript",
        src: "/js/MouseClickEffect.js",
      },
    ],
  ],
  theme: "reco",
  themeConfig: {
    nav: [
      {
        text: "主页",
        link: "/",
        icon: "reco-home",
      },
      {
        text: "项目",
        link: "/subject/",
        icon: "reco-date",
      },
      {
        text: "时间线",
        link: "/timeline/",
        icon: "reco-date",
      },
      {
        text: "留言",
        icon: "reco-message",
        items: [
          {
            text: "vuepress-reco",
            link: "/docs/theme-reco/",
          },
        ],
      },
      {
        text: "关于",
        icon: "reco-message",
        items: [
          {
            text: "GitHub",
            link: "https://github.com/lxp4231/miao",
            icon: "reco-github",
          },
        ],
      },
    ],
    sidebar: {
      "/docs/theme-reco/": ["", "theme", "plugin", "api"],
    },
    type: "blog",
    blogConfig: {
      category: {
        location: 2,
        text: "分类",
      },
      tag: {
        location: 3,
        text: "标签",
      },
    },
    friendLink: [
      {
        title: "午后南杂(素未谋面的大佬)",
        desc: "",
        email: "1156743527@qq.com",
        link: "https://www.recoluan.com",
      },
      {
        title: "想搭建和我一样的博客，来这里",
        desc: "一位不错的博主",
        avatar: "",
        link:
          "http://huabyte.com/blogs/others/2021/20210602.html#%E5%85%B3%E4%BA%8Evuepress",
      },
      {
        title: "趣味插件",
        desc: "一位不错的博主",
        avatar: "",
        link:
          "https://huabyte.com/blogs/others/2021/20210813.html#%E5%BC%95%E5%85%A5%E9%BC%A0%E6%A0%87%E7%82%B9%E5%87%BB%E6%95%88%E6%9E%9C",
      },
    ],
    logo: "/logo.png",
    search: true,
    searchMaxSuggestions: 10,
    lastUpdated: "Last Updated",
    author: "liuxp",
    authorAvatar: "/avatar.png",
    record: "yuICP备20019957号",
    startYear: "2020",
  },
  markdown: {
    lineNumbers: true,
  },
}
