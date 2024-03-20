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
      backgroundImage: {
        // TODO: add explanation
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        // TODO: add explanation
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        "slide-top": "slide-top 0.8s cubic-bezier(0.250, 0.460, 0.450, 0.940)",
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
