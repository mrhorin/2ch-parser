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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(originalModule) {\n\tif (!originalModule.webpackPolyfill) {\n\t\tvar module = Object.create(originalModule);\n\t\t// module.parent = undefined by default\n\t\tif (!module.children) module.children = [];\n\t\tObject.defineProperty(module, \"loaded\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.l;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"id\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.i;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"exports\", {\n\t\t\tenumerable: true\n\t\t});\n\t\tmodule.webpackPolyfill = 1;\n\t}\n\treturn module;\n};\n\n\n//# sourceURL=webpack:///(webpack)/buildin/harmony-module.js?");

/***/ }),

/***/ "./src/js/board.js":
/*!*************************!*\
  !*** ./src/js/board.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Board; });\n/* harmony import */ var superagent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! superagent */ \"superagent\");\n/* harmony import */ var superagent__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(superagent__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var js_url_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! js/url_parser */ \"./src/js/url_parser.js\");\n/* harmony import */ var js_thread__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js/thread */ \"./src/js/thread.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n__webpack_require__(/*! superagent-charset */ \"superagent-charset\")(superagent__WEBPACK_IMPORTED_MODULE_0___default.a);\n\n\n // 板\n\nvar Board =\n/*#__PURE__*/\nfunction () {\n  function Board(url) {\n    var title = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : \"\";\n\n    _classCallCheck(this, Board);\n\n    this.url = url;\n    this.title = title;\n    this.subjectUrl = js_url_parser__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getSubjectUrl(this.url);\n    this.threads = [];\n  } // スレッド一覧を取得\n\n\n  _createClass(Board, [{\n    key: \"fetchThreads\",\n    value: function fetchThreads() {\n      var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {};\n      this.threadsPromise.then(function (res) {\n        callback(res);\n      })[\"catch\"](function (res) {\n        callback(res);\n      });\n    } // スレッド一覧を取得するプロミスを返す\n\n  }, {\n    key: \"threadsPromise\",\n    get: function get() {\n      var _this = this;\n\n      return new Promise(function (resolve, reject) {\n        var charCode = js_url_parser__WEBPACK_IMPORTED_MODULE_1__[\"default\"].isShitaraba(_this.url) ? 'EUC-JP' : 'Shift_JIS';\n        superagent__WEBPACK_IMPORTED_MODULE_0___default.a.get(_this.subjectUrl).charset(charCode).timeout(5000).end(function (err, res) {\n          if (err) {\n            reject(err);\n          } else if (res.statusCode >= 300) {\n            res.body = [];\n            reject(res);\n          } else {\n            var threads = res.text.split('\\n').filter(function (line, index, self) {\n              // 重複行を削除\n              return self.indexOf(line) === index;\n            }).map(function (th) {\n              if (!th[1]) return false;\n\n              if (js_url_parser__WEBPACK_IMPORTED_MODULE_1__[\"default\"].isShitaraba(_this.url)) {\n                th = th.split(',');\n              } else {\n                th = th.split('<>');\n              }\n\n              return new js_thread__WEBPACK_IMPORTED_MODULE_2__[\"default\"](js_url_parser__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getThreadUrl(_this.url, th[0]), th[1]);\n            }).filter(function (thread) {\n              // URLが空のスレッドを排除\n              return thread.url;\n            });\n            res.body = _this.threads = threads;\n            resolve(res);\n          }\n        });\n      });\n    }\n  }]);\n\n  return Board;\n}();\n\n\n\n//# sourceURL=webpack:///./src/js/board.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var js_board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! js/board */ \"./src/js/board.js\");\n/* harmony import */ var js_thread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! js/thread */ \"./src/js/thread.js\");\n/* harmony import */ var js_url_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js/url_parser */ \"./src/js/url_parser.js\");\n\n\n\nmodule.exports = js_board__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\nmodule.exports.Board = js_board__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\nmodule.exports.Thread = js_thread__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\nmodule.exports.UrlParser = js_url_parser__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ }),

/***/ "./src/js/post.js":
/*!************************!*\
  !*** ./src/js/post.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Post; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n// 書き込み\nvar Post = function Post(hash) {\n  _classCallCheck(this, Post);\n\n  this.no = Number(hash.no);\n  this.name = hash.name;\n  this.mail = hash.mail;\n  this.date = hash.date;\n  this.body = hash.body;\n  this.id = hash.id;\n  this.title = hash.title;\n};\n\n\n\n//# sourceURL=webpack:///./src/js/post.js?");

/***/ }),

