module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    jsx: true,
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
  extends: [
    "react-app",
    "react-app/jest",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/jsx-runtime",
    "prettier"
  ],
  rules: {
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/no-var-requires": 0,
  },
  overrides: [
    {
      files: ["config/*.js"],
    },
  ],
};