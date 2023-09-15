import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontSize: {
      "title": '108px'
    }
  },
  plugins: [require("daisyui")],
} satisfies Config;
