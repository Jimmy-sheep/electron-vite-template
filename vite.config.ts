// @eslint enable
import fs from "node:fs";
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueDevTools from "vite-plugin-vue-devtools";
import electron from "vite-plugin-electron/simple";
import pkg from "./package.json";

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const isServe = command === "serve";
  const isBuild = command === "build";
  const sourcemap = isServe || Boolean(process.env.VSCODE_DEBUG);

  return {
    plugins: [
      vue(),
      vueDevTools(),
      electron({
        main: {
          // Shortcut of `build.lib.entry`
          entry: "electron/main/index.ts",
          onstart: ({ startup }) => {
            if (process.env.VSCODE_DEBUG) {
              console.log("\x1b[36;1m[Startup]\x1b[0m \x1b[32mElectron app ready\x1b[0m");
            } else {
              console.log("Before startup");
              startup();
            }
          },
          vite: {
            build: {
              sourcemap: sourcemap,
              minify: isBuild,
              outDir: "dist-electron/main",
              rollupOptions: {
                // Some third-party Node.js libraries may not be built correctly by Vite, especially `C/C++` addons,
                // we can use `external` to exclude them to ensure they work correctly.
                // Others need to put them in `dependencies` to ensure they are collected into `app.asar` after the app is built.
                // Of course, this is not absolute, just this way is relatively simple. :)
                external: Object.keys("dependencies" in pkg ? pkg.dependencies : {})
              }
            }
          }
        },
        preload: {
          // Shortcut of `build.rollupOptions.input`.
          // Preload scripts may contain Web assets, so use the `build.rollupOptions.input` instead `build.lib.entry`.
          input: "electron/preload/index.ts",
          vite: {
            build: {
              sourcemap: sourcemap,
              minify: isBuild,
              outDir: "dist-electron/preload",
              rollupOptions: {
                external: Object.keys("dependencies" in pkg ? pkg.dependencies : {})
              }
            }
          }
        },
        // Polyfill the Electron and Node.js API for Renderer process.
        // If you want to use Node.js in Renderer process, the `nodeIntegration` needs to be enabled in the Main process.
        // See 👉 https://github.com/electron-vite/vite-plugin-electron-renderer
        renderer: {}
      })
    ],
    server: process.env.VSCODE_DEBUG && (() => {
      const url = new URL(pkg.debug.env.VITE_DEV_SERVER_URL);
      return {
        host: url.hostname,
        port: Number(url.port)
      };
    })(),
    clearScreen: false,
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url))
      }
    }
  };
});
