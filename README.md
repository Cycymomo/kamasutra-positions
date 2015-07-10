# kamasutra-positions
Get a random Kamasutra position

## install
```
$ npm install --save kamasutra-positions
```
## Usage

```js
var kamasutraPositions = require('kamasutra-positions');

kamasutraPositions.random();
//=> Classic
```

## API

### .all

Type: `array`

Top 89 kamasutra positions in alphabetical order.

### .random()

Type: `function`

Random kamasutra position.

## CLI

```
$ npm install --global kamasutra-positions
```

```
$ kamasutra-positions --help

  Examples
    $ kamasutra-positions
    Classic

    $ kamasutra-positions --all
    display all positions

  Options
    --all   Get all positions instead of a random one
```

## License
Brought to you by [SuperGallus](https://github.com/supergallus) and [Nickdouille](https://github.com/nickdouille)

MIT © [Cyril Moreau](http://sojavascript.com)