# Gitのルールについて

### 禁止コマンドについて

**main** branchへの**push**は原則禁止とする。

### 設定ファイルについて

macOSを前提とした記述です。

まずはpushに関する設定ファイルを作成します。

```bash:
touch .git/hooks/pre-push
```

次に編集を行います。(当環境ではemacsで編集を行います)
```shell
emacs .git/hooks/pre-push
```

下記コードを貼り付けて保存してください。
```bash
#!/bin/bash

while read local_ref local_sha1 remote_ref remote_sha1
do
  if [[ "${remote_ref##refs/heads/}" = "main" ]]; then
    echo "Do not push to master branch!!!"
    exit 1
  fi
done
```

もしmain branchにpushできてしまう場合は実行権限を付与します。
```bash
cd .git/hooks && chmod a+x pre-push
```