# React + TypeScript + Vite

pnpm create vite my-vue-app --template react-swc-ts

## SWC 是什么？

SWC（Speedy Web Compiler）是一个高性能的编译器，用于将现代 JavaScript 和 TypeScript 编译成兼容旧版本浏览器或 Node.js 环境的代码。它的主要特点是速度快，主要用来替代 Babel，尤其是在大型项目或需要频繁重编译的场景下表现非常出色。SWC 使用 Rust 编写，相比于用 JavaScript 编写的编译器（如 Babel），其性能更高。由于其基于 Rust 的实现，SWC 在处理大规模项目时能显著缩短编译时间。它已经被应用在一些知名项目中，比如 Next.js 就采用了 SWC 来替代 Babel 作为默认编译器。

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
