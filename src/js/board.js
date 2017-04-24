import request from 'sync-request'

import UrlParser from 'js/url_parser'
import Decoder from 'js/decoder'

import Thread from 'js/thread'

// 板
module.exports = class Board{

  constructor(url){
    this.url = url
  }

  // スレッド一覧
  get threads(){
    let res = request('GET', this.subjectUrl, { timeout: 15000 })
    let subject = Decoder.convert(res.body)
    return subject.split('\n').filter((line, index, self)=>{
      // 重複行を削除
      return (self.indexOf(line) === index)
    }).map((th)=>{
      if(!th[1]) return false
      if(UrlParser.isShitaraba(this.url)){
        th = th.split(',')
      }else{
        th = th.split('<>')
      }
      return {
        name: th[1],
        key: th[0],
        url: UrlParser.getThreadUrl(this.url, th[0])
      }
    }).filter((thread)=>{
      // URLが空のスレッドを排除
      return (thread.key)
    })
  }

  // subject.txtのURL
  get subjectUrl(){
    return UrlParser.getSubjectUrl(this.url)
  }

}
