# 2ch-parser
This module is parser for 2ch which is most famous BBS in Japan.

## Support
it supports some BBS compatible with 2ch, but doesn't support 2ch.net.
- 2ch.sc
- open2ch.net
- jbbs.shitaraba.net

## Installation
Install with npm.
```
npm install 2ch-parser
```

## Usage
If you want to get threads list from board URL, it insert into Board object, then return threads array.
```javascript
import {Board} from '2ch-parser'

var tech = new Board("http://toro.2ch.sc/tech/")
var threads = tech.fetchThreads()
```

If you want to get posts list from thread URL, it insert into Thread object, then return posts array.
```javascript
import {Thread} from '2ch-parser'

var bbs = new Thread("http://toro.2ch.sc/test/read.cgi/tech/9990000001/")
var posts = bbs.fetchAllPosts()
```

If you want to also get new arrived posts after get posts in Thread, you should use fetchNewPosts function.
```javascript
import {Thread} from '2ch-parser'

var bbs = new Thread("http://toro.2ch.sc/test/read.cgi/tech/9990000001/")
var posts = bbs.fetchAllPosts()

var newPosts = bbs.fetchNewPosts()
```

## License
[GPL-2.0](https://opensource.org/licenses/GPL-2.0)

## Author
[mrhorin](https://github.com/mrhorin)
