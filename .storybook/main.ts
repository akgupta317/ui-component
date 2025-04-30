const config = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  // Add this for GitHub Pages
  viteFinal: async (config) => {
    // Use this for GitHub Pages deployment
    if (process.env.NODE_ENV === "production") {
      config.base = "/ui-component/";
    }
    return config;
  },
};

export default config;
