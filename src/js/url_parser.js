// 掲示板仕様ごとのURLにパースするクラス
module.exports = class UrlParser{

  // subject.txtのURLを返す
  static getSubjectUrl(boardUrl){
    return UrlParser.convertUrl(boardUrl)+'/subject.txt'
  }

  // スレッドURLからDATファイルURLを取得
  static getDatUrl(threadUrl){
    threadUrl = this.convertUrl(threadUrl)
    if(UrlParser.isShitaraba(threadUrl)){
      return threadUrl.replace(/read.cgi/, "rawmode.cgi")
    }else{
      let url = threadUrl.split("/")
      return `${url[0]}/\/${url[2]}/${url[5]}/dat/${url[6]}.dat`
    }
  }

  // 板URLとスレッドキーからスレッドURLを取得
  static getThreadUrl(boardUrl, threadKey){
    boardUrl = this.convertUrl(boardUrl)
    let uri = boardUrl.split("/")
    if(UrlParser.isShitaraba(boardUrl)){
      return `${uri[0]}/\/${uri[2]}/bbs/read.cgi/${uri[3]}/${uri[4]}/${threadKey.split(".")[0]}`
    }else{
      return `${uri[0]}/\/${uri[2]}/test/read.cgi/${uri[3]}/${threadKey.split(".")[0]}`
    }
  }

  // したらばのURLか
  static isShitaraba(url){
    return url.includes('jbbs.shitaraba.net')
  }

  // URLの末尾の/を削除して返す
  static convertUrl(url){
    if(url.slice(-1) == '/'){
      return url.slice(0, -1)
    }else{
      return url
    }
  }

}
