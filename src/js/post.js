// 書き込み
module.exports = class Post{

  constructor(hash){
    this.no = Number(hash.no)
    this.name = hash.name
    this.mail = hash.mail
    this.date = hash.date
    this.body = hash.body
  }

}
