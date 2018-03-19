# JsClass
クラス

## 処理
クラスで"helloworld"と出力します。

## コード
```
(function() {
    'use strict'

    class Greeting {
        constructor(word) {
            this.msg = word;
        }

        helloworld() {
            console.log(this.msg);
        }
    }

    var gree = new Greeting("hello world");
    gree.helloworld();

})();
```

## 出力結果  
```
hello world
```
  
## 開発環境
| 開発ツール |  |
|:-|:-|
| OS | Windows10 |
| 仮想化ソフト | Oracle VM VirtualBox 5.2 |
| 構築ソフト | Vagrant 2.0.2 |
| 仮想化上OS | CentOS 6.9 |
| SSHクライアント | PuTTY 0.6.8 |
| FTPクライアント | Cyberduck 6.3.5 |
| エディタ | Atom 1.24.0 |
| 開発言語 | Java Script |
| Js環境 | Node.js 8.10.0 |
