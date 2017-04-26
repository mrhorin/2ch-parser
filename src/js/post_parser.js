import UrlParser from 'js/url_parser'

import Post from 'js/post.js'

module.exports = class PostParser{

  // datファイルからPostリストを返す
  static parseDat(dat, threadUrl){
    return dat.split("\n").map((line)=>{
      return this.parseDatLine(line, threadUrl)
    }).filter((post)=>{
      // 空行を削除
      return (post)
    })
  }

  // datファイルの行からPostを返す
  static parseDatLine(line, threadUrl){
    line = line.split("<>")
    // 空行のとき
    if(!line[0]&&!line[1]&&!line[2]) return null
    if(UrlParser.isShitaraba(threadUrl)){
      return new Post({
        no: line[0],
        name: line[1],
        mail: line[2],
        date: line[3],
        body: line[4]
      })
    }else{
      return new Post({
        name: line[0],
        mail: line[1],
        date: line[2],
        body: line[3]
      })
    }
  }

}
