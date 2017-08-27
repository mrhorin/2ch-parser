このドキュメントはすべてES6で記述されています。  

動作確認済み
- [２ちゃんねる(2ch.sc)](http://2ch.sc/)
- [したらば掲示板](http://rentalbbs.shitaraba.com/)
- [おーぷん2ちゃんねる](http://open2ch.net/)

# クラス: Board(url)
板を扱うクラスです。コンストラクタには板のURLを渡します。  
これは2ch.scのプログラム技術板のURLを渡している例です。
```javascript
import { Board } from '2ch-parser'

var tech = new Board('http://toro.2ch.sc/tech/')
```
## メンバ変数: url
引数で渡した板のURLが格納されます。

## メンバ変数: subjectUrl
subject.txtを取得するURLが格納されます。

## メンバ変数: threads
fetchThreadsメソッドで取得したスレッド一覧が格納されます。

## メソッド: fetchThreads(callback)
板のスレッド一覧を非同期的に取得します。成功するとコールバック関数が呼び出されます。取得したスレッド一覧はBoardインスタンスのメンバ変数threads内にも格納されます。  
これはスレッド一覧取得成功時に、取得したスレッド一覧をコンソール出力する例です。
```javascript
var tech = new Board('http://toro.2ch.sc/tech/')

tech.fetchThreads((res) => {
  if (res.statusCode == 200) {
    // スレッド一覧を出力
    console.log(res.body)
  }
})
```

## getter: threadsPromise
板のスレッド一覧を取得するPromiseを返します。通常このプロミスはfetchThreadsメソッド内から呼び出されます。取得が成功し、ステータスコード200が返ってきた場合はresolveが呼び出され、取得に失敗した場合はrejectが呼び出されます。

# クラス: Thread(url, title)
スレッドを扱うクラスです。コンストラクタの第一引数にはスレッドのURLを渡します。第二引数にはスレッド名を渡します。この第二引数は省略することができます。  
これは2ch.scのプログラム技術板のスレッドのURLを渡している例です。

```javascript
import { Thread } from '2ch-parser'

const url = 'http://toro.2ch.sc/test/read.cgi/tech/123456/'
const title = '【初心者】プログラム質問スレ'
var tech = new Thread(url, title)
```

## メンバ変数: url
コンストラクタの第一引数で渡したスレッドのURLが格納されます。

## メンバ変数: title
コンストラクタの第二引数で渡したスレッド名が格納されます。  

## メンバ変数: datUrl
書き込み一覧を取得するDATのURLが格納されます。

## メンバ変数: posts
fetchAllPostsまたはfetchNewPostsメソッドで取得した書き込み一覧が格納されます。

## メンバ変数: headers
fetchAllPostsまたはfetchNewPostsメソッドで書き込み一覧を取得した際のレスポンスヘッダが格納されます。これは新着書き込みをRangeリクエストする時に利用します。

## メソッド: fetchAllPosts(callback)
書き込み全件を非同期的に取得します。成功するとコールバック関数が呼び出されます。取得した書き込み一覧はThreadインスタンスのメンバ変数posts内にも格納されます。
```javascript
var tech = new Thread(url, title)

tech.fetchAllPosts((res) => {
  if (res.statusCode == 200) {
    // 書き込み一覧を出力
    console.log(res.body)
  }
})
```

## メソッド: fetchNewPosts(callback)
新着レスの差分を非同期的に取得します。成功するとコールバック関数が呼び出されます。  
ここで新着レスを差分取得する場合はいくつかの注意が必要です。  
  
したらば掲示板の場合、新着レスはメンバ変数postsとの差分で取得されます。この時、書き込みが透明削除されてしまうと、レス番号がずれてしまうことで誤った差分が取得される場合があります。  
  
2ch.sc等のしたらば掲示板以外の一般的な2ch互換掲示板の場合は、新着レスはメンバ変数headers内に格納されたレスポンスヘッダからRangeリクエストをすることで差分取得されます。この時、書き込みが削除される等の原因でcontentLengthがずれてしまうことで誤った差分が取得される場合があります。  

以上のように、新着レスの差分取得は余計なリクエストを行わないで済む反面、特定の条件が揃ってしまうと、うまく差分が取得できない可能性があります。したがって、確実に取得したい場合はfetchAllPostsメソッドを利用することを推奨します。

## getter: toJson
Threadインスタンスのメンバ変数をJSON形式で取得します。

## getter: postsToJson
Threadインスタンスのメンバ変数postsをJSON形式で取得します。

## getter: allPostsPromise
スレッドの書き込み一覧を全件取得するPromiseを返します。通常このプロミスはfetchAllPostsメソッド内から呼び出されます。取得が成功してステータスコード200が返ってきた場合はresolveが呼び出され、取得に失敗した場合はrejectが呼び出されます。

## getter: newPostsPromise
スレッドの書き込み一覧を差分取得するPromiseを返します。通常このプロミスはfetchNewPostsメソッド内から呼び出されます。取得が成功してステータスコード200が返ってきた場合はresolveが呼び出され、取得に失敗した場合はrejectが呼び出されます。
