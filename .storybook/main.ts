const config = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    // other addons...
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  // Modified configuration for GitHub Pages
  viteFinal: async (config, { configType }) => {
    // Only update base path for production builds
    if (configType === "PRODUCTION") {
      // Set the base path for GitHub Pages
      config.base = "/ui-component/";

      // Ensure assets are properly resolved
      if (!config.build) config.build = {};
      config.build.assetsDir = "assets";

      // Improve chunk loading strategy
      if (!config.build.rollupOptions) config.build.rollupOptions = {};
      if (!config.build.rollupOptions.output)
        config.build.rollupOptions.output = {};

      config.build.rollupOptions.output = {
        ...config.build.rollupOptions.output,
        manualChunks: undefined, // Let Vite handle chunking
        chunkFileNames: "assets/[name]-[hash].js",
        entryFileNames: "assets/[name]-[hash].js",
        assetFileNames: "assets/[name]-[hash].[ext]",
      };
    }

    return config;
  },
};

export default config;