/***/ "./src/js/thread.js":
/*!**************************!*\
  !*** ./src/js/thread.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Thread; });\n/* harmony import */ var superagent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! superagent */ \"superagent\");\n/* harmony import */ var superagent__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(superagent__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var js_url_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! js/url_parser */ \"./src/js/url_parser.js\");\n/* harmony import */ var js_post_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js/post.js */ \"./src/js/post.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n__webpack_require__(/*! superagent-charset */ \"superagent-charset\")(superagent__WEBPACK_IMPORTED_MODULE_0___default.a);\n\n\n // スレッド\n\nvar Thread =\n/*#__PURE__*/\nfunction () {\n  function Thread(url) {\n    var title = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : \"\";\n\n    _classCallCheck(this, Thread);\n\n    this.title = title;\n    this.url = url;\n    this.datUrl = js_url_parser__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getDatUrl(this.url);\n    this.headers = {\n      lastMofied: \"\",\n      contentLength: 0\n    };\n    this.posts = [];\n  } // 全レスを取得\n\n\n  _createClass(Thread, [{\n    key: \"fetchAllPosts\",\n    value: function fetchAllPosts() {\n      var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {};\n      this.allPostsPromise.then(function (res) {\n        callback(res);\n      })[\"catch\"](function (res) {\n        callback(res);\n      });\n    } // 新着レスを取得\n\n  }, {\n    key: \"fetchNewPosts\",\n    value: function fetchNewPosts() {\n      var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {};\n      this.newPostsPromise.then(function (res) {\n        callback(res);\n      })[\"catch\"](function (res) {\n        callback(res);\n      });\n    } // JSON形式で取得  \n\n  }, {\n    key: \"_getNewPostsFromShitarabaPromise\",\n    // 新着レスを取得するプロミスを返す(したらば用)\n    value: function _getNewPostsFromShitarabaPromise() {\n      var _this = this;\n\n      var reqUrl = this.datUrl; // 最後のレス番+1からレス取得するURL\n\n      if (this.posts.length > 0) {\n        reqUrl = \"\".concat(reqUrl, \"/\").concat(this.posts[this.posts.length - 1].no + 1, \"-n\");\n      }\n\n      return new Promise(function (resolve, reject) {\n        superagent__WEBPACK_IMPORTED_MODULE_0___default.a.get(reqUrl).charset('euc-jp').timeout(5000).end(function (err, res) {\n          if (err) {\n            reject(err);\n          } else {\n            if (res.statusCode == 200 && res.text.length > 0) {\n              _this.headers.lastMofied = res.headers['last-modified'];\n              _this.headers.contentLength += Number(res.headers['content-length']);\n              res.body = _this._parseDat(res.text);\n              _this.posts = _this.posts.concat(res.body);\n\n              _this._setPostsNo();\n\n              _this._setTitle();\n\n              resolve(res);\n            } else if (res.statusCode == 304 || res.text.length < 1) {\n              // 新着レスなし\n              res.body = [];\n              resolve(res);\n            } else {\n              res.body = [];\n              resolve(res);\n            }\n          }\n        });\n      });\n    } // 新着レスを取得するプロミスを返す(Rangeリクエスト用)\n\n  }, {\n    key: \"_getNewPostsByRangePromise\",\n    value: function _getNewPostsByRangePromise() {\n      var _this2 = this;\n\n      return new Promise(function (resolve, reject) {\n        superagent__WEBPACK_IMPORTED_MODULE_0___default.a.get(_this2.datUrl).charset('shift_jis').timeout(5000).set({\n          'If-Modified-Since': _this2.headers.lastMofied,\n          'Range': \"bytes=\".concat(_this2.headers.contentLength, \"-\")\n        }).end(function (err, res) {\n          if (err) {\n            reject(err);\n          } else {\n            switch (res.statusCode) {\n              case 206:\n                // Partial Content  \n                _this2.headers.lastMofied = res.headers['last-modified'];\n                _this2.headers.contentLength += Number(res.headers['content-length']);\n                res.body = _this2._parseDat(res.text);\n                _this2.posts = _this2.posts.concat(res.body);\n\n                _this2._setPostsNo();\n\n                _this2._setTitle();\n\n                resolve(res);\n                break;\n\n              case 304:\n                // Not Modified\n                res.body = [];\n                resolve(res);\n                break;\n\n              default:\n                res.body = [];\n                resolve(res);\n                break;\n            }\n          }\n        });\n      });\n    } // datファイルをパースしてPostの配列を返す  \n\n  }, {\n    key: \"_parseDat\",\n    value: function _parseDat(dat) {\n      var _this3 = this;\n\n      return dat.split(\"\\n\").map(function (line) {\n        line = line.split(\"<>\"); // 空行のとき\n\n        if (!line[0] && !line[1] && !line[2]) return null;\n\n        if (js_url_parser__WEBPACK_IMPORTED_MODULE_1__[\"default\"].isShitaraba(_this3.url)) {\n          // したらば処理\n          return new js_post_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({\n            no: line[0],\n            name: line[1],\n            mail: line[2],\n            date: line[3],\n            body: line[4],\n            title: line[5],\n            id: line[6]\n          });\n        } else {\n          // 2ch互換掲示板全般処理\n          var id = line[2];\n\n          if (id.match(/ID:.+/)) {\n            id = id.match(/ID:.+/)[0];\n          } else if (id.match(/BE:.+/)) {\n            id = id.match(/BE:.+/)[0];\n          }\n\n          return new js_post_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({\n            no: \"\",\n            name: line[0],\n            mail: line[1],\n            date: line[2].replace(/\\sID:.+/, \"\").replace(/\\sBE:.+/, \"\"),\n            body: line[3],\n            title: line[4],\n            id: id\n          });\n        }\n      }).filter(function (post) {\n        // 空行を削除\n        return post;\n      });\n    } // レス番を付与\n\n  }, {\n    key: \"_setPostsNo\",\n    value: function _setPostsNo() {\n      if (!js_url_parser__WEBPACK_IMPORTED_MODULE_1__[\"default\"].isShitaraba(this.url)) {\n        this.posts = this.posts.map(function (post, index) {\n          post.no = Number(index) + 1;\n          return post;\n        });\n      }\n    } // スレッド名をセット\n\n  }, {\n    key: \"_setTitle\",\n    value: function _setTitle() {\n      if (this.posts.length > 0) this.title = this.posts[0].title;\n    }\n  }, {\n    key: \"toJson\",\n    get: function get() {\n      return JSON.stringify({\n        title: this.title,\n        url: this.url,\n        datUrl: this.datUrl,\n        headers: this.headers,\n        posts: this.posts\n      });\n    } // postsをJSON形式で取得  \n\n  }, {\n    key: \"postsToJson\",\n    get: function get() {\n      return JSON.stringify(this.posts);\n    } // 全レスを取得するプロミスを返す\n\n  }, {\n    key: \"allPostsPromise\",\n    get: function get() {\n      var _this4 = this;\n\n      return new Promise(function (resolve, reject) {\n        var charCode = js_url_parser__WEBPACK_IMPORTED_MODULE_1__[\"default\"].isShitaraba(_this4.url) ? 'EUC-JP' : 'Shift_JIS';\n        superagent__WEBPACK_IMPORTED_MODULE_0___default.a.get(_this4.datUrl).charset(charCode).timeout(5000).end(function (err, res) {\n          if (err) {\n            reject(err);\n          } else {\n            switch (res.statusCode) {\n              case 200:\n                // レスポンスヘッダ保存\n                _this4.headers.lastMofied = res.headers['last-modified'];\n                _this4.headers.contentLength = Number(res.headers['content-length']);\n                _this4.posts = res.body = _this4._parseDat(res.text);\n\n                _this4._setPostsNo();\n\n                _this4._setTitle();\n\n                resolve(res);\n                break;\n\n              default:\n                res.body = [];\n                resolve(res);\n                break;\n            }\n          }\n        });\n      });\n    } // 新着レスを取得するプロミスを返す\n\n  }, {\n    key: \"newPostsPromise\",\n    get: function get() {\n      return js_url_parser__WEBPACK_IMPORTED_MODULE_1__[\"default\"].isShitaraba(this.url) ? this._getNewPostsFromShitarabaPromise() : this._getNewPostsByRangePromise();\n    }\n  }]);\n\n  return Thread;\n}();\n\n\n\n//# sourceURL=webpack:///./src/js/thread.js?");

