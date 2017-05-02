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
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
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
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _iconvLite = __webpack_require__(7);

var _iconvLite2 = _interopRequireDefault(_iconvLite);

var _jschardet = __webpack_require__(8);

var _jschardet2 = _interopRequireDefault(_jschardet);

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
    value: function convert(string) {
      var code = _jschardet2.default.detect(string);
      var buf = new Buffer(string, 'binary');
      var txt = _iconvLite2.default.decode(buf, code.encoding);
      return txt.toString();
    }
  }]);

  return Decoder;
}();

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _syncRequest = __webpack_require__(3);

var _syncRequest2 = _interopRequireDefault(_syncRequest);

var _url_parser = __webpack_require__(0);

var _url_parser2 = _interopRequireDefault(_url_parser);

var _post_parser = __webpack_require__(6);

var _post_parser2 = _interopRequireDefault(_post_parser);

var _decoder = __webpack_require__(1);

var _decoder2 = _interopRequireDefault(_decoder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// スレ
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
      var res = (0, _syncRequest2.default)('GET', this.datUrl, { timeout: 15000 });
      res.url = this.datUrl;
      if (res.statusCode == 200) {
        // レスポンスヘッダ保存
        this.headers.lastMofied = res.headers['last-modified'];
        this.headers.contentLength = Number(res.headers['content-length']);
        this.posts = res.body = _post_parser2.default.parseDat(res.body, this.url);
        this._setPostsNo();
        this._setTitle();
        return res;
      } else {
        res.body = [];
        return res;
      }
    }

    // 新着レスを取得

  }, {
    key: 'fetchNewPosts',
    value: function fetchNewPosts() {
      if (_url_parser2.default.isShitaraba(this.url)) {
        return this._fetchNewPostsFromShitaraba();
      } else {
        return this._fetchNewPostsByRange();
      }
    }

    // 新着レスを取得(したらば用)

  }, {
    key: '_fetchNewPostsFromShitaraba',
    value: function _fetchNewPostsFromShitaraba() {
      var reqUrl = this.datUrl;
      // 最後のレス番+1からレス取得するURL
      if (this.posts.length > 0) {
        reqUrl = reqUrl + '/' + (this.posts[this.posts.length - 1].no + 1) + '-n';
      }
      var res = (0, _syncRequest2.default)('GET', reqUrl, { 'timeout': 15000 });
      res.url = reqUrl;
      if (res.statusCode == 200 && res.body.byteLength > 0) {
        this.headers.lastMofied = res.headers['last-modified'];
        this.headers.contentLength += Number(res.headers['content-length']);
        res.body = _post_parser2.default.parseDat(res.body, this.url);
        this.posts = this.posts.concat(res.body);
        this._setPostsNo();
        this._setTitle();
        return res;
      } else {
        // 新着レスなし
        res.body = [];
        return res;
      }
    }

    // 新着レスを取得(Rangeリクエスト用)

  }, {
    key: '_fetchNewPostsByRange',
    value: function _fetchNewPostsByRange() {
      var res = (0, _syncRequest2.default)('GET', this.datUrl, {
        'timeout': 15000,
        'headers': {
          'If-Modified-Since': this.headers.lastMofied,
          'Range': 'bytes=' + this.headers.contentLength + '-'
        }
      });
      res.url = this.datUrl;
      // Partial Contentが返ってきたとき
      if (res.statusCode == 206) {
        this.headers.lastMofied = res.headers['last-modified'];
        this.headers.contentLength += Number(res.headers['content-length']);
        res.body = _post_parser2.default.parseDat(res.body, this.url);
        this.posts = this.posts.concat(res.body);
        this._setPostsNo();
        this._setTitle();
        return res;
      } else {
        // 新着レスなし
        res.body = [];
        return res;
      }
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
  }]);

  return Thread;
}();

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("sync-request");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _syncRequest = __webpack_require__(3);

var _syncRequest2 = _interopRequireDefault(_syncRequest);

var _url_parser = __webpack_require__(0);

var _url_parser2 = _interopRequireDefault(_url_parser);

var _decoder = __webpack_require__(1);

var _decoder2 = _interopRequireDefault(_decoder);

var _thread = __webpack_require__(2);

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

  // スレッド一覧


  _createClass(Board, [{
    key: 'fetchThreads',
    value: function fetchThreads() {
      var _this = this;

      var res = (0, _syncRequest2.default)('GET', this.subjectUrl, { timeout: 15000 });
      res.url = this.subjectUrl;
      if (res.statusCode >= 300) {
        return res;
      } else {
        var subject = _decoder2.default.convert(res.body);
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
        res.body = this.threads = threads;
        return res;
      }
    }
  }]);

  return Board;
}();

/***/ }),
/* 5 */
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

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _url_parser = __webpack_require__(0);

var _url_parser2 = _interopRequireDefault(_url_parser);

var _decoder = __webpack_require__(1);

var _decoder2 = _interopRequireDefault(_decoder);

var _post = __webpack_require__(5);

var _post2 = _interopRequireDefault(_post);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

module.exports = function () {
  function PostParser() {
    _classCallCheck(this, PostParser);
  }

  _createClass(PostParser, null, [{
    key: 'parseDat',


    // datファイルからPostリストを返す
    value: function parseDat(dat, threadUrl) {
      var _this = this;

      // UTF-8に
      dat = _decoder2.default.convert(dat);
      return dat.split("\n").map(function (line) {
        return _this.parseDatLine(line, threadUrl);
      }).filter(function (post) {
        // 空行を削除
        return post;
      });
    }

    // datファイルの行からPostを返す

  }, {
    key: 'parseDatLine',
    value: function parseDatLine(line, threadUrl) {
      line = line.split("<>");
      // 空行のとき
      if (!line[0] && !line[1] && !line[2]) return null;
      if (_url_parser2.default.isShitaraba(threadUrl)) {
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
        return new _post2.default({
          name: line[0],
          mail: line[1],
          date: line[2].replace(/\sID:.+/, ""),
          body: line[3],
          title: line[4],
          id: line[2].match(/ID:.+/)[0].replace(/^ID:/, "")
        });
      }
    }
  }]);

  return PostParser;
}();

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("iconv-lite");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("jschardet");

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _board = __webpack_require__(4);

var _board2 = _interopRequireDefault(_board);

var _thread = __webpack_require__(2);

var _thread2 = _interopRequireDefault(_thread);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = _board2.default;

module.exports.Board = _board2.default;

module.exports.Thread = _thread2.default;

/***/ })
/******/ ]);