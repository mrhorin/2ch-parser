module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 21);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// 掲示板仕様ごとのURLにパースするクラス
module.exports = function () {
  function UrlParser() {
    _classCallCheck(this, UrlParser);
  }

  _createClass(UrlParser, null, [{
    key: "getSubjectUrl",


    // subject.txtのURLを返す
    value: function getSubjectUrl(boardUrl) {
      return UrlParser.convertUrl(boardUrl) + '/subject.txt';
    }

    // スレッドURLからDATファイルURLを取得

  }, {
    key: "getDatUrl",
    value: function getDatUrl(threadUrl) {
      threadUrl = this.convertUrl(threadUrl);
      if (UrlParser.isShitaraba(threadUrl)) {
        return threadUrl.replace(/read.cgi/, "rawmode.cgi");
      } else {
        var url = threadUrl.split("/");
        return url[0] + "//" + url[2] + "/" + url[5] + "/dat/" + url[6] + ".dat";
      }
    }

    // 板URLとスレッドキーからスレッドURLを取得

  }, {
    key: "getThreadUrl",
    value: function getThreadUrl(boardUrl, threadKey) {
      boardUrl = this.convertUrl(boardUrl);
      var uri = boardUrl.split("/");
      if (UrlParser.isShitaraba(boardUrl)) {
        return uri[0] + "//" + uri[2] + "/bbs/read.cgi/" + uri[3] + "/" + uri[4] + "/" + threadKey.split(".")[0];
      } else {
        return uri[0] + "//" + uri[2] + "/test/read.cgi/" + uri[3] + "/" + threadKey.split(".")[0];
      }
    }

    // URLから板のURLを取得  

  }, {
    key: "getBoardUrl",
    value: function getBoardUrl(url) {
      var uri = this.convertUrl(url).split("/");
      if (this.isShitaraba(url)) {
        // .cgiが出現するクエリーの位置を探す
        var cgiIndex = uri.findIndex(function (value) {
          if (value.match(/^\w+\.cgi$/i)) return true;
        });
        if (cgiIndex >= 0) {
          var category = uri[cgiIndex + 1];
          var boardNo = uri[cgiIndex + 2];
          return uri[0] + "//" + uri[2] + "/" + category + "/" + boardNo;
        } else {
          // .cgiが含まれない時
          return this.convertUrl(url);
        }
      } else {
        return url;
      }
    }

    // したらばのURLか

  }, {
    key: "isShitaraba",
    value: function isShitaraba(url) {
      return url.includes('jbbs.shitaraba.net');
    }

    // URLの末尾の/を削除して返す

  }, {
    key: "convertUrl",
    value: function convertUrl(url) {
      if (url.slice(-1) == '/') {
        return url.slice(0, -1);
      } else {
        return url;
      }
    }
  }]);

  return UrlParser;
}();

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _iconvLite = __webpack_require__(10);

var _iconvLite2 = _interopRequireDefault(_iconvLite);

var _url_parser = __webpack_require__(0);

var _url_parser2 = _interopRequireDefault(_url_parser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

module.exports = function () {
  function Decoder() {
    _classCallCheck(this, Decoder);
  }

  _createClass(Decoder, null, [{
    key: 'convert',


    // UTF-8文字列に
    value: function convert(string, code) {
      var buf = new Buffer(string, 'binary');
      var txt = _iconvLite2.default.decode(buf, code);
      return txt.toString();
    }
  }]);

  return Decoder;
}();

/***/ }),

/***/ 10:
/***/ (function(module, exports) {

module.exports = require("iconv-lite");

/***/ }),

/***/ 11:
/***/ (function(module, exports) {

module.exports = require("superagent");

/***/ }),

/***/ 12:
/***/ (function(module, exports) {

module.exports = require("then-request");

/***/ }),

/***/ 21:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _board = __webpack_require__(5);

var _board2 = _interopRequireDefault(_board);

var _thread = __webpack_require__(3);

var _thread2 = _interopRequireDefault(_thread);

var _url_parser = __webpack_require__(0);

