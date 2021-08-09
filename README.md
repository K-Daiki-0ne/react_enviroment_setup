# create-react-appを使わないReactの環境設定

当リポジトリではcreate-react-appを使用せず、React環境を作成しました。

### なぜCRA(create-react-app)を使用しないのか

[公式ドキュメント](https://ja.reactjs.org/docs/create-a-new-react-app.html)に記述されているようにcreate react appはreactの学習としては快適な環境を作成しますが、実務で使用するには基幹となるwebpackの設定などが困難となってしまうので自身でセット
アップができるように手動での環境構築を行いました。

当リポジトリは[動画](https://www.youtube.com/watch?v=Elpu7CIuqjY&list=PLC3y8-rFHvwiWPS2RO3BKotLRfgg_8WEo)のハンズオンで作成を行いました。

※Jestで使用したテストに関しては動画の内容に含まれていません。

### 使用技術
- webpack
- babel
- typescript
- eslint
- prettier
- husky
- jest

### 環境の設定とルールについて

VSCodeの設定は **.vscode** ディレクトリの **setting.json** に記述しています。

gitに関するルールは **docs** ディレクトリの **git_rule.md** に記述しています。
