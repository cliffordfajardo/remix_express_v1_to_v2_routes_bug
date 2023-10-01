import { createRoutesFromFolders } from '@remix-run/v1-route-convention';

/** @type {import('@remix-run/dev').AppConfig} */
export default {
  ignoredRouteFiles: ["**/.*"],
  serverModuleFormat: "esm",
  // appDirectory: "app",
  // assetsBuildDirectory: "public/build",
  // publicPath: "/build/",
  // serverBuildPath: "build/index.js",
  routes: (defineRoutes) => {
    // `createRoutesFromFolders` will create routes for all files in the routes directory using the same default conventions as Remix v1.
    return createRoutesFromFolders(defineRoutes, {
      // If you're already using `ignoredRouteFiles` in your Remix config, you can move them to `ignoredFilePatterns` in the plugin's options.
      ignoredFilePatterns: ["**/.*", "**/*.css"],
    });
  },
};
