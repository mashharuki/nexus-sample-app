# プロジェクト概要
- 目的: Avail Nexus ウィジェットと SDK の使い方を示すサンプルアプリケーションで、TanStack React スターターから構築されています。
- 技術スタック: React 19 と TypeScript、Vite 6 バンドラー、TanStack Router & Query、Tailwind CSS 4、Radix UI コンポーネント、ウォレット連携のための RainbowKit/Wagmi、ツールチェーンとして Prettier/ESLint、テストは Vitest。パッケージマネージャーは Bun を使用。
- 構成: `sample-app/` にアプリ本体があり、`src/` は `routes/` (TanStack のファイルベースルーティング)、`components/`、`providers/`、`lib/`、エントリ `main.tsx` に分割。生成されたルーター定義は `routeTree.gen.ts` に配置され、静的アセットは `public/`、ビルド成果物は `dist/`。リポジトリ直下には主にプロジェクト文書と Serena 設定が含まれます。
