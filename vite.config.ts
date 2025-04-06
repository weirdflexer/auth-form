import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";

// https://vite.dev/config/
export default defineConfig({
  base: "/auth-form/",
  plugins: [
    react(),
    createSvgIconsPlugin({
      iconDirs: [path.resolve(process.cwd(), "public/icons")],
      symbolId: "icon-[dir]-[name]",
      customDomId: "svg-sprite",
      svgoOptions: {
        plugins: [
          {
            name: "convertColors",
            params: {
              currentColor: true,
            },
          },
        ],
      },
    }),
  ],
});
