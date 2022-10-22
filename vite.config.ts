import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

export default ({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  return defineConfig({
    plugins: [
      [vue()],
      // 自动按需导入
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
    ],
    server: {
      hmr: true,
      cors: true,
      open: false,
      port: 8001,
      proxy: {
        "/api": {
          target: env.VITE_APP_BASE_API,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ""),
        },
      },
    },
    resolve: {
      alias: {
        "@": resolve("src"),
      },
    },
    build: {
      // 静态资源合并打包
      rollupOptions: {
        output: {
          chunkFileNames: "static/js/[name]-[hash].js",
          entryFileNames: "static/js/[name]-[hash].js",
          assetFileNames: "static/[ext]/[name]-[hash].[ext]",
        },
      },
    },
  });
};
