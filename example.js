// Called script: "node example.js --firstKey firstValue --secondKey -a bar"
const defaults = {
	key: 'value'
};

const arguments = require('./curlew.js').init(defaults);
console.log(arguments);
/*
	{
		key: 'value',
		firstKey: 'firstValue',
		secondKey: true,
		a: 'bar'
	}
*/