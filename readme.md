# SlackにページとURLを共有する拡張機能

# 使い方
1. まず、slackのIncoming Webhookを好きなチャンネルに導入します。
    - slack botの説明は以下の資料が詳しい↓

        [Slack Botの種類と大まかな作り方](https://qiita.com/namutaka/items/233a83100c94af033575)

2. このページの下にあるコードをパクります

3. 拡張機能に「パッケージ化されていない拡張機能を読み込む」としてディレクトリを選択して読み込みます(リリースは特にしていないのでローカルファイルを勝手に読み込むことになります)

4. 拡張機能の詳細(タブのアイコンを右クリックすると行けます)から、拡張機能のオプション画面に行きます。

5. オプション画面からwebhookURLを入力して保存します。

6. タブのアイコンをクリックしてコメントの部分にコメントを入力(しなくてもよい)して、slackに送信するをクリックします。

7. 送信されているはずで、されていなかったらそれはバグなので直してね

## コード

## 拡張機能の作り方で参考になるサイトなど

拡張機能はオプションとポップアップとコンテンツの三つに分かれている。そこら辺の初期の部分の話が知りたい人は以下。

[Chrome拡張の開発方法まとめ　その1：概念編](https://qiita.com/k7a/items/26d7a22233ecdf48fed8#chromestorageapi%E3%81%A8option-page)

[Chrome Extension の作り方 (その1: 3つの世界)](https://qiita.com/sakaimo/items/416f36db1aa982d8d00c)

※どちらもその1となっていますが、上のやつは続きがありません。また、下のやつも続きはあるのですがJQueryを死ぬほど使っているのでお勧めはしません。

拡張機能作りたい方は以下(大体まとまっている)

[Chrome Extension作成に役立つURL集](https://qiita.com/nori0__/items/fc26b1e31ecf03b5f187)

拡張機能のマニフェストファイルの書き方に関して知りたい人は以下

[Chrome 拡張機能のマニフェストファイルの書き方](https://qiita.com/mdstoy/items/9866544e37987337dc79)

※今回のマニフェストファイルは以前、拡張機能を作った時の使いまわしなので冗長であることがわかると思います。

## その他

デザインなどはおいおい。

入力後テキストの削除などが行われないのもおいおい。



