import request from 'then-request'

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

  // スレッド一覧を取得
  fetchThreads(callback=()=>{}){
    this.threadsPromise.then((res)=>{
      callback(res)
    }).catch((res)=>{
      callback(res)
    })
  }

  // スレッド一覧を取得するプロミスを返す
  get threadsPromise(){
    return new Promise((resolve, reject)=>{
      request('GET', this.subjectUrl, { timeout: 15000 }).done((res)=>{
        res.url = this.subjectUrl
        if(res.statusCode>=300){
          res.body = []
          reject(res)
        } else {
          // UTF-8に
          const code = UrlParser.isShitaraba(this.url) ? 'EUC-JP' : 'Shift_JIS'
          let subject = Decoder.convert(res.body, code)
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
          resolve(res)
        }
      })
    })
  }

}
