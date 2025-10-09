# タスク完了チェックリスト
- 初回実行前に `bun install` で依存関係をインストールしておきます。
- 変更を渡す前に `bun run test` と `bun run lint` を実行し、Prettier の指摘があれば `bun run format` を使います。
- 大きな変更時は `bun run build` を実行してビルドが通ることを確認します。
- Prettier と ESLint の修正を自動適用したい場合のみ `bun run check` を使用します。
- 新しい環境変数を追加したら `.env.example` に追記し、生成ファイル (`routeTree.gen.ts`) の整合性を保つようにします。
