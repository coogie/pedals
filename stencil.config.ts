import { Config } from "@stencil/core";
import { sass } from "@stencil/sass";

// https://stenciljs.com/docs/config

export const config: Config = {
  globalStyle: "src/global/app.css",
  globalScript: "src/global/app.ts",
  plugins: [sass()],
  outputTargets: [
    {
      type: "www",
      dir: "docs",
      buildDir: "",
      baseUrl: "https://coog.ie/",
      serviceWorker: null
    }
  ]
};
