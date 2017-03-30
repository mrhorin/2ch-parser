module.exports = class Test{

  constructor(hoge){
    this.hoge = hoge
  }

  get fuga(){
    return this.hoge + " is kawaii :D"
  }

}
