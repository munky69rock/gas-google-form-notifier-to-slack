# Google Form Notifier

## Usage

1. Google Formのメニューからスクリプトエディタを選択
2. スクリプトIDをコピーし、`clasp clone`を実行
  ```sh
  $ clasp clone "1jlfdnYmV0L_...." --rootDir=./src
  $ rm ./src/コード.js
  ```
3. スクリプト編集画面の「ファイル > プロジェクトのプロパティ > スクリプトのプロパティ」に `TITLE`(Slack通知時のタイトル) と `SLACK_URL`(Webhook URL) を設定
4. `clasp push`を実行
  ```sh
  $ clasp push
  ```
5. スクリプト編集画面の「編集 > 現在のプロジェクトのトリガー」をクリック、新しいトリガーを作成する
6. 実行する関数に `onFormSubmit`、イベントの種類を選択に`フォーム送信時`を設定し保存
7. 権限を許可する
