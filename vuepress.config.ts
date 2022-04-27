import { docsearchPlugin } from "@vuepress/plugin-docsearch";
import { pwaPlugin } from "@vuepress/plugin-pwa";
import { defaultTheme } from "@vuepress/theme-default";
import { defineUserConfig } from "vuepress";

export default defineUserConfig({
  base: "/",
  head: [
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: `/images/icons/favicon-16x16.png`,
      },
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: `/images/icons/favicon-32x32.png`,
      },
    ],
    ["link", { rel: "manifest", href: "/manifest.webmanifest" }],
    ["meta", { name: "application-name", content: "VuePress" }],
    ["meta", { name: "apple-mobile-web-app-title", content: "VuePress" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
    [
      "link",
      { rel: "apple-touch-icon", href: `/images/icons/apple-touch-icon.png` },
    ],
    [
      "link",
      {
        rel: "mask-icon",
        href: "/images/icons/safari-pinned-tab.svg",
        color: "#3eaf7c",
      },
    ],
    ["meta", { name: "msapplication-TileColor", content: "#3eaf7c" }],
    ["meta", { name: "theme-color", content: "#3eaf7c" }],
  ],
  // site-level locales config
  locales: {
    "/": {
      lang: "en-US",
      title: "VuePress",
      description: "Vue-powered Static Site Generator",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "VuePress",
      description: "Vue 驱动的静态网站生成器",
    },
  },
  theme: defaultTheme({
    logo: "/images/hero.png",

    repo: "vuepress/vuepress-next",

    docsDir: "docs",

    // theme-level locales config
    locales: {
      // English locale config
      "/": {
        // navbar
        navbar: [
          {
            text: "Guide",
            link: "/guide/",
          },
          {
            text: "Reference",
            link: "/reference/cli",
          },
          {
            text: "Learn More",
            link: "/advanced/architecture",
          },
        ],
        // sidebar
        sidebar: {
          "/guide/": [
            {
              text: "Guide",
              children: [
                "/guide/README.md",
                "/guide/getting-started.md",
                "/guide/configuration.md",
                "/guide/page.md",
                "/guide/markdown.md",
                "/guide/assets.md",
                "/guide/i18n.md",
                "/guide/deployment.md",
                "/guide/theme.md",
                "/guide/plugin.md",
                "/guide/bundler.md",
                "/guide/migration.md",
              ],
            },
          ],
          "/advanced/": [
            {
              text: "Advanced",
              children: [
                "/advanced/architecture.md",
                "/advanced/plugin.md",
                "/advanced/theme.md",
              ],
            },
            {
              text: "Cookbook",
              children: [
                "/advanced/cookbook/README.md",
                "/advanced/cookbook/usage-of-client-app-enhance.md",
                "/advanced/cookbook/adding-extra-pages.md",
                "/advanced/cookbook/making-a-theme-extendable.md",
                "/advanced/cookbook/passing-data-to-client-code.md",
                "/advanced/cookbook/markdown-and-vue-sfc.md",
              ],
            },
          ],
          "/reference/": [
            {
              text: "VuePress Reference",
              collapsible: true,
              children: [
                "/reference/cli.md",
                "/reference/config.md",
                "/reference/frontmatter.md",
                "/reference/components.md",
                "/reference/plugin-api.md",
                "/reference/theme-api.md",
                "/reference/client-api.md",
                "/reference/node-api.md",
              ],
            },
            {
              text: "Bundlers Reference",
              collapsible: true,
              children: ["/reference/bundler/vite.md", "/reference/bundler/webpack.md"],
            },
            {
              text: "Default Theme Reference",
              collapsible: true,
              children: [
                "/reference/default-theme/config.md",
                "/reference/default-theme/frontmatter.md",
                "/reference/default-theme/components.md",
                "/reference/default-theme/markdown.md",
                "/reference/default-theme/styles.md",
                "/reference/default-theme/extending.md",
              ],
            },
            {
              text: "Official Plugins Reference",
              collapsible: true,
              children: [
                {
                  text: "Common Features",
                  children: [
                    "/reference/plugin/back-to-top.md",
                    "/reference/plugin/container.md",
                    "/reference/plugin/external-link-icon.md",
                    "/reference/plugin/google-analytics.md",
                    "/reference/plugin/medium-zoom.md",
                    "/reference/plugin/nprogress.md",
                    "/reference/plugin/register-components.md",
                  ],
                },
                {
                  text: "Content Search",
                  children: [
                    "/reference/plugin/docsearch.md",
                    "/reference/plugin/search.md",
                  ],
                },
                {
                  text: "PWA",
                  children: [
                    "/reference/plugin/pwa.md",
                    "/reference/plugin/pwa-popup.md",
                  ],
                },
                {
                  text: "Syntax Highlighting",
                  children: [
                    "/reference/plugin/prismjs.md",
                    "/reference/plugin/shiki.md",
                  ],
                },
                {
                  text: "Theme Development",
                  children: [
                    "/reference/plugin/active-header-links.md",
                    "/reference/plugin/git.md",
                    "/reference/plugin/palette.md",
                    "/reference/plugin/theme-data.md",
                    "/reference/plugin/toc.md",
                  ],
                },
              ],
            },
          ],
        },
        // page meta
        editLinkText: "Edit this page on GitHub",
      },
      // Chinese locale config
      "/zh/": {
        // navbar
        navbar: [
          {
            text: "指南",
            link: "/zh/guide/",
          },
          {
            text: "参考",
            link: "/zh/reference/cli",
          },
          {
            text: "了解更多",
            link: "/zh/advanced/architecture",
          },
        ],
        selectLanguageName: "简体中文",
        selectLanguageText: "选择语言",
        selectLanguageAriaLabel: "选择语言",
        // sidebar
        sidebar: {
          "/zh/guide/": [
            {
              text: "指南",
              children: [
                "/zh/guide/README.md",
                "/zh/guide/getting-started.md",
                "/zh/guide/configuration.md",
                "/zh/guide/page.md",
                "/zh/guide/markdown.md",
                "/zh/guide/assets.md",
                "/zh/guide/i18n.md",
                "/zh/guide/deployment.md",
                "/zh/guide/theme.md",
                "/zh/guide/plugin.md",
                "/zh/guide/bundler.md",
                "/zh/guide/migration.md",
              ],
            },
          ],
          "/zh/advanced/": [
            {
              text: "深入",
              children: [
                "/zh/advanced/architecture.md",
                "/zh/advanced/plugin.md",
                "/zh/advanced/theme.md",
              ],
            },
            {
              text: "Cookbook",
              children: [
                "/zh/advanced/cookbook/README.md",
                "/zh/advanced/cookbook/usage-of-client-app-enhance.md",
                "/zh/advanced/cookbook/adding-extra-pages.md",
                "/zh/advanced/cookbook/making-a-theme-extendable.md",
                "/zh/advanced/cookbook/passing-data-to-client-code.md",
                "/zh/advanced/cookbook/markdown-and-vue-sfc.md",
              ],
            },
          ],
          "/zh/reference/": [
            {
              text: "VuePress 参考",
              collapsible: true,
              children: [
                "/zh/reference/cli.md",
                "/zh/reference/config.md",
                "/zh/reference/frontmatter.md",
                "/zh/reference/components.md",
                "/zh/reference/plugin-api.md",
                "/zh/reference/theme-api.md",
                "/zh/reference/client-api.md",
                "/zh/reference/node-api.md",
              ],
            },
            {
              text: "打包工具参考",
              collapsible: true,
              children: [
                "/zh/reference/bundler/vite.md",
                "/zh/reference/bundler/webpack.md",
              ],
            },
            {
              text: "默认主题参考",
              collapsible: true,
              children: [
                "/zh/reference/default-theme/config.md",
                "/zh/reference/default-theme/frontmatter.md",
                "/zh/reference/default-theme/components.md",
                "/zh/reference/default-theme/markdown.md",
                "/zh/reference/default-theme/styles.md",
                "/zh/reference/default-theme/extending.md",
              ],
            },
            {
              text: "官方插件参考",
              collapsible: true,
              children: [
                {
                  text: "常用功能",
                  children: [
                    "/zh/reference/plugin/back-to-top.md",
                    "/zh/reference/plugin/container.md",
                    "/zh/reference/plugin/external-link-icon.md",
                    "/zh/reference/plugin/google-analytics.md",
                    "/zh/reference/plugin/medium-zoom.md",
                    "/zh/reference/plugin/nprogress.md",
                    "/zh/reference/plugin/register-components.md",
                  ],
                },
                {
                  text: "内容搜索",
                  children: [
                    "/zh/reference/plugin/docsearch.md",
                    "/zh/reference/plugin/search.md",
                  ],
                },
                {
                  text: "PWA",
                  children: [
                    "/zh/reference/plugin/pwa.md",
                    "/zh/reference/plugin/pwa-popup.md",
                  ],
                },
                {
                  text: "语法高亮",
                  children: [
                    "/zh/reference/plugin/prismjs.md",
                    "/zh/reference/plugin/shiki.md",
                  ],
                },
                {
                  text: "主题开发",
                  children: [
                    "/zh/reference/plugin/active-header-links.md",
                    "/zh/reference/plugin/git.md",
                    "/zh/reference/plugin/palette.md",
                    "/zh/reference/plugin/theme-data.md",
                    "/zh/reference/plugin/toc.md",
                  ],
                },
              ],
            },
          ],
        },
        // page meta
        editLinkText: "在 GitHub 上编辑此页",
        lastUpdatedText: "上次更新",
        contributorsText: "贡献者",
        // custom containers
        tip: "提示",
        warning: "注意",
        danger: "警告",
        // 404 page
        notFound: [
          "这里什么都没有",
          "我们怎么到这来了？",
          "这是一个 404 页面",
          "看起来我们进入了错误的链接",
        ],
        backToHome: "返回首页",
        // a11y
        openInNewWindow: "在新窗口打开",
        toggleDarkMode: "切换夜间模式",
        toggleSidebar: "切换侧边栏",
      },
    },
  }),
  plugins: [
    docsearchPlugin({
      appId: "34YFD9IUQ2",
      apiKey: "9a9058b8655746634e01071411c366b8",
      indexName: "vuepress",
      searchParameters: {
        facetFilters: ["tags:v2"],
      },
      locales: {
        "/zh/": {
          placeholder: "搜索文档",
          translations: {
            button: {
              buttonText: "搜索文档",
              buttonAriaLabel: "搜索文档",
            },
            modal: {
              searchBox: {
                resetButtonTitle: "清除查询条件",
                resetButtonAriaLabel: "清除查询条件",
                cancelButtonText: "取消",
                cancelButtonAriaLabel: "取消",
              },
              startScreen: {
                recentSearchesTitle: "搜索历史",
                noRecentSearchesText: "没有搜索历史",
                saveRecentSearchButtonTitle: "保存至搜索历史",
                removeRecentSearchButtonTitle: "从搜索历史中移除",
                favoriteSearchesTitle: "收藏",
                removeFavoriteSearchButtonTitle: "从收藏中移除",
              },
              errorScreen: {
                titleText: "无法获取结果",
                helpText: "你可能需要检查你的网络连接",
              },
              footer: {
                selectText: "选择",
                navigateText: "切换",
                closeText: "关闭",
                searchByText: "搜索提供者",
              },
              noResultsScreen: {
                noResultsText: "无法找到相关结果",
                suggestedQueryText: "你可以尝试查询",
                reportMissingResultsText: "你认为该查询应该有结果？",
                reportMissingResultsLinkText: "点击反馈",
              },
            },
          },
        },
      },
    }),
    pwaPlugin({
      // 配置项
    }),
  ],
});
