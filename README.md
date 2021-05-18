# create-react-appを使わないReactの環境設定

当リポジトリではcreate-react-appを使用せず、React環境を作成しました。

### なぜCRA(create-react-app)を使用しないのか

[公式ドキュメント](https://ja.reactjs.org/docs/create-a-new-react-app.html)に記述されているようにcreate react appはreactの学習としては快適な環境を作成しますが、実務で使用するには基幹となるwebpackの設定など困難となってしまうので自身でセット
アップができるように手動での環境構築を行いました。

### 使用技術
- webpack
- babel
- typescript

### 環境構築詳細

環境構築の詳細については後に記述を行う。

### 環境の設定とルールについて

VSCodeの設定は **.vscode** ディレクトリの **setting.json** に記述しています。

gitに関するルールは **docs** ディレクトリの **git_rule.md** に記述しています。