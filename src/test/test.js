import { assert } from 'chai'

import Board from 'js/board'
import Thread from 'js/thread'
import UrlParser from 'js/url_parser'

const url = {
  board: {
    jbbs: 'http://jbbs.shitaraba.net/computer/10298',
    sc: 'http://macaron.2ch.sc/reglement',
    open: 'http://open.open2ch.net/open2ch'
  },
  thread: {
    jbbs: 'http://jbbs.shitaraba.net/bbs/read.cgi/computer/10298/1108684328',
    sc: 'http://macaron.2ch.sc/test/read.cgi/reglement/1397594191',
    open: 'http://open.open2ch.net/test/read.cgi/open2ch/1365706412'
  }
}

describe('Board', () => {

  describe('#fetchThreads', () => {
    it('StatusCode is 200 in case of jbbs board URL.', () => {
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
    it('StatusCode is 200 in case of 2ch.sc thread URL.', () => {
      var sc = new Thread(url.thread.sc)
      sc.fetchNewPosts((res) => {
        assert.equal(res.statusCode, 200)
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

