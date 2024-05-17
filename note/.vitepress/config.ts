import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Compare React with Vue",
  description: "React Study",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Docs", link: "/overview" },
    ],

    sidebar: [
      {
        text: "Docs",
        items: [
          { text: "总览", link: "/overview" },
          {
            text: "基本渲染",
            items: [
              { text: "循环渲染", link: "/cycleRender" },
              { text: "条件渲染", link: "/conditionRender" },
              { text: "数据绑定", link: "/dataControler" },
              { text: "事件处理", link: "/eventHandler" },
              { text: "元素操作", link: "/elementRef" },
              { text: "样式处理", link: "/styleHandler" },
            ],
          },
          { text: "数据监听", link: "/dataWatch" },
          { text: "生命周期", link: "/life" },
          { text: "组件化", link: "/component" },
          { text: "工具库", link: "/tool" },
          { text: "静态存储", link: "/store" },
          { text: "路由", link: "/router" },
          { text: "网络请求", link: "/fetch" },
          { text: "3D开发", link: "/three" },
          { text: "打包", link: "/package" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/undercurre/react_study" },
    ],
  },
});
