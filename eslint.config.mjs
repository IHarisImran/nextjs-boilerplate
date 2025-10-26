import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url),
  eslintConfig = [...nextCoreWebVitals, { ignores: ["node_modules/**", ".next/**", "out/**", "build/**", "next-env.d.ts"] }];

export default eslintConfig;
