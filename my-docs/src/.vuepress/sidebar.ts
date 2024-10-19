import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    "portfolio",
    {
      text: "案例",
      icon: "laptop-code",
      prefix: "demo/",
      link: "demo/",
      children: "structure",
    },
    {
      text: "功能战士",
      icon: "laptop-code",
      prefix: "cms/",
      link: "cms/",
      children: "structure",
    },
    {
      text: "幻灯片",
      icon: "person-chalkboard",
      link: "https://ecosystem.vuejs.press/zh/plugins/markdown/revealjs/demo.html",
    },
  ],
  "/ebc/" :[
    "",
    {
      text: "EBC部署",
      icon: "laptop-code",
      prefix: "bushu/",
      link: "bushu/",
      children: "structure",
    },
    {
      text: "EBC完成",
      icon: "laptop-code",
      prefix: "wancheng/",
      link: "wancheng/",
      children: "structure",
    },
  ],
  "/Strategic_ideas/" :[
    "",
    {
      text: "EBC部署",
      icon: "laptop-code",
      prefix: "bushu/",
      link: "bushu/",
      children: "structure",
    },
    {
      text: "EBC完成",
      icon: "laptop-code",
      prefix: "wancheng/",
      link: "wancheng/",
      children: "structure",
    },
  ],
  "/Forex/" :[
    {
      text: "文档",
      icon: "book",
      prefix: "qushi/",
      link: "qushi/",
      children: "structure",
    },
    {
      text: "讲解",
      icon: "book",
      prefix: "zhendang/",
      link: "zhendang/",
      children: "structure",
    },
  ],
});

