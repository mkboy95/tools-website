# 在线工具集

一个包含多种实用工具的在线网站，部署在腾讯 EdgeOne。

## 功能特性

- 🎨 **封面设计工具** - 快速创建精美封面图片
- 🖼️ **短视频去水印** - 轻松去除短视频水印
- 🚀 更多工具持续更新中...

## 项目结构

```
tools/
├── index.html              # 首页
├── cover-tool/             # 封面设计工具 (Mini-Cover)
├── watermark-tool/         # 去水印工具 (shortvideo-html)
├── .github/
│   └── workflows/
│       └── deploy.yml      # GitHub Actions 自动部署配置
└── README.md
```

## 本地开发

1. 克隆项目
2. 进入 cover-tool 目录安装依赖并构建：
   ```bash
   cd cover-tool
   npm install
   npm run build
   ```
3. 直接打开 index.html 即可预览

## 部署到 EdgeOne

### 方法一：手动部署

1. 将整个项目文件夹上传到 EdgeOne 静态托管
2. 确保 index.html 是入口文件

### 方法二：GitHub Actions 自动部署

1. 将代码推送到 GitHub 仓库
2. GitHub Actions 会自动触发构建
3. 下载构建产物并部署到 EdgeOne

### 方法三：EdgeOne Git 自动部署（推荐）

EdgeOne 支持直接绑定 GitHub 仓库实现自动部署：

1. 在 EdgeOne 控制台创建静态站点
2. 绑定你的 GitHub 仓库
3. 配置构建命令：
   - 安装依赖：`cd cover-tool && npm install`
   - 构建：`cd cover-tool && npm run build`
   - 输出目录：`.`
4. 开启自动部署，每次推送代码都会自动构建和部署

## 添加新工具

1. 在项目根目录创建新文件夹，例如 `new-tool/`
2. 将工具代码放入该文件夹
3. 在 `index.html` 中添加新的工具卡片链接
4. 如果需要构建，在 `.github/workflows/deploy.yml` 中添加构建步骤
5. 推送到 GitHub，EdgeOne 会自动部署

## 技术栈

- 首页：纯 HTML/CSS
- 封面设计工具：Vue 3 + Vite + Tailwind CSS
- 去水印工具：纯 HTML/JS
- 部署：腾讯 EdgeOne

## 许可证

MIT License
