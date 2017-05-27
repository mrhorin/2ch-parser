import { assert } from 'chai'

import Board from 'js/board'
import Thread from 'js/thread'
import UrlParser from 'js/url_parser'

const url = {
  board: {
    jbbs: 'http://jbbs.shitaraba.net/computer/10298',
    sc: 'http://macaron.2ch.sc/reglement',
    open: 'http://open.open2ch.net/open2ch',
    invalid: 'http://epcviewer.xxx/xxxxx'
  },
  thread: {
    jbbs: 'http://jbbs.shitaraba.net/bbs/read.cgi/computer/10298/1108684328',
    sc: 'http://macaron.2ch.sc/test/read.cgi/reglement/1397594191',
    open: 'http://open.open2ch.net/test/read.cgi/open2ch/1365706412',
    invalid: 'http://epcviewer.xxx/test/read.cgi/xxxxx/7777777'
  }
}

describe('Board', () => {

  describe('#fetchThreads', () => {
    it('StatusCode is 200 in case of jbbs board URL.', (done) => {
      var jbbs = new Board(url.board.jbbs)
      jbbs.fetchThreads((res) => {
        assert.equal(res.statusCode, 200)
        done()
      })
    })  
  })

})

describe('Thread', () => {

  describe('#fetchNewPosts', () => {
    it('StatusCode is 200 in case of shitaraba thread URL.', (done) => {
      var jbbs = new Thread(url.thread.jbbs)
      jbbs.fetchNewPosts((res) => {
        assert.isTrue(res.statusCode==200, 'statuCode is 200')
        done()
      })
    })

    it('StatusCode is 206 or 304 in case of 2ch.sc thread URL.', (done) => {
      var sc = new Thread(url.thread.sc)
      sc.fetchNewPosts((res) => {
        assert.isTrue(res.statusCode==206 || res.statusCode==304, 'statuCode is 206 or 304')
        done()
      })
    })

    it('StatusCode is 200 in case of shitaraba thread URL.', (done) => {
      var jbbs = new Thread(url.thread.jbbs)
      jbbs.fetchNewPosts((res) => {
        assert.isTrue(res.statusCode==200, 'statuCode is 200')
        done()
      })
    })
  })

  describe('#fetchAllPosts', () => {
    it('StatusCode is 200 in case of shitaraba thread URL.', (done) => {
      var jbbs = new Thread(url.thread.jbbs)
      jbbs.fetchAllPosts((res) => {
        assert.equal(res.statusCode, 200)
        done()
      })
    })

    it('StatusCode is 200 in case of open thread URL.', (done) => {
      var jbbs = new Thread(url.thread.open)
      jbbs.fetchAllPosts((res) => {
        assert.equal(res.statusCode, 200)
        done()
      })
    })

    it('StatusCode is 200 in case of 2ch.sc thread URL.', (done) => {
      var jbbs = new Thread(url.thread.sc)
      jbbs.fetchAllPosts((res) => {
        assert.equal(res.statusCode, 200)
        done()
      })
    })
  })

  describe('#newPostsPromise', () => {
    it('Status code is 200 in resolve block in case of shitaraba thread URL.', (done) => {
      var jbbs = new Thread(url.thread.jbbs)
      jbbs.newPostsPromise.then((res) => {
        assert.equal(res.statusCode, 200)
        done()
      })
    })

    it('Error code is ENOTFOUND in case of invalid URL.', (done) => {
      var invalid = new Thread(url.thread.invalid)
      invalid.newPostsPromise.catch((err) => {
        // The reson is that superagent don't  resolve domain name
        assert.equal(err.code, 'ENOTFOUND')
        done()
      })
    })

    it('Make it possible to catch error of 404 in case of invalid URL on shitaraba.', (done) => {
      var jbbs = new Thread('http://jbbs.shitaraba.net/return/404/hoge')
      jbbs.newPostsPromise.catch((err) => {
        // The reson is that it happen timeout in superagent.
        assert.isTrue(err.status==404, 'in catch')
        done()
      })
    })
  })

})

describe('UrlParser', () => {

  describe('#isShitaraba', () => {
    it(`${url.board.jbbs} is true.`, () => {
      assert.isOk(UrlParser.isShitaraba(url.board.jbbs), `${url.board.jbbs} is ok.`)
    })

    it(`${url.thread.jbbs} is true.`, () => {
      assert.isOk(UrlParser.isShitaraba(url.thread.jbbs), `${url.thread.jbbs} is ok.`)
    })

    it(`${url.board.sc} is false.`, () => {
      assert.isNotOk(UrlParser.isShitaraba(url.board.sc), `${url.board.sc} will fail.`)
    })    
  })

  describe('#getBoardUrl', () => {
    it(`In case of ${url.thread.jbbs} returns ${url.board.jbbs}.`, () => {
      assert.equal(UrlParser.getBoardUrl(url.thread.jbbs), url.board.jbbs)
    })
  })

  describe('#getThreadUrl', () => {
    it(`In case of ${url.board.jbbs} returns ${url.thread.jbbs}`, () => {
      assert.equal(UrlParser.getThreadUrl(url.board.jbbs, '1108684328'), url.thread.jbbs)
    })

    it(`In case of ${url.board.open}/ returns ${url.thread.open}`, () => {
      assert.equal(UrlParser.getThreadUrl(url.board.open+'/', '1365706412'), url.thread.open)
    })

    it(`In case of ${url.board.sc}/l50 returns ${url.thread.sc}`, () => {
      assert.equal(UrlParser.getThreadUrl(url.board.sc+'/l50', '1397594191'), url.thread.sc)
    })    
  })

})

