import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  "/portfolio",
  "/demo/",
  "/ebc/",
  {
    text: "指南",
    icon: "lightbulb",
    prefix: "/guide/",
    children: [
      {
        text: "Bar",
        icon: "lightbulb",
        prefix: "bar/",
        children: ["baz", { text: "...", icon: "ellipsis", link: "" }],
      },
      {
        text: "Foo",
        icon: "lightbulb",
        prefix: "foo/",
        children: ["ray", { text: "...", icon: "ellipsis", link: "" }],
      },
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
