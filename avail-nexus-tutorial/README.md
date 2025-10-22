# 🌐 Pass the Block: Avail Nexus SDKで実現する統一Web3体験

Avail Nexus SDKチュートリアルシリーズ「Pass the Block」へようこそ！このチュートリアルでは、Nexus SDKをセットアップし、複数のチェーン間で残高を確認する統一Web3体験を構築します。ブロックを積み上げるように、知識を少しずつ積み重ねて、Next.jsとAvailのNexus SDKを使ったシームレスなマルチチェーンアプリケーションを完成させていきましょう。

## 🎯 解決する課題

Web3開発では、ユーザーが単にアプリを使うだけでブロックチェーンの専門家になる必要があります！異なるチェーン上でガス代を管理し、資産を手動でブリッジし、各ネットワークでトークンを承認し、ウォレットを頻繁に切り替える必要があります。もしユーザーがWebブラウザのようにあらゆるブロックチェーンと簡単にやり取りできたら？

チェーンアブストラクションがその解決策であり、Avail Nexus SDKがそれを実現します。インターネットのようなものです。Webサイトがどのサーバーにホストされているかは考えず、シームレスに閲覧するだけです。Nexus SDKも同じように、複雑なマルチチェーン操作をすべてバックグラウンドで処理します。

## 📝 構築するもの

統一Web3アプリケーション：
- 🌐 複数チェーンの残高を1つのインターフェイスで表示
- 🔗 ウォレット接続をシームレスに処理
- 🛡️ 基本的なエラー処理とユーザーフィードバックを管理
- 🎨 Next.jsとTailwind CSSで洗練されたUIを構築
- ⚡ 高度なクロスチェーン操作の基盤を提供

## 🗺️ チュートリアルシリーズ概要

これは4部構成のNexus SDKシリーズの第1部です：

### ✅ Part 1: はじめに（ここから開始）
- Nexus SDKをゼロからセットアップ
- 統一残高表示を構築
- ウォレット接続と基本エラー処理を実装

### 🔜 Part 2: クロスチェーン操作（次は）
- クロスチェーンブリッジを実装
- ネットワーク間で資産をシームレスに移動
- トークン転送の確認とステータス処理

### 🔜 Part 3: ダイレクト転送（近日公開）
- チェーン間でトークンを直接送信
- クロスチェーン決済フローを構築
- 高度なトランザクション処理

### 🔜 Part 4: 本番環境対応（最終章）
- メインネットへ自信を持ってデプロイ
- 高度なエラー監視とアナリティクス
- パフォーマンス最適化とスケーリング

## 🌟 はじめる

1. このリポジトリをクローン：
```bash
git clone https://github.com/availproject/pass-the-block.git
```

2. Nexusチュートリアルプロジェクトに移動：
```bash
cd pass-the-block/avail-nexus-tutorial
```

3. 依存関係をインストール：
```bash
npm install
```

React 19との依存関係の競合が発生した場合：
```bash
npm install --legacy-peer-deps
```

4. ウォレット接続用の環境変数をセットアップします。`.env.local`を作成：
```bash
# WalletConnect Project ID（モバイルウォレット対応に必須）
# https://cloud.walletconnect.com で無料取得
NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID=your_walletconnect_project_id

# オプション：アプリメタデータ
NEXT_PUBLIC_APP_NAME="Nexus SDK Tutorial - Part 1"
NEXT_PUBLIC_APP_DESCRIPTION="統一残高表示でチェーンアブストラクションを学ぶ"
```

5. 開発サーバーを起動：
```bash
npm run dev
```

[http://localhost:3000](http://localhost:3000)にアクセスして、統一Web3体験の構築を始めましょう！

## 📚 学習の進め方

Part 1では、基盤を構築します。複数チェーン間で統一された残高を表示する、シンプルで洗練されたWeb3アプリケーションです。簡単に見えるかもしれませんが、ユーザーがどのブロックチェーンにいてもすべての資産を1箇所で確認できる、重要な基盤となります。

## 🤝 困ったときは

- 📖 [Avail ドキュメント](https://docs.availproject.org)
- 🔧 [Nexus SDK ドキュメント](https://docs.availproject.org/api-reference/avail-nexus-sdk)
- 💬 [コミュニティ Discord](https://discord.gg/availproject)

## ⚖️ ライセンス

このプロジェクトはMITライセンスの下でライセンスされています。詳細は[LICENSE](../../LICENSE)ファイルをご確認ください。

## チュートリアルサイト

- [パート1](https://blog.availproject.org/avail-nexus-sdk-tutorial-part-1-setup-and-balances/)
- [パート2](https://blog.availproject.org/avail-nexus-sdk-tutorial-part-2-cross-chain-transfers/)