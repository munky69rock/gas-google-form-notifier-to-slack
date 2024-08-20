# Google Form Notifier

## Setup

```sh
npm install
```

## Usage

1. claspにログイン

   ```sh
   npm run login
   ```

2. Google Formのメニューからスクリプトエディタを選択
3. スクリプトIDをコピーし、プロジェクトをcloneする

   ```sh
   npm run clone "1jlfdnYmV0L_...."
   rm ./src/コード.js
   mv ./src/.clasp.json .
   ```

4. スクリプト編集画面の「ファイル > プロジェクトのプロパティ > スクリプトのプロパティ」に `TITLE`(Slack通知時のタイトル) と `SLACK_URL`(Webhook URL) を設定
5. コードをpush

   ```sh
   npm run push
   ```

6. スクリプト編集画面の「編集 > 現在のプロジェクトのトリガー」をクリック、新しいトリガーを作成する
7. 実行する関数に `onFormSubmit`、イベントの種類を選択に`フォーム送信時`を設定し保存
8. 権限を許可する
