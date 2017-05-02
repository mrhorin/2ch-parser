import request from 'then-request'

import UrlParser from 'js/url_parser'
import PostParser from 'js/post_parser'
import Decoder from 'js/decoder'

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
    return new Promise((resolve, reject)=>{
      request('GET', reqUrl, { 'timeout': 15000 }).done((res)=>{
        res.url = reqUrl
        if(res.statusCode==200 && res.body.byteLength>0){
          this.headers.lastMofied = res.headers['last-modified']
          this.headers.contentLength += Number(res.headers['content-length'])
          res.body = PostParser.parseDat(res.body, this.url)
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
      })
    })
  }

  // 新着レスを取得するプロミスを返す(Rangeリクエスト用)
  _getNewPostsByRangePromise(){
    return new Promise((resolve, reject)=>{
      request('GET', this.datUrl, {
        'timeout': 15000,
        'headers': {
          'If-Modified-Since': this.headers.lastMofied,
          'Range': `bytes=${this.headers.contentLength}-`
        }
      }).done((res)=>{
        res.url = this.datUrl
        // Partial Contentが返ってきたとき
        if(res.statusCode==206){
          this.headers.lastMofied = res.headers['last-modified']
          this.headers.contentLength += Number(res.headers['content-length'])
          res.body = PostParser.parseDat(res.body, this.url)
          this.posts = this.posts.concat(res.body)
          this._setPostsNo()
          this._setTitle()
          resolve(res)
        }else if (res.statusCode == 304){
          // 新着レスなし
          res.body = []
          resolve(res)
        }else{
          res.body = []
          reject(res)
        }
      })
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
