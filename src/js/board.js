import request from 'superagent'
require('superagent-charset')(request)

import UrlParser from 'js/url_parser'
import Thread from 'js/thread'

// 板
export default class Board{

  constructor(url, title = "") {
    this.url = url
    this.title = title
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
    return new Promise((resolve, reject) => {
      const charCode = UrlParser.isShitaraba(this.url) ? 'EUC-JP' : 'Shift_JIS'
      request
        .get(this.subjectUrl)
        .charset(charCode)
        .timeout(5000)
        .end((err, res) => {
          if (err) {
            reject(err)
          } else if(res.statusCode>=300){
            res.body = []
            reject(res)
          } else {
            let threads = res.text.split('\n').filter((line, index, self)=>{
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
