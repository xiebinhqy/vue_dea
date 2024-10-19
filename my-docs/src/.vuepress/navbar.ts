import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  "/portfolio",
  "/demo/",
  "/Strategic_ideas/",
  {
    text: "外汇EA",
    icon: "lightbulb",
    prefix: "/Forex/",
    children: [
      {
        text: "策略中心",
        icon: "lightbulb",
        prefix: "qushi/",
        //children: ["README", { text: "趋势EA归类", icon: "book", link: "" }],
        children: [
          "", 
          { 
            text: "趋势EA归类",
            icon: "book", 
            link: "/qushi" 
          },
          { 
            text: "震荡类EA",
            icon: "book", 
            link: "/zhendang" 
          },
        ],
      }
    ],
  },
  // {
  //   text: "ebc暂时工鞥",
  //     icon: "laptop-code",
  //     prefix: "ebc/",
  //     link: "ebc/",
  //     children: [
  //       {
  //         text: "安装",
  //         icon: "lightbulb",
  //         prefix: "anzhuang/README",
  //         children: ["README", { text: "...", icon: "ellipsis", link: "" }],
  //       },
  //       {
  //         text: "bushu",
  //         icon: "lightbulb",
  //         prefix: "bushu/",
  //         children: ["README", { text: "...", icon: "ellipsis", link: "" }],
  //       },
  //       {
  //         text: "wancheng",
  //         icon: "lightbulb",
  //         prefix: "wancheng/",
  //         children: ["README", { text: "...", icon: "ellipsis", link: "" }],
  //       },
  //     ]
  // },

  {
    text: "V2 文档",
    icon: "book",
    link: "https://theme-hope.vuejs.press/zh/",
  },
]);
