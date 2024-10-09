import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: '/',

  lang: "zh-CN",
  title: "文档演示",
  description: "vuepress-theme-hope 的文档演示",
  // zhege shi shenm 


  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
