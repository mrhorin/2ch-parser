import iconv from 'iconv-lite'
import jschardet from 'jschardet'

import UrlParser from 'js/url_parser'

module.exports = class Decoder{

  // UTF-8文字列に
  static convert(string){
    let code = jschardet.detect(string)
    let buf = new Buffer(string, 'binary')
    let txt = iconv.decode(buf, code.encoding)
    return txt.toString()
  }

}
