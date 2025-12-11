# curlew.js

`curlew.js` is a simple arguments parser in NodeJS.

- [curlew.js](#curlewjs)
- [Installation](#installation)
  - [With NPM (recommended)](#with-npm-recommended)
  - [With Git](#with-git)
- [Usage](#usage)
  - [Import](#import)
  - [Example](#example)
  - [Options](#options)

# Installation

## With NPM (recommended)

`npm install curlew.js --save`

## With Git

`git clone https://github.com/Treast/curlew.js.git`
`mv ./curlew.js/curlew.js ./foo/bar`

# Usage

## Import

`const arguments = require('curlew.js').init();'`

## Example

```js
// Called script: "node example.js --firstKey firstValue --secondKey -a bar baz"
import curlew from './curlew';

const defaults = {
  key: 'value',
};

const args = curlew.init(defaults);
console.log(args);
/*
	{
		key: 'value',
		_: [ 'baz' ],
		firstKey: 'firstValue',
		secondKey: true,
		a: 'bar'
	}
	*/
```

## Options

| Name              | Informations                 |
| ----------------- | ---------------------------- |
| default`(Object)` | Default values _(optionnal)_ |
