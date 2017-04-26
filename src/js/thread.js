import request from 'sync-request'

import UrlParser from 'js/url_parser'
import PostParser from 'js/post_parser'
import Decoder from 'js/decoder'

// スレ
module.exports = class Thread{

  constructor(title, url){
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
      return this.posts
    }else{
      throw new Error(`Status Code is ${res.statusCode} in response header`)
    }
  }

  // 新着レスを取得
  fetchNewPosts(){
    let res = request('GET', this.datUrl, {
      'timeout': 15000,
      'headers': {
        'If-Modified-Since': this.headers.lastMofied,
        'Range': `bytes=${this.headers.contentLength}-`
      }
    })
    console.log(res.statusCode)
    if(res.statusCode==206 || res.statusCode==200){
      // レスポンスヘッダ保存
      this.headers.lastMofied = res.headers['last-modified']
      this.headers.contentLength += Number(res.headers['content-length'])
      let newPosts = PostParser.parseDat(res.body, this.url)
      this.posts = this.posts.concat(newPosts)
      return newPosts
    }else if(res.statusCode==304){
      // 新着レスなし
      return null
    }else{
      throw new Error(`Status Code is ${res.statusCode} in response header`)
    }
  }

}
