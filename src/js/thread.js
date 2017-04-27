import request from 'sync-request'

import UrlParser from 'js/url_parser'
import PostParser from 'js/post_parser'
import Decoder from 'js/decoder'

// スレ
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
  fetchAllPosts(){
    let res = request('GET', this.datUrl, { timeout: 15000 })
    if(res.statusCode==200){
      // レスポンスヘッダ保存
      this.headers.lastMofied = res.headers['last-modified']
      this.headers.contentLength = Number(res.headers['content-length'])
      this.posts = PostParser.parseDat(res.body, this.url)
      this._setPostsNo()
      this._setTitle()
      return this.posts
    }else{
      throw new Error(`Status Code is ${res.statusCode} in response header`)
    }
  }

  // 新着レスを取得
  fetchNewPosts(){
    if(UrlParser.isShitaraba(this.url)){
      return this._fetchNewPostsFromShitaraba()
    }else{
      return this._fetchNewPostsByRange()
    }
  }

  // 新着レスを取得(したらば用)
  _fetchNewPostsFromShitaraba(){
    let reqUrl = this.datUrl
    // 最後のレス番+1からレス取得するURL
    if(this.posts.length>0){
      reqUrl = `${reqUrl}/${this.posts[this.posts.length-1].no + 1}-n`
    }
    let res = request('GET', reqUrl, { 'timeout': 15000 })
    if(res.statusCode==200 && res.body.byteLength>0){
      this.headers.lastMofied = res.headers['last-modified']
      this.headers.contentLength += Number(res.headers['content-length'])
      let newPosts = PostParser.parseDat(res.body, this.url)
      this.posts = this.posts.concat(newPosts)
      this._setPostsNo()
      this._setTitle()
      return newPosts
    }else if(res.statusCode==304 || res.body.byteLength<1){
      // 新着レスなし
      return null
    }else{
      throw new Error(`Status Code is ${res.statusCode} in response header.`)
    }
  }

  // 新着レスを取得(Rangeリクエスト用)
  _fetchNewPostsByRange(){
    let res = request('GET', this.datUrl, {
      'timeout': 15000,
      'headers': {
        'If-Modified-Since': this.headers.lastMofied,
        'Range': `bytes=${this.headers.contentLength}-`
      }
    })
    // Partial Contentが返ってきたとき
    if(res.statusCode==206){
      this.headers.lastMofied = res.headers['last-modified']
      this.headers.contentLength += Number(res.headers['content-length'])
      let newPosts = PostParser.parseDat(res.body, this.url)
      this.posts = this.posts.concat(newPosts)
      this._setPostsNo()
      this._setTitle()
      return newPosts
    }else if(res.statusCode==304){
      // 新着レスなし
      return null
    }else{
      throw new Error(`Status Code is ${res.statusCode} in response header.`)
    }
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
