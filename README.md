# 2ch-parser
[![Build Status](https://travis-ci.org/mrhorin/2ch-parser.svg?branch=master)](https://travis-ci.org/mrhorin/2ch-parser)
[![npm version](https://badge.fury.io/js/stylestats.svg)](https://badge.fury.io/js/stylestats)


This module is parser for 2ch which is most famous BBS in Japan.

## Support
This module supports some BBS compatible with 2ch, but doesn't support 2ch.net.
- 2ch.sc
- open2ch.net
- jbbs.shitaraba.net

## Installation
Install with npm.
```
npm install 2ch-parser
```

## Usage
This is example that gets threads list and posts list.
```javascript
import { Board } from '2ch-parser'

var board = new Board("http://toro.2ch.sc/tech/")

board.fetchThreads((res) => {
  /*  show threads list. */
  console.log(res.body)
  console.log(board.threads)
})
```

```javascript
import { Thread } from '2ch-parser'

var thread = new Thread("http://toro.2ch.sc/test/read.cgi/tech/123456789/")

thread.fetchAllPosts((res)=>{
  /*  show posts list. */
  console.log(res.body)
  console.log(thread.posts)
})
```

## License
[GPL-2.0](https://opensource.org/licenses/GPL-2.0)

## Author
[mrhorin](https://github.com/mrhorin)
