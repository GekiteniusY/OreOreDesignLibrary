import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./layout/**/*.{js,ts,jsx,tsx,mdx}",
    "./component/**/*.{js,ts,jsx,tsx,mdx}", // リッチコンポーネント
    "./atomic_component/**/*.{js,ts,jsx,tsx,mdx}", // プレーンコンポーネント
  ],
  theme: {
    extend: {
      // colorsはbg-から始まる
      // background:の場合はbg-background-となる
      colors: {
        // TODO: 配色を作成する
        background: {
          blue: "#1fb6ff",
        },
        // blue: "#1fb6ff",
        // purple: "#7e5bef",
        // pink: "#ff49db",
        // orange: "#ff7849",
        // green: "#13ce66",
        // yellow: "#ffc82c",
        // "gray-dark": "#273444",
        // gray: "#8492a6",
        // "gray-light": "#d3dce6",
      },
      backgroundImage: {
        // TODO: add explanation
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        // TODO: add explanation
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        "slide-top":
          "slide-top 0.8s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
      },
      keyframes: {
        "slide-top": {
          "0%": {
            transform: "translateY(0)",
          },
          to: {
            transform: "translateY(-10px)",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
