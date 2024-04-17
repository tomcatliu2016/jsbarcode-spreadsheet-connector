# Google SpreadSheet用バーコードジェネレーター
[en](README.ja.md) &nbsp;&nbsp;&nbsp;&nbsp; [中文](README.zh.md)<br>
Google SpreadSheetは、非常に実用的なオンラインスプレッドシートシステムです。<br>
しかし、バーコード生成に関しては、サポートが非常に限られており、現在入手可能なものは、Libre Barcodeフォントを利用した簡単なバーコード生成のみです。<br>
この方法で生成されるバーコードは、たとえばEAN/JANコードなど、理想的ではなく、対応するフォーマットも全面的ではありません。
より広範なフォーマットのバーコード生成をサポートするため、成熟したjsライブラリ - [JsBarcode](https://github.com/lindell/JsBarcode "JsBarcodeはJavaScriptで書かれたバーコードジェネレーターです")を利用しました。<br>
JsBarcodeの基本機能を利用してバーコードデータを生成し、Google SpreadSheetのSparkline関数を使用してバーコードグラフィックを描画します。この描画アプローチは[このライブラリ](https://github.com/EszopiCoder/google-barcode-fx-library "Google Sheets用バーコード関数ライブラリ")に触発されました。<br>
しかし、Sparkline関数の描画機能には限界があり、テキストや線の長短などを描画することはできません。これは欠点です。

また、このライブラリは[clasp](https://github.com/google/clasp)を利用してGAS(Google Apps Script)のローカル開発を行っています。詳細は関連ドキュメントをご覧ください。

# 基本的な利用手順：
## 1. コードをクローンする
```shell
git clone https://github.com/tomcatliu2016/jsbarcode-spreadsheet-connector
```
## 2. 依存ライブラリをインストールする
```shell
cd jsbarcode-spreadsheet-connector && npm install
```
## 3. claspでログイン
```shell
clasp login
```
## 4. GASプロジェクトを作成するか、既存のプロジェクトのScript IDを.clasp.jsonに設定
```shell
clasp create --type sheets --title "JsBarcodeSpreadSheetConnector" --rootDir ./dist
```
## 5. ローカルでビルドする
```shell
npm run build
```
## 6. コンパイルしたコードをGASのサーバーにプッシュする
```shell
clasp push
```
## 7. ビルドとプッシュのステップを一気に完了する
```shell
npm run deploy
```
## 8. Google SpreadSheetを開く
```shell
clasp open
```
## 9. Google SpreadSheetでカスタム関数を使用する
```shell
=sparkline(EAN13(A1), BarcodeOpt())
```

# サンプル画像
[![画像のように](images/samples.png)]