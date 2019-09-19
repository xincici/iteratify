
> Written with [StackEdit](https://stackedit.io/).

## install ##

```shell
npm i iteratify --save
```
OR
```shell
yarn add iteratify
```

## usage ##

```javascript
const iteratify = require('iteratify');
let obj = {
	a: 1,
	b: /asd/,
	c: 'str'
};
iteratify(obj)
//or
obj = iteratify(obj);
console.log([...obj]);
// output
[
	{key: 'a', value: 1},
	{key: 'b', value: /asd/},
	{key: 'c', value: 'str'}
]
```

```javascript
const iteratify = require('iteratify');
let obj = {
	a: 1,
	b: /asd/,
	c: 'str'
};
iteratify(obj, {labelKey: 'k', labelValue: 'v'});
console.log([...obj]);
// output
[
	{k: 'a', v: 1},
	{k: 'b', v: /asd/},
	{k: 'c', v: 'str'}
]
```
