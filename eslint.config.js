import pluginVue from "eslint-plugin-vue";
import { defineConfigWithVueTs, vueTsConfigs } from "@vue/eslint-config-typescript";
import stylistic from "@stylistic/eslint-plugin";

// To allow more languages other than `ts` in `.vue` files, uncomment the following lines:
// import { configureVueProject } from "@vue/eslint-config-typescript"
// configureVueProject({ scriptLangs: ["ts", "tsx"] })
// More info at https://github.com/vuejs/eslint-config-typescript/#advanced-setup

export default defineConfigWithVueTs(
  {
    name: "app/files-to-lint",
    files: ["**/*.{ts,mts,tsx,vue}"]
  },

  {
    name: "app/files-to-ignore",
    ignores: ["**/dist/**", "**/dist-ssr/**", "**/dist-electron/**"]
  },

  pluginVue.configs["flat/essential"],
  vueTsConfigs.recommended,


  {
    name: "stylistic",
    ...stylistic.configs["recommended"],
    plugins: {
      "@stylistic": stylistic
    },
    rules: {
      "@stylistic/arrow-parens": ["error", "always"],
      "@stylistic/comma-dangle": ["error", "never"],
      "@stylistic/indent": ["error", 2, { SwitchCase: 0 }],
      "@stylistic/quotes": ["error", "double"],
      "@stylistic/semi": ["error", "always"]
    }
  }
);