/***/ }),

/***/ "./src/js/url_parser.js":
/*!******************************!*\
  !*** ./src/js/url_parser.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return UrlParser; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n// 掲示板仕様ごとのURLにパースするクラス\nvar UrlParser =\n/*#__PURE__*/\nfunction () {\n  function UrlParser() {\n    _classCallCheck(this, UrlParser);\n  }\n\n  _createClass(UrlParser, null, [{\n    key: \"getSubjectUrl\",\n    // subject.txtのURLを返す\n    value: function getSubjectUrl(boardUrl) {\n      return UrlParser.convertUrl(boardUrl) + '/subject.txt';\n    } // スレッドURLからDATファイルURLを取得\n\n  }, {\n    key: \"getDatUrl\",\n    value: function getDatUrl(threadUrl) {\n      threadUrl = this.convertUrl(threadUrl);\n\n      if (UrlParser.isShitaraba(threadUrl)) {\n        return threadUrl.replace(/read.cgi/, \"rawmode.cgi\");\n      } else {\n        var url = threadUrl.split(\"/\");\n        return \"\".concat(url[0], \"//\").concat(url[2], \"/\").concat(url[5], \"/dat/\").concat(url[6], \".dat\");\n      }\n    } // 板URLとスレッドキーからスレッドURLを取得\n\n  }, {\n    key: \"getThreadUrl\",\n    value: function getThreadUrl(boardUrl, threadKey) {\n      boardUrl = this.convertUrl(boardUrl);\n      var uri = boardUrl.split(\"/\");\n\n      if (UrlParser.isShitaraba(boardUrl)) {\n        return \"\".concat(uri[0], \"//\").concat(uri[2], \"/bbs/read.cgi/\").concat(uri[3], \"/\").concat(uri[4], \"/\").concat(threadKey.split(\".\")[0]);\n      } else {\n        return \"\".concat(uri[0], \"//\").concat(uri[2], \"/test/read.cgi/\").concat(uri[3], \"/\").concat(threadKey.split(\".\")[0]);\n      }\n    } // URLから板のURLを取得  \n\n  }, {\n    key: \"getBoardUrl\",\n    value: function getBoardUrl(url) {\n      var uri = this.convertUrl(url).split(\"/\");\n\n      if (this.isShitaraba(url)) {\n        // .cgiが出現するクエリーの位置を探す\n        var cgiIndex = uri.findIndex(function (value) {\n          if (value.match(/^\\w+\\.cgi$/i)) return true;\n        });\n\n        if (cgiIndex >= 0) {\n          var category = uri[cgiIndex + 1];\n          var boardNo = uri[cgiIndex + 2];\n          return \"\".concat(uri[0], \"//\").concat(uri[2], \"/\").concat(category, \"/\").concat(boardNo);\n        } else {\n          // .cgiが含まれない時\n          return this.convertUrl(url);\n        }\n      } else {\n        var _cgiIndex = uri.findIndex(function (value) {\n          if (value.match(/^\\w+\\.cgi$/i)) return true;\n        });\n\n        if (_cgiIndex >= 0) {\n          return \"\".concat(uri[0], \"//\").concat(uri[_cgiIndex - 2], \"/\").concat(uri[_cgiIndex + 1]);\n        } else {\n          return this.convertUrl(url);\n        }\n      }\n    } // したらばのURLか\n\n  }, {\n    key: \"isShitaraba\",\n    value: function isShitaraba(url) {\n      return url.includes('jbbs.');\n    } // 2ch.scのURLか  \n\n  }, {\n    key: \"isSc\",\n    value: function isSc(url) {\n      return url.includes('2ch.sc');\n    } // URLの末尾の/を削除して返す\n\n  }, {\n    key: \"convertUrl\",\n    value: function convertUrl(url) {\n      if (url.slice(-1) == '/') {\n        return url.slice(0, -1);\n      } else {\n        return url;\n      }\n    }\n  }]);\n\n  return UrlParser;\n}();\n\n\n\n//# sourceURL=webpack:///./src/js/url_parser.js?");

/***/ }),

/***/ "superagent":
/*!*****************************!*\
  !*** external "superagent" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"superagent\");\n\n//# sourceURL=webpack:///external_%22superagent%22?");

/***/ }),

/***/ "superagent-charset":
/*!*************************************!*\
  !*** external "superagent-charset" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"superagent-charset\");\n\n//# sourceURL=webpack:///external_%22superagent-charset%22?");

/***/ })

/******/ });