
export default [
  {
    files: ["public/js/**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "script",
      
globals: {
  document: "readonly",
  window: "readonly",
  XMLHttpRequest: "readonly",
  localStorage: "readonly",
  md5: "readonly",
  alert: "readonly",
  console: "readonly",
  module: "readonly"
},
    },
    rules: {
      "no-undef": "error",
      "no-unused-vars": "warn"
    }
  }
];
