import globals from "globals";
import pluginJs from "@eslint/js";
import pluginVue from "eslint-plugin-vue";


/** @type {import('eslint').Linter.Config[]} */
export default [
  {files: ["**/*.{js,mjs,cjs,vue}"]

  },
  {languageOptions: {
     globals: globals.browser,
     jest: true, // Adaugă Jest ca mediu global
     describe: true,
     it: true,
     expect: true,
     }},
  pluginJs.configs.recommended,
  ...pluginVue.configs["flat/essential"],
  {
    files:["**/*./spec.js"]
  }
];
