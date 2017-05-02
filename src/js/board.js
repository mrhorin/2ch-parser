import request from 'sync-request'

import UrlParser from 'js/url_parser'
import Decoder from 'js/decoder'

import Thread from 'js/thread'

// 板
module.exports = class Board{

  constructor(url){
    this.url = url
    this.subjectUrl = UrlParser.getSubjectUrl(this.url)
    this.threads = []
  }

  // スレッド一覧
  fetchThreads(){
    let res = request('GET', this.subjectUrl, { timeout: 15000 })
    res.url = this.subjectUrl
    if(res.statusCode>=300){
      return res
    }else{
      let subject = Decoder.convert(res.body)
      let threads = subject.split('\n').filter((line, index, self)=>{
        // 重複行を削除
        return (self.indexOf(line) === index)
      }).map((th)=>{
        if(!th[1]) return false
        if(UrlParser.isShitaraba(this.url)){
          th = th.split(',')
        }else{
          th = th.split('<>')
        }
        return new Thread(UrlParser.getThreadUrl(this.url, th[0]), th[1])
      }).filter((thread)=>{
        // URLが空のスレッドを排除
        return (thread.url)
      })
      res.body = this.threads = threads
      return res
    }

  }

}
