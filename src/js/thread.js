import request from 'sync-request'

import UrlParser from 'js/url_parser'
import Decoder from 'js/decoder'

// スレ
module.exports = class Thread{

  constructor(url){
    this.url = url
    this.title = this.getRes(1,1).split("<>")[5]
  }

  getRes(start="1", end=""){
    let res = request('GET', `${this.datUrl}/${start}-${end}`, { timeout: 15000 })
    let dat = Decoder.convert(res.body)
    return dat
  }

  // 全レス
  get allRes(){
    let res = request('GET', this.datUrl, { timeout: 15000 })
    let dat = Decoder.convert(res.body)
    return dat
  }

  // datファイルのURLを取得
  get datUrl(){
    return UrlParser.getDatUrl(this.url)
  }

}
