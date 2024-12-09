import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        "day-01": resolve(__dirname, "day-01/index.html"),
        "day-02": resolve(__dirname, "day-02/index.html"),
      },
    },
  },
});