var _url_parser2 = _interopRequireDefault(_url_parser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = _board2.default;

module.exports.Board = _board2.default;

module.exports.Thread = _thread2.default;

module.exports.UrlParser = _url_parser2.default;

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _superagent = __webpack_require__(11);

var _superagent2 = _interopRequireDefault(_superagent);

var _url_parser = __webpack_require__(0);

var _url_parser2 = _interopRequireDefault(_url_parser);

var _post = __webpack_require__(6);

var _post2 = _interopRequireDefault(_post);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

__webpack_require__(48)(_superagent2.default);

// スレッド
module.exports = function () {
  function Thread(url) {
    var title = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";

    _classCallCheck(this, Thread);

    this.title = title;
    this.url = url;
    this.datUrl = _url_parser2.default.getDatUrl(this.url);
    this.headers = {
      lastMofied: "",
      contentLength: 0
    };
    this.posts = [];
  }

  // 全レスを取得


  _createClass(Thread, [{
    key: 'fetchAllPosts',
    value: function fetchAllPosts() {
      var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {};

      this.allPostsPromise.then(function (res) {
        callback(res);
      }).catch(function (res) {
        callback(res);
      });
    }

    // 新着レスを取得

  }, {
    key: 'fetchNewPosts',
    value: function fetchNewPosts() {
      var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {};

      this.newPostsPromise.then(function (res) {
        callback(res);
      }).catch(function (res) {
        callback(res);
      });
    }

    // 全レスを取得するプロミスを返す

  }, {
    key: '_getNewPostsFromShitarabaPromise',


    // 新着レスを取得するプロミスを返す(したらば用)
    value: function _getNewPostsFromShitarabaPromise() {
      var _this = this;

      var reqUrl = this.datUrl;
      // 最後のレス番+1からレス取得するURL
      if (this.posts.length > 0) {
        reqUrl = reqUrl + '/' + (this.posts[this.posts.length - 1].no + 1) + '-n';
      }
      return new Promise(function (resolve, reject) {
        _superagent2.default.get(reqUrl).charset('euc-jp').timeout(5000).end(function (err, res) {
          if (err) {
            reject(err);
          } else {
            if (res.statusCode == 200 && res.text.length > 0) {
              _this.headers.lastMofied = res.headers['last-modified'];
              _this.headers.contentLength += Number(res.headers['content-length']);
              res.body = _this._parseDat(res.text);
              _this.posts = _this.posts.concat(res.body);
              _this._setPostsNo();
              _this._setTitle();
              resolve(res);
            } else if (res.statusCode == 304 || res.text.length < 1) {
              // 新着レスなし
              res.body = [];
              resolve(res);
            } else {
              res.body = [];
              resolve(res);
            }
          }
        });
      });
    }

    // 新着レスを取得するプロミスを返す(Rangeリクエスト用)

  }, {
    key: '_getNewPostsByRangePromise',
    value: function _getNewPostsByRangePromise() {
      var _this2 = this;

      return new Promise(function (resolve, reject) {
        _superagent2.default.get(_this2.datUrl).charset('shift_jis').timeout(5000).set({ 'If-Modified-Since': _this2.headers.lastMofied, 'Range': 'bytes=' + _this2.headers.contentLength + '-' }).end(function (err, res) {
          if (err) {
            reject(err);
          } else {
            switch (res.statusCode) {
              case 206:
                // Partial Content  
                _this2.headers.lastMofied = res.headers['last-modified'];
                _this2.headers.contentLength += Number(res.headers['content-length']);
                res.body = _this2._parseDat(res.text);
                _this2.posts = _this2.posts.concat(res.body);
                _this2._setPostsNo();
                _this2._setTitle();
                resolve(res);
                break;
              case 304:
                // Not Modified
                res.body = [];
                resolve(res);
                break;
              default:
                res.body = [];
                resolve(res);
                break;
            }
          }
        });
      });
    }

    // datファイルをパースしてPostの配列を返す  

  }, {
    key: '_parseDat',
    value: function _parseDat(dat) {
      var _this3 = this;

      return dat.split("\n").map(function (line) {
        line = line.split("<>");
        // 空行のとき
        if (!line[0] && !line[1] && !line[2]) return null;
        if (_url_parser2.default.isShitaraba(_this3.url)) {
          // したらば処理
          return new _post2.default({
            no: line[0],
            name: line[1],
            mail: line[2],
            date: line[3],
            body: line[4],
            title: line[5],
            id: line[6]
          });
        } else {
          // 2ch互換掲示板全般処理
          var id = line[2];
          if (id.match(/ID:.+/)) {
            id = id.match(/ID:.+/)[0];
          } else if (id.match(/BE:.+/)) {
            id = id.match(/BE:.+/)[0];
          }
          return new _post2.default({
            no: "",
            name: line[0],
            mail: line[1],
            date: line[2].replace(/\sID:.+/, "").replace(/\sBE:.+/, ""),
            body: line[3],
            title: line[4],
            id: id
          });
        }
      }).filter(function (post) {
        // 空行を削除
        return post;
      });
    }

    // レス番を付与

  }, {
    key: '_setPostsNo',
    value: function _setPostsNo() {
      if (!_url_parser2.default.isShitaraba(this.url)) {
        this.posts = this.posts.map(function (post, index) {
          post.no = index;
          return post;
        });
      }
    }

    // スレッド名をセット

  }, {
    key: '_setTitle',
    value: function _setTitle() {
      if (this.posts.length > 0) this.title = this.posts[0].title;
    }
  }, {
    key: 'allPostsPromise',
    get: function get() {
      var _this4 = this;

      return new Promise(function (resolve, reject) {
        var charCode = _url_parser2.default.isShitaraba(_this4.url) ? 'EUC-JP' : 'Shift_JIS';
        _superagent2.default.get(_this4.datUrl).charset(charCode).timeout(5000).end(function (err, res) {
          if (err) {
            reject(err);
          } else {
            switch (res.statusCode) {
              case 200:
                // レスポンスヘッダ保存
                _this4.headers.lastMofied = res.headers['last-modified'];
                _this4.headers.contentLength = Number(res.headers['content-length']);
                _this4.posts = res.body = _this4._parseDat(res.text);
                _this4._setPostsNo();
                _this4._setTitle();
                resolve(res);
                break;
              default:
                res.body = [];
                resolve(res);
                break;
            }
          }
        });
      });
    }

    // 新着レスを取得するプロミスを返す

  }, {
    key: 'newPostsPromise',
    get: function get() {
      return _url_parser2.default.isShitaraba(this.url) ? this._getNewPostsFromShitarabaPromise() : this._getNewPostsByRangePromise();
    }
  }]);

  return Thread;
}();

/***/ }),

