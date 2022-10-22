# Vue 3 + TypeScript + Vite

整合了基本依赖（vue-router、pinia、axios、element-plus）的骨架，便于个人快速开发项目。

## 基本指令

```
// 安装
pnpm install

// 运行
pnpm run dev

// 打包
pnpm run build

```

## commit message 规范

```
pnpm run commit
```

| Type  | 作用  |
| ------------ | ------------ |
| feat  |  新增特性 |
| fix  |  修复 bug |
| docs  |  修改文档 |
| style  |  代码格式修改 |
| refactor  |  代码重构 |
| perf  |  改善性能 |
| test  |  测试 |
| build  |  变更项目构建或外部依赖（例如 scopes: webpack、gulp、npm等） |
| ci  |  更改持续集成软件的配置文件和 package.json 中的 scripts 命令 |
| chore  |  变更构建流程或辅助工具(比如更改测试环境) |
|revert|代码回退|


## vscode 插件

* Vue Language Features

* Prettier - Code formatter

* Path Intellisense

```
"path-intellisense.mappings": {
    "@": "${workspaceRoot}/src",
    "/": "${workspaceRoot}/"
},
```

* npm Intellisense
