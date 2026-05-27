import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  docsSidebar: [
    {
      type: "doc",
      id: "introduction",
      label: "Introduction",
    },
    {
      type: "doc",
      id: "authentication",
      label: "Authentication",
    },
    {
      type: "doc",
      id: "rate-limiting",
      label: "Rate Limiting",
    },
    {
      type: "doc",
      id: "changelog",
      label: "Changelog",
    },
    {
      type: "category",
      label: "API Reference",
      collapsed: false,
      items: [
        "api-reference/countries",
        "api-reference/holidays",
        "api-reference/check",
        "api-reference/check-workday",
        "api-reference/calculate-workdays",
        "api-reference/calculate-diff",
        "api-reference/long-weekends",
        "api-reference/long-weekends-optimize",
        "api-reference/calendar",
        "api-reference/year-info",
      ],
    },
    {
      type: "category",
      label: "Guides",
      collapsed: false,
      items: [
        "guides/nextjs",
        "guides/python",
        "guides/workdays",
      ],
    },
  ],
};

export default sidebars;
