import request from 'sync-request'

import UrlParser from 'js/url_parser'
import Decoder from 'js/decoder'

// スレ
module.exports = class Thread{

  constructor(url){
    this.url = url
    this.title = ""
    this.headers = {
      lastMofied: "",
      contentLength: 0,
    }
    this.posts = this.allRes
  }

  // 全レスを取得
  get allRes(){
    let res = request('GET', this.datUrl, { timeout: 15000 })
    if(res.statusCode==200){
      // レスポンスヘッダ保存
      this.headers.lastMofied = res.headers['last-modified']
      this.headers.contentLength = Number(res.headers['content-length'])
      // UTF-8に変換
      let dat = Decoder.convert(res.body)
      this.posts = dat
      return dat
    }else{
      throw new Error(`Status Code is ${res.statusCode} in response header`)
    }
  }

  // 新着レスを取得
  get newRes(){
    let res = request('GET', this.datUrl, {
      'timeout': 15000,
      'headers': {
        'If-Modified-Since': this.headers.lastMofied,
        'Range': `bytes=${this.headers.contentLength}-`
      }
    })
    if(res.statusCode==206 || res.statusCode==200){
      // レスポンスヘッダ保存
      this.headers.lastMofied = res.headers['last-modified']
      this.headers.contentLength += Number(res.headers['content-length'])
      // UTF-8に変換
      let dat = Decoder.convert(res.body)
      this.posts += dat
      return dat
    }else if(res.statusCode==304){
      // 新着レスなし
      return null
    }else{
      throw new Error(`Status Code is ${res.statusCode} in response header`)
    }
  }

  // datファイルのURLを取得
  get datUrl(){
    return UrlParser.getDatUrl(this.url)
  }

}
