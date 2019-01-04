
# curlew.js
`curlew.js` is a simple arguments parser in NodeJS.

 - [Installation](#installation)
	 - [NPM](#with-npm-recommended)
	 - [Git](#with-git)
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
	// Called script: "node foo.js --firstKey firstValue --secondKey -a bar"
	const defaults = {
		key: 'value'
	};
	
	const arguments = require('curlew.js').init(defaults);
	console.log(arguments);
	/*
		{
			key: 'value',
			firstKey: 'firstValue',
			secondKey: true,
			a: 'bar'
		}
	*/

## Options
|Name|Informations|
|--|--|
|default`(Object)`|Default values *(optionnal)*|
