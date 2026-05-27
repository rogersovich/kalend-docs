import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "Kalend",
  tagline: "Indonesia & Malaysia public holiday API",
  favicon: "img/favicon.ico",
  noIndex: false,

  url: "https://docs.kalend.id",
  baseUrl: "/",

  organizationName: "kalend",
  projectName: "kalend-docs",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          editUrl: "https://github.com/kalend/kalend/tree/main/app-docs/",
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: "img/kalend-social.png",
    colorMode: {
      defaultMode: "light",
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: "Kalend",
      logo: {
        alt: "Kalend Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "docsSidebar",
          position: "left",
          label: "Docs",
        },
        {
          href: "https://github.com/kalend/kalend",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            { label: "Introduction", to: "/docs/introduction" },
            { label: "Authentication", to: "/docs/authentication" },
            { label: "API Reference", to: "/docs/api-reference/countries" },
          ],
        },
        {
          title: "More",
          items: [
            { label: "Dashboard", href: "https://kalend.id/dashboard" },
            { label: "GitHub", href: "https://github.com/kalend/kalend" },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Kalend.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ["bash", "json", "python", "typescript"],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
