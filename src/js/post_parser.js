import UrlParser from 'js/url_parser'
import Decoder from 'js/decoder'

import Post from 'js/post.js'

module.exports = class PostParser{

  // datファイルからPostリストを返す
  static parseDat(dat, threadUrl){
    // UTF-8に
    const code = UrlParser.isShitaraba(threadUrl) ? 'EUC-JP' : 'Shift_JIS'
    dat = Decoder.convert(dat, code)
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
      // したらば処理
      return new Post({
        no: line[0],
        name: line[1],
        mail: line[2],
        date: line[3],
        body: line[4],
        title: line[5],
        id: line[6]
      })
    } else {
      let id = line[2]
      if (id.match(/ID:.+/)) {
        id = id.match(/ID:.+/)[0]
      } else if (id.match(/BE:.+/)) {
        id = id.match(/BE:.+/)[0]
      }
      return new Post({
        no: "",
        name: line[0],
        mail: line[1],
        date: line[2].replace(/\sID:.+/, "").replace(/\sBE:.+/, ""),
        body: line[3],
        title: line[4],
        id: id
      })
    }
  }

}
