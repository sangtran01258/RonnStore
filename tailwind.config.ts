import type { Config } from "tailwindcss";
const config: Config = { content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"], theme: { extend: { colors: { ink: "#090b10", panel: "#11151d", line: "#252c38", accent: "#a3e635" } } }, plugins: [] };
export default config;