import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        "day-01": resolve(__dirname, "day-01/index.html"),
        "day-02": resolve(__dirname, "day-02/index.html"),
        "day-03": resolve(__dirname, "day-03/index.html"),
        "day-04": resolve(__dirname, "day-04/index.html"),
        "day-05": resolve(__dirname, "day-05/index.html"),
        "day-06": resolve(__dirname, "day-06/index.html"),
        "day-07": resolve(__dirname, "day-07/index.html"),
        "day-08": resolve(__dirname, "day-08/index.html"),
        "day-09": resolve(__dirname, "day-09/index.html"),
        "day-10": resolve(__dirname, "day-10/index.html"),
        "day-11": resolve(__dirname, "day-11/index.html"),
        "day-12": resolve(__dirname, "day-12/index.html"),
        "day-13": resolve(__dirname, "day-13/index.html"),
        "day-14": resolve(__dirname, "day-14/index.html"),
      },
    },
  },
});
