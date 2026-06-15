# CHARLES 夏尔泳装网站 DEMO 静态部署包

这个文件夹可以直接作为静态网站部署，不需要后台、数据库或本地服务器。

## 文件说明

- `index.html`：网站首页
- `styles.css`：页面样式
- `script.js`：轮播、商品筛选、详情弹层等交互
- `assets/`：图片、视频、Logo 等素材

## Vercel

1. 打开 Vercel，新建 Project。
2. 上传这个文件夹，或把这个文件夹内容放进 GitHub 仓库后导入。
3. Framework Preset 选择 `Other`。
4. Build Command 留空。
5. Output Directory 留空或填 `.`。
6. Deploy。

## Netlify

1. 打开 Netlify，选择 Add new site。
2. 直接拖拽上传这个文件夹，或从 GitHub 导入。
3. Build command 留空。
4. Publish directory 填 `.`。
5. Deploy。

## GitHub Pages

1. 新建一个 GitHub 仓库。
2. 把这个文件夹里的所有内容上传到仓库根目录。
3. 进入仓库 Settings -> Pages。
4. Source 选择 `Deploy from a branch`。
5. Branch 选择 `main`，目录选择 `/root`。
6. 保存后等待 GitHub 生成公开链接。

## 注意

- 视频文件较大，首次打开可能需要一点加载时间。
- 如果部署后视频不播放，优先推荐 Vercel 或 Netlify；它们对静态视频资源更友好。
- 不要只上传 `index.html`，必须连同 `assets/`、`styles.css`、`script.js` 一起上传。
