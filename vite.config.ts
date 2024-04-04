import path from "node:path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import jsx from "@vitejs/plugin-vue-jsx";

export default defineConfig((configEnv) => {
  return {
    base: "./",
    resolve: {
      alias: [
        ...Object.entries({
          "@": path.resolve(__dirname, "./src")
        }).map(([key, value]) => {
          return {
            find: key,
            replacement: value
          };
        })
      ],
      extensions: [".js", ".ts", ".jsx", ".tsx", ".json", ".vue"]
    },
    plugins: [
      vue(),
      jsx()
    ]
  };
});