/***/ 48:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Module dependencies
 */

const iconv = __webpack_require__(10)

/**
 * util
 */

const checkEncoding = enc => {
  // check iconv supported encoding
  if (enc && !iconv.encodingExists(enc)) {
    return new Error('encoding not supported by iconv-lite')
  }
}

/**
 * install the charset()
 */

module.exports = function install(superagent) {
  const Request = superagent.Request

  /**
   * add `charset` to request
   *
   * @param {String} enc : the encoding
   */

  Request.prototype.charset = function(enc) {
    if (enc) {
      let err = checkEncoding(enc)
      if (err) throw err
    }

    // set the parser
    this._parser = function(res, cb) { // res not instanceof http.IncomingMessage
      const chunks = []

      res.on('data', function(chunk) {
        chunks.push(chunk)
      })

      res.on('end', function() {
        let text, err
        const buf = Buffer.concat(chunks)

        // detect if encoding if not specified
        if (!enc) {
          if (res.headers['content-type']) {
            // Extracted from headers
            enc = (res.headers['content-type'].match(/charset=(.+)/) || []).pop()
          }

          if (!enc) {
            // Extracted from <meta charset="gb2312"> or <meta http-equiv=Content-Type content="text/html;charset=gb2312">
            enc = (buf.toString().match(/<meta.+?charset=['"]?([^"']+)/i) || []).pop()
          }

          // check
          err = checkEncoding(enc)
          if (err) return cb(err)

          if (!enc) {
            // Default utf8
            enc = 'utf-8'
          }
        }

        try {
          text = iconv.decode(buf, enc)
        } catch (e) {
          /* istanbul ignore next */
          err = e
        } finally {
          res.text = text
          cb(err)
        }
      })
    }

    return this
  }

  return superagent
}

/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _thenRequest = __webpack_require__(12);

var _thenRequest2 = _interopRequireDefault(_thenRequest);

var _url_parser = __webpack_require__(0);

var _url_parser2 = _interopRequireDefault(_url_parser);

var _decoder = __webpack_require__(1);

var _decoder2 = _interopRequireDefault(_decoder);

var _thread = __webpack_require__(3);

var _thread2 = _interopRequireDefault(_thread);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// 板
module.exports = function () {
  function Board(url) {
    _classCallCheck(this, Board);

    this.url = url;
    this.subjectUrl = _url_parser2.default.getSubjectUrl(this.url);
    this.threads = [];
  }

  // スレッド一覧を取得


  _createClass(Board, [{
    key: 'fetchThreads',
    value: function fetchThreads() {
      var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {};

      this.threadsPromise.then(function (res) {
        callback(res);
      }).catch(function (res) {
        callback(res);
      });
    }

    // スレッド一覧を取得するプロミスを返す

  }, {
    key: 'threadsPromise',
    get: function get() {
      var _this = this;

      return new Promise(function (resolve, reject) {
        (0, _thenRequest2.default)('GET', _this.subjectUrl, { timeout: 15000 }).done(function (res) {
          res.url = _this.subjectUrl;
          if (res.statusCode >= 300) {
            res.body = [];
            reject(res);
          } else {
            // UTF-8に
            var code = _url_parser2.default.isShitaraba(_this.url) ? 'EUC-JP' : 'Shift_JIS';
            var subject = _decoder2.default.convert(res.body, code);
            var threads = subject.split('\n').filter(function (line, index, self) {
              // 重複行を削除
              return self.indexOf(line) === index;
            }).map(function (th) {
              if (!th[1]) return false;
              if (_url_parser2.default.isShitaraba(_this.url)) {
                th = th.split(',');
              } else {
                th = th.split('<>');
              }
              return new _thread2.default(_url_parser2.default.getThreadUrl(_this.url, th[0]), th[1]);
            }).filter(function (thread) {
              // URLが空のスレッドを排除
              return thread.url;
            });
            res.body = _this.threads = threads;
            resolve(res);
          }
        });
      });
    }
  }]);

  return Board;
}();

/***/ }),

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// 書き込み
module.exports = function Post(hash) {
  _classCallCheck(this, Post);

  this.no = Number(hash.no);
  this.name = hash.name;
  this.mail = hash.mail;
  this.date = hash.date;
  this.body = hash.body;
  this.id = hash.id;
  this.title = hash.title;
};

/***/ })

/******/ });