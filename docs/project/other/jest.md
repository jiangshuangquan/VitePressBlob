## 单元测试是什么

单元测试指检查与验证软件中最小可测试单元。对于单元测试中单元定义，一般来说要根据实际情况判定其具体含义

## expect 与 test

单元测试有两个很重要的概念函数，分别是 `expect()`与 `test()`。`expect()`表示期望得到的运行结果，简称期望结果；`test()`表示测试结果是否通过预期，简称通过状态。

## toBe()

检查对象是否全等某值，类似===。

```js
test('值是否相等3', () => {
  expect(1 + 2).toBe(3); // 通过
});
```

## toBeLessThan()

检查对象是否小于某值，类似<。

```js
test('值是否小于3', () => {
  expect(1 + 2).toBeLessThan(3); // 不通过
});
```

## toBeGreaterThan()

检查对象是否大于某值，类似>。

```js
test('值是否大于3', () => {
  expect(1 + 2).toBeGreaterThan(3); // 不通过
});
```

## toBeLessThanOrEqual()

检查对象是否小于等于某值，类似<=。

```js
test('值是否小于等于3', () => {
  expect(1 + 2).toBeLessThanOrEqual(3); // 通过
});
```

## toBeGreaterThanOrEqual()

检查对象是否大于等于某值，类似>=。

```js
test('值是否大于等于3', () => {
  expect(1 + 2).toBeGreaterThanOrEqual(3); // 通过
});
```

## toBeCloseTo()

检查对象是否约等于某值，类似 ≈。

```js
test('0.1+0.2是否约等于0.3', () => {
  expect(0.1 + 0.2).toBe(0.3); // 不通过
  expect(0.1 + 0.2).toBeCloseTo(0.3); // 通过
});
```

## toEqual()

测试两个对象的值是否相等，只对比值，不对比引用地址。该函数用在引用类型中更佳，例如数组与对象。

```js
test('两数组的内容是否相等', () => {
  const arr1 = [0, 1, 2];
  const arr2 = [0, 1, 2];
  expect(arr1).toEqual(arr2); // 通过
});
```

## toBeUndefined()

检查对象是否为 undefined。

```js
test('值是否为undefined', () => {
  const val = undefined;
  expect(val).toBeUndefined(); // 通过
});
```

## toBeNull()

检查对象是否为 null。

```js
test('值是否为null', () => {
  const val = null;
  expect(val).toBeNull(); // 通过
});
```

## toBeTruthy()

检查对象转换为布尔后是否为 true。

```js
test('转换值是否为true', () => {
  expect(undefined).toBeTruthy(); // 不通过
  expect(null).toBeTruthy(); // 不通过
  expect('').toBeTruthy(); // 不通过
  expect(0).toBeTruthy(); // 不通过
  expect(false).toBeTruthy(); // 不通过
});
```

## toBeFalsy()

检查对象转换为布尔后是否为 false

```js
test('转换值是否为false', () => {
  expect(undefined).toBeFalsy(); // 通过
  expect(null).toBeFalsy(); // 通过
  expect('').toBeFalsy(); // 通过
  expect(0).toBeFalsy(); // 通过
  expect(false).toBeFalsy(); // 通过
});
```

## toMatch()

检查对象是否包括字符串或匹配正则，类似字符串的 includes()与 match()。

```js
test('值是否被匹配', () => {
  expect('https://yangzw.vip').toMatch('yangzw'); // 通过
  expect('https://yangzw.vip').toMatch(/^https/); // 通过
});
```

## toContain()

检查对象是否被数组包括，类似数组的 includes()。

```js
test('值是否被包括', () => {
  const list = [0, 1, 2];
  expect(list).toContain(1); // 通过
});
```

基本上掌握上述函数就能应付很多需求，当然想了解更多期望函数，可查看[Jest 预期函数](https://jestjs.io/zh-Hans/docs/expect)。
