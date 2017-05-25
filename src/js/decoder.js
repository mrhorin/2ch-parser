import iconv from 'iconv-lite'

import UrlParser from 'js/url_parser'

module.exports = class Decoder{

  // UTF-8文字列に
  static convert(string, code){
    let buf = new Buffer(string, 'binary')
    let txt = iconv.decode(buf, code)
    return txt.toString()
  }

}
