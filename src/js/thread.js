import request from 'superagent'
require('superagent-charset')(request)

import UrlParser from 'js/url_parser'
import Post from 'js/post.js'

// スレッド
module.exports = class Thread{

  constructor(url, title=""){
    this.title = title
    this.url = url
    this.datUrl = UrlParser.getDatUrl(this.url)
    this.headers = {
      lastMofied: "",
      contentLength: 0,
    }
    this.posts = []
  }

  // 全レスを取得
  fetchAllPosts(callback=()=>{}){
    this.allPostsPromise.then((res)=>{
      callback(res)
    }).catch((res)=>{
      callback(res)
    })
  }

  // 新着レスを取得
  fetchNewPosts(callback=()=>{}){
    this.newPostsPromise.then((res)=>{
      callback(res)
    }).catch((res)=>{
      callback(res)
    })
  }

  // 全レスを取得するプロミスを返す
  get allPostsPromise(){
    return new Promise((resolve, reject)=>{
      request('GET', this.datUrl, { timeout: 15000 }).done((res)=>{
        res.url = this.datUrl
        if(res.statusCode==200){
          // レスポンスヘッダ保存
          this.headers.lastMofied = res.headers['last-modified']
          this.headers.contentLength = Number(res.headers['content-length'])
          this.posts = res.body = PostParser.parseDat(res.body, this.url)
          this._setPostsNo()
          this._setTitle()
          resolve(res)
        }else{
          res.body = []
          resolve(res)
        }
      })
    })
  }

  // 新着レスを取得するプロミスを返す
  get newPostsPromise(){
    return UrlParser.isShitaraba(this.url) ? (
      this._getNewPostsFromShitarabaPromise()
    ) : (
      this._getNewPostsByRangePromise()
    )
  }

  // 新着レスを取得するプロミスを返す(したらば用)
  _getNewPostsFromShitarabaPromise(){
    let reqUrl = this.datUrl
    // 最後のレス番+1からレス取得するURL
    if(this.posts.length>0){
      reqUrl = `${reqUrl}/${this.posts[this.posts.length-1].no + 1}-n`
    }
    return new Promise((resolve, reject) => {
      request
        .get(reqUrl)
        .charset('euc-jp')
        .timeout(2000)
        .then((err, res) => {
          if (err) {
            reject(err)
          } else {
            if(res.statusCode==200 && res.text.length>0){
              this.headers.lastMofied = res.headers['last-modified']
              this.headers.contentLength += Number(res.headers['content-length'])
              res.body = this._parseDat(res.text)
              this.posts = this.posts.concat(res.body)
              this._setPostsNo()
              this._setTitle()
              resolve(res)
            }else if(res.statusCode == 304 || res.body.byteLength < 1){
              // 新着レスなし
              res.body = []
              resolve(res)
            }else{
              res.body = []
              reject(res)
            }
          }
        }, (res)=>{ reject(res) })
    })
  }

  // 新着レスを取得するプロミスを返す(Rangeリクエスト用)
  _getNewPostsByRangePromise(){
    return new Promise((resolve, reject) => {
      request
        .get(this.datUrl)
        .charset('shift_jis')
        .timeout(2000)
        .set({ 'If-Modified-Since': this.headers.lastMofied, 'Range': `bytes=${this.headers.contentLength}-` })
        .end((err, res) => {
          if (err) {
            reject(err)
          } else {
            switch (res.statusCode) {
              case 206:
                // Partial Content  
                this.headers.lastMofied = res.headers['last-modified']
                this.headers.contentLength += Number(res.headers['content-length'])
                res.body = this._parseDat(res.text)
                this.posts = this.posts.concat(res.body)
                this._setPostsNo()
                this._setTitle()
                resolve(res)
                break
              case 304:
                // Not Modified
                res.body = []
                resolve(res)
                break
              default:
                res.body = []
                reject(res)
                break
             }
          }
        })
    })
  }

  // datファイルをパースしてPostの配列を返す  
  _parseDat(dat) {
    return dat.split("\n").map((line)=>{
      line = line.split("<>")
      // 空行のとき
      if(!line[0]&&!line[1]&&!line[2]) return null
      if(UrlParser.isShitaraba(this.url)){
        // したらば処理
        return new Post({
          no: line[0],
          name: line[1],
          mail: line[2],
          date: line[3],
          body: line[4],
          title: line[5],
          id: line[6]
        })
      } else {
        // 2ch互換掲示板全般処理
        let id = line[2]
        if (id.match(/ID:.+/)) {
          id = id.match(/ID:.+/)[0]
        } else if (id.match(/BE:.+/)) {
          id = id.match(/BE:.+/)[0]
        }
        return new Post({
          no: "",
          name: line[0],
          mail: line[1],
          date: line[2].replace(/\sID:.+/, "").replace(/\sBE:.+/, ""),
          body: line[3],
          title: line[4],
          id: id
        })
      }
    }).filter((post)=>{
      // 空行を削除
      return (post)
    })
  }

  // レス番を付与
  _setPostsNo(){
    if(!UrlParser.isShitaraba(this.url)){
      this.posts = this.posts.map((post, index)=>{
        post.no = index
        return post
      })
    }
  }

  // スレッド名をセット
  _setTitle(){
    if(this.posts.length>0) this.title = this.posts[0].title
  }

}
