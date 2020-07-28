// const routes = import("./src/router");

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/styles/styles.scss";`,
      },
    },
  },
  // pluginOptions: {
  //   sitemap: {
  //     // baseURL: "https://tvshows-vue-ts-app.netlify.app/",
  //     routes,
  //     outputDir: "/temp/sitemap",
  //   },
  // },
};
