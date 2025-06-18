# フェンリル株式会社 インターンシップ プログラム課題

## プロジェクト概要

括弧の対応を判定する課題実装とテストケースをまとめたもの

## ディレクトリ構成

```plaintext
.
├── src
│   └── main.ts        # 課題の実装
└── test
    └── main.test.ts   # テストケース
```

## ビルド / 実行

TypeScript をコンパイルして `dist/` に出力する

```bash
npx tsc
```

コマンドラインから isValid を実行

```bash
node dist/src/main.js "()[{()}]"
```

## テスト

Jest を用いたテストを実行

```bash
npm test
```
