# 打包

## 创建项目

命令**一致**

```pnpm
pnpm create vite
```

创建出的**项目中的`index.html`都会在根目录**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite + React + TS</title>
  </head>
  <body>
    <div id="root"></div>
    <!-- vue: <div id="app"></div> -->
    <!-- 虽然都没什么区别，但是新创建出来这里就是不同的，两框架的习惯不一样 -->
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

## build

因为都是使用 `vite` 进行打包，所以基本**一致**

## docs

因为都是使用 `vite`, 所以进一步默认使用 `vitepress` 构建文档的方式也基本**一致**
