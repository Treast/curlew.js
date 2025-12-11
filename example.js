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
