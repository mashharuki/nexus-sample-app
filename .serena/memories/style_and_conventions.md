# スタイルと規約
- TypeScript は strict モードと bundler モジュール解決、パスエイリアス `@/*`、React JSX ランタイムを使用します。
- ESLint: TanStack 提供の `@tanstack/eslint-config` を継承し、React と TypeScript のベストプラクティスおよび TanStack 固有ルールを適用します。
- Prettier: セミコロン無し、シングルクォート、末尾カンマあり。整形する際は `bun run format` の実行を推奨。
- スタイリング: Tailwind CSS 4 と `styles.css` を利用し、コンポーネントは Radix プリミティブと class-variance ヘルパーを活用します。
- ルーティング: `src/routes` 配下に生成されるファイルベースのルートを編集し、`routeTree.gen.ts` を手動で変更しないようにします。
