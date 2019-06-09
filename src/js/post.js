// 書き込み
export default class Post{

  constructor(hash){
    this.no = Number(hash.no)
    this.name = hash.name
    this.mail = hash.mail
    this.date = hash.date
    this.body = hash.body
    this.id = hash.id
    this.title = hash.title
  }

}
