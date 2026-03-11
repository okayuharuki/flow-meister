# flow-meister

Next.js と TypeScript を用いた Web アプリケーションです。  
microCMS や WordPress から記事データを取得し、動的に表示します。

---

## 🌐 デモ
https://flow-meister-jet-seven.vercel.app/

---

## 📌 概要

flow-meister は以下の機能を備えた記事管理・表示アプリケーションです。

- microCMS から「お知らせ」記事を取得・表示
- WordPress REST API から記事データ取得
- カテゴリ・タグによる記事分類
- レスポンシブ対応 UI（Tailwind CSS / CSS Modules）

---

## 🛠 使用技術

- Next.js
- TypeScript
- microCMS
- WordPress REST API
- Tailwind CSS
- CSS Modules

---

## 📂 ディレクトリ構成

- app/ ページ・コンポーネント
- components/ UI コンポーネント
- lib/ API クライアント
- types/ 型定義
- utils/ ユーティリティ関数
- public/ 静的ファイル

---

## 🚀 セットアップ

```bash
# リポジトリをクローン
git clone https://github.com/okayuharuki/flow-meister.git
cd flow-meister

# 依存パッケージをインストール
npm install

# 開発サーバー起動
npm run dev
🔑 環境変数（.env）
以下を設定してください：

コード
MICROCMS_API_KEY=xxxx
MICROCMS_ENDPOINT=xxxx
WORDPRESS_API_URL=xxxx
