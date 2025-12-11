// Called script: "node example.js --firstKey firstValue --secondKey -a bar baz"
import curlew from './curlew';

const defaults = {
	key: 'value'
};

const arguments = curlew.init(defaults);
console.log(arguments);
/*
	{
		key: 'value',
		_: [ 'baz' ],
		firstKey: 'firstValue',
		secondKey: true,
		a: 'bar'
	}
*/
