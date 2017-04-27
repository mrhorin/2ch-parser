# 2ch-parser
This module is parser for 2ch which is most famous BBS in Japan.

## support
it supports some BBS compatible with 2ch.
- 2ch.sc
- open2ch.net
- jbbs.shitaraba.net

## Installation
Install with npm.
`npm install 2ch-parser`

## Usage
For example.
```javascript
const Board = require('2ch-parser').board
const Thread = require('2ch-parser').thread

var tech = new Board("http://toro.2ch.sc/tech/")
var threads = tech.fetchThreads()

var bbs = new Thread("http://toro.2ch.sc/test/read.cgi/tech/9990000001/")
var posts = bbs.fetchAllPosts()
```

## License
[GPL-2.0](https://opensource.org/licenses/GPL-2.0)

## Author
[mrhorin](https://github.com/mrhorin)
