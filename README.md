# Nuxt3 學習直播班專案

本專案為 Nuxt3 學習直播班的課程內容，旨在透過實作專案的方式，引導參與者了解 Nuxt3 的核心概念與開發技巧。透過本專案，將學習如何建立 Nuxt3 應用程式、管理路由、組織資料、與後端 API 串接等，能夠快速上手並應用於實際的開發中。

## 專案介紹

這份專案包含多個練習，涵蓋了 Nuxt3 的各種功能模組，並透過案例展示如何使用 Nuxt3 開發 SPA 和 SSR 應用程式。本專案的結構清晰，並對關鍵步驟進行詳細說明，適合初學者以及有 Vue 基礎的開發者深入學習。

## 如何使用

- Clone 專案
  - ``git clone https://github.com/hakuei0115/Nuxt_testing``
  - ``cd Nuxt_testing``
- 安裝依賴套件
  - ``npm install``
- 啟動本地開發伺服器
  - ``num run dev``

## 專案結構

```plaintext
├── assets/         # 靜態資源，例如圖片、CSS 等
├── components/     # Vue 元件
├── composables/    # 可重複使用的邏輯功能
├── layouts/        # 頁面共用的佈局
├── pages/          # 頁面組件，對應自動生成的路由
├── plugins/        # 外部插件的初始化
├── public/         # 靜態檔案
├── nuxt.config.ts  # Nuxt 設定檔
└── README.md       # 專案說明文件
```

## 主要學習內容

### useFetch 與 useAsyncData (11/20 完成)

- 學習如何使用 useFetch 與 useAsyncData，包括帶入參數和使用回傳參數的方法。
- 理解這兩個方法都是基於 $fetch 進行封裝。

### Day 9 $fetch 與 ofetch (11/14 完成)

- 理解 Nuxt3 基於 ofetch 套件提供了 $fetch 方法
- 學習在 Nuxt3 中使用 $fetch 進行 API 請求
- 了解 $fetch 使用的注意事項

### Day 8 動態路由與 404 錯誤頁面處理 (11/13 完成)

- 學習建立並使用動態路由
- 學習如何配置 404 錯誤頁面

### Day 7 嵌套式路由、 useRouter & useRoute (11/13 完成)

- 學習建立並使用嵌套式路由
- 學習在 Nuxt3 使用 useRouter 和 useRoute

### Day 6 NuxtLink 與 路由基礎配置 (11/12 完成)

- 學習使用 NuxtLink 實作頁面導航
- 學習 Nuxt3 路由系統的基礎配置

### Day 5 使用指令建立 Composables (11/11 完成)

- 學習使用指令建立 Composables
- 學習透過 Auto Imports 使用 Composables

### Day 4 使用指令建立元件 (11/11 完成)

- 學習使用指令建立元件
- 學習透過 Auto Imports 使用元件

### Day 3 使用指令建立 Layouts (11/11 完成)

- 了解 Nuxt3 中的 Layouts 概念
- 使用 Nuxt3 指令建立 Layout
- 在頁面中使用指定的 Layout

### Day 2 Nuxt3 專案引入 CSS 樣式 (11/5 完成)

- 在 Nuxt3 中加入並使用 CSS 預處理器（SCSS）
- 在 Nuxt3 中設定全域共用樣式
- 在 Nuxt3 中設定全域共用變數

### Day 1 起手式 : 建立 Nuxt3 專案 (11/5 完成)

- 建立 Nuxt3 專案
- Nuxt 基礎指令
- 新增頁面
