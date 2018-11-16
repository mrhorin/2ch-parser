# 2ch-parser
[![Build Status](https://travis-ci.org/mrhorin/2ch-parser.svg?branch=master)](https://travis-ci.org/mrhorin/2ch-parser)
[![npm version](https://badge.fury.io/js/2ch-parser.svg)](https://badge.fury.io/js/2ch-parser)

This module is a parser for 2ch which is most famous BBS in Japan.

## Support
This module supports some BBS compatible with 2ch, but doesn't support 5ch.net.
- [2ch.sc](http://2ch.sc/)
- [jbbs.shitaraba.net](http://rentalbbs.shitaraba.com/)
- [open2ch.net](http://open2ch.net/)

## Installation
Install with npm.
```
npm install 2ch-parser
```

## Documentation
- [Japanese](https://github.com/mrhorin/2ch-parser/tree/master/docs/jp)
- [English](https://github.com/mrhorin/2ch-parser/tree/master/docs/en)

## Usage
The codes below try to fetch a list of threads and posts.
```javascript
import { Board } from '2ch-parser'

var board = new Board("http://toro.2ch.sc/tech/")

board.fetchThreads((res) => {
  if (res.statusCode == 200) {
    console.log(board.threads)
  }
})
```

```javascript
import { Thread } from '2ch-parser'

var thread = new Thread("http://toro.2ch.sc/test/read.cgi/tech/123456789/")

thread.fetchAllPosts((res)=>{
  if (res.statusCode == 200) {
    console.log(thread.posts)
  }
})
```

## License
[GPL-2.0](https://opensource.org/licenses/GPL-2.0)

## Author
[mrhorin](https://github.com/mrhorin)
