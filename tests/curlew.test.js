const {default: curlew} = require('../dist/curlew');

describe('Curlew', () => {
  const originalArgv = process.argv;

  afterEach(() => {
    process.argv = originalArgv;
  });

  it('should parse long-form arguments', () => {
    process.argv = ['node', 'test.js', '--name', 'Alice', '--age', '30'];

    const args = curlew.init();

    expect(args).toEqual({name: 'Alice', age: '30', _: []});
  });

  it('should parse short-form arguments', () => {
    process.argv = ['node', 'test.js', '-n', 'Alice', '-a', '30'];

    const args = curlew.init();

    expect(args).toEqual({n: 'Alice', a: '30', _: []});
  });

  it('should handle flag arguments', () => {
    process.argv = ['node', 'test.js', '--verbose', '-v'];

    const args = curlew.init();

    expect(args).toEqual({verbose: true, v: true, _: []});
  });

  it('should handle default values', () => {
    process.argv = ['node', 'test.js', '--name', 'Alice'];

    const defaults = {age: 30};
    const args = curlew.init(defaults);

    expect(args).toEqual({name: 'Alice', age: 30, _: []});
  });

  it('should handle arguments without a value', () => {
    process.argv = ['node', 'test.js', '--name'];
    const args = curlew.init();

    expect(args).toEqual({name: true, _: []});
  });
});
