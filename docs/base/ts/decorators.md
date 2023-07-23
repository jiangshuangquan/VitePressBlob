# 装饰器

装饰器是一种特殊的声明，可以附加到类声明、方法、访问器、属性或参数。装饰器使用形式 @expression ，其中 expression 必须计算一个函数，该函数将在运行时调用，其中包含有关修饰声明的信息。

本质上是工厂函数，它可以在不修改代码自身的前提下，给已有代码增加额外的行为

## 启用

Command Line: 命令行：

```js
tsc --target ES5 --experimentalDecorators
```

或者`tsconfig.json` 配置

```js
{
  "compilerOptions": {
    "target": "ES5",
    "experimentalDecorators": true
  }
}
```

## 装饰器执行

可以将多个修饰器应用于一个声明，例如在一行上：

```js
@f @g x
```

在多行上：

```js
@f
@g
x
```

当多个装饰器应用于单个声明时，它们的计算类似于数学中的函数组合。在此模型中，当组合函数 `f` 和 `g` 时，生成的复合 `（f ∘ g）（x）` 等价于 `f（g（x））`。

- 每个修饰器的表达式都是从上到下计算的。
- 然后将结果作为从下到上的函数调用。

```js
function first() {
  console.log('first(): factory evaluated');
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log('first(): called');
  };
}

function second() {
  console.log('second(): factory evaluated');
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log('second(): called');
  };
}

class ExampleClass {
  @first()
  @second()
  method() {}
}
```

执行结果

```js
first(): factory evaluated
second(): factory evaluated
second(): called
first(): called
```

::: details 原理

```js
var __decorate =
  (this && this.__decorate) ||
  function (decorators, target, key, desc) {
    var c = arguments.length,
      r =
        c < 3
          ? target
          : desc === null
          ? (desc = Object.getOwnPropertyDescriptor(target, key))
          : desc,
      d;
    if (
      typeof Reflect === 'object' &&
      typeof Reflect.decorate === 'function'
    )
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if ((d = decorators[i]))
          r =
            (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) ||
            r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
function first() {
  console.log('first(): factory evaluated');
  return function (target, propertyKey, descriptor) {
    console.log('first(): called');
  };
}
function second() {
  console.log('second(): factory evaluated');
  return function (target, propertyKey, descriptor) {
    console.log('second(): called');
  };
}
class ExampleClass {
  method() {}
}
__decorate([first(), second()], ExampleClass.prototype, 'method', null);
```

:::

## 装饰器在类内部不同声明上的应用顺序

1. 参数修饰器（`Parameter Decorators`）：首先应用于每个实例成员的参数（方法或属性）。
2. 方法、访问器或属性修饰器（`Method`, `Accessor`, `or Property Decorators`）：接着应用于每个实例成员的方法、访问器或属性。
3. 参数修饰器（`Parameter Decorators`）：紧接着应用于每个静态成员的参数（静态方法或静态属性）。
4. 方法、访问器或属性修饰器（`Method`, `Accessor`, `or Property Decorators`）：然后应用于每个静态成员的方法、访问器或属性。
5. 参数修饰器（`Parameter Decorators`）：然后应用于构造函数的参数。
6. 类修饰器（`Class Decorators`）：最后应用于整个类。

::: details

```js
// 类装饰器
function ClassDecorator1(target: any) {
  console.log('类装饰器1');
}

// 属性装饰器
function PropertyDecorator1(target: any, key: string) {
  console.log('属性装饰器1', key);
}

function PropertyDecorator2(target: any, key: string) {
  console.log('静态属性装饰器2', key);
}

// 方法装饰器
function MethodDecorator1(
  target: any,
  key: string,
  descriptor: PropertyDescriptor
) {
  console.log('方法装饰器1', key);
}

function MethodDecorator2(
  target: any,
  key: string,
  descriptor: PropertyDescriptor
) {
  console.log('静态方法装饰器2', key);
}

// 访问器装饰器
function GetterDecorator1(
  target: any,
  key: string,
  descriptor: PropertyDescriptor
) {
  console.log('访问器装饰器1', key);
}

function GetterDecorator2(
  target: any,
  key: string,
  descriptor: PropertyDescriptor
) {
  console.log('静态访问器装饰器2', key);
}

// 参数装饰器
function ParameterDecorator1(target: any, key: string, index: number) {
  console.log('参数装饰器1', key, index);
}

function ParameterDecorator2(target: any, key: string, index: number) {
  console.log('静态参数装饰器2', key, index);
}

@ClassDecorator1
class Example {
  @PropertyDecorator1
  someProperty: number = 42;

  @PropertyDecorator2
  static someProperty: number = 42;

  @MethodDecorator1
  someMethod(@ParameterDecorator1 arg1: string, arg2: number) {
    return arg1 + arg2;
  }

  @MethodDecorator2
  static someMethod(@ParameterDecorator2 arg1: string, arg2: number) {
    return arg1 + arg2;
  }

  @GetterDecorator1
  get value() {
    return this.someProperty;
  }
  @GetterDecorator2
  static get value() {
    return this.someProperty;
  }
}

// 属性装饰器1 someProperty
// 参数装饰器1 someMethod 0
// 方法装饰器1 someMethod
// 访问器装饰器1 value
// 静态属性装饰器2 someProperty
// 静态参数装饰器2 someMethod 0
// 静态方法装饰器2 someMethod
// 静态访问器装饰器2 value
// 类装饰器1
```

::: tip
属性和方法打印顺序会随着写法调整
:::

## 装饰器写法

传参

```js
function parameterizedDecorator(arg) {
  return function (target) {
    // decorator logic here using arg
  };
}

@parameterizedDecorator('some argument')
class MyClass {
  // class definition
}
```

不传参

```js
function simpleDecorator(target) {
  // decorator logic here
}

@simpleDecorator
class MyClass {
  // class definition
}
```

> 传参写法实际上就是执行之后再返回不传参的装饰器

## 类装饰器

**参数**：

- constructor： 类的构造函数

::: tip 类装饰器的表达式将在运行时作为函数调用，修饰类的构造函数作为其唯一参数。
:::

**使用场景**：

1. 元数据添加： 类装饰器可以用于添加元数据（metadata）到类。元数据是关于类的附加信息，它可以在运行时用于处理类的行为。

2. 类行为观察： 类装饰器可以观察类的行为。通过类装饰器，你可以在类被实例化之前拦截类的构造函数，并查看类的定义和属性。

3. 类行为修改： 类装饰器可以修改类的行为。你可以在类装饰器中对类的构造函数或原型进行修改，添加新的方法或属性，或者修改现有的方法或属性。

4. 类继承： 类装饰器可以用于实现类继承。你可以在类装饰器中返回一个新的构造函数，从而替换原来的类定义，实现类继承的效果。

5. 切面编程： 类装饰器可以用于实现切面编程。通过类装饰器，你可以在类的方法调用前后插入额外的逻辑，实现日志记录、性能监控、权限检查等功能。

6. 类实例化限制： 类装饰器可以用于限制类的实例化。你可以在类装饰器中对类的构造函数进行检查，根据条件决定是否允许实例化类。

::: warning 如果选择返回新的构造函数，则必须注意维护对象原型
:::

**简单示例**：重写构造函数

```js
function reportableClassDecorator<T extends { new (...args: any[]): {} }>(constructor: T) {
  return class extends constructor {
    reportingURL = "http://www...";
  };
}

@reportableClassDecorator
class BugReport {
  type = "report";
  title: string;

  constructor(t: string) {
    this.title = t;
  }
}

const bug = new BugReport("Needs dark mode");
console.log(bug.title); // Prints "Needs dark mode"
console.log(bug.type); // Prints "report"
// 注意，装饰器不会改变 TypeScript 的类型，
// 所以新添加的属性 reportingURL 不会在类型系统中被识别。
bug.reportingURL; // Property 'reportingURL' does not exist on type 'BugReport'.
```

::: details 原理

```js
var __decorate =
  (this && this.__decorate) ||
  function (decorators, target, key, desc) {
    var c = arguments.length,
      r =
        c < 3
          ? target
          : desc === null
          ? (desc = Object.getOwnPropertyDescriptor(target, key))
          : desc,
      d;
    if (
      typeof Reflect === 'object' &&
      typeof Reflect.decorate === 'function'
    )
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if ((d = decorators[i]))
          r =
            (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) ||
            r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
function reportableClassDecorator(constructor) {
  return class extends constructor {
    constructor() {
      super(...arguments);
      this.reportingURL = 'http://www...';
    }
  };
}
let BugReport = class BugReport {
  constructor(t) {
    this.type = 'report';
    this.title = t;
  }
};
BugReport = __decorate([reportableClassDecorator], BugReport);
const bug = new BugReport('Needs dark mode');
console.log(bug.title); // Prints "Needs dark mode"
console.log(bug.type); // Prints "report"
```

:::

**切面编程**：日志记录

```js
// 类装饰器，实现切面编程：日志记录
function logClass(target: any) {
  // 获取类的原型对象
  const classPrototype = target.prototype;

  // 保存原始方法的引用
  const originalMethods: Record<string, Function> = {};

  // 获取类的所有自身属性（包括方法和非方法）
  const properties = Object.getOwnPropertyNames(classPrototype);

  // 遍历类的所有自身属性
  for (const property of properties) {
    const value = classPrototype[property];
    if (typeof value === 'function') {
      // 保存原始方法的引用
      originalMethods[property] = value;

      // 修改类的方法，在执行前后添加日志记录
      classPrototype[property] = function (...args: any[]) {
        console.log(`Calling method ${property} with arguments: ${args}`);
        const result = originalMethods[property].apply(this, args);
        console.log(`Method ${property} returned: ${result}`);
        return result;
      };
    }
  }
}

@logClass
class Calculator {
  add(a: number, b: number) {
    return a + b;
  }

  subtract(a: number, b: number) {
    return a - b;
  }
}

const calculator = new Calculator();
const sum = calculator.add(3, 5);
const difference = calculator.subtract(7, 2);
```

## 方法装饰器

**参数**：

- `target`： 被装饰方法所属的类的原型对象
- `key`： 被装饰方法的名称。
- `descriptor`： 属性描述符对象，包含被装饰方法的属性特性，如方法的 `value`（函数本身）、`writable`（是否可写）、`enumerable`（是否可枚举）和 `configurable`（是否可配置）等

```js
// 方法装饰器：日志记录
function logMethod(
  target: any,
  key: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args: any[]) {
    console.log(`Calling method ${key} with arguments: ${args}`);
    const result = originalMethod.apply(this, args);
    console.log(`Method ${key} returned: ${result}`);
    return result;
  };

  return descriptor;
}

class Calculator {
  @logMethod
  add(a: number, b: number) {
    return a + b;
  }
}

const calculator = new Calculator();
const sum = calculator.add(3, 5);
// Output:
// Calling method add with arguments: 3,5
// Method add returned: 8
```

## 访问器装饰器

参数和方法装饰器一样

::: warning 注意 `TypeScript` 不允许同时修饰单个成员的 `get` 和 `set` 访问器。相反，成员的所有修饰符必须应用于按文档顺序指定的第一个访问器。这是因为修饰器适用于属性描述符，该描述符将 `get and set` 访问器组合在一起，而不是分别组合每个声明。
:::

```js
// 访问器装饰器：属性访问记录
function logPropertyAccess(target: any, key: string, descriptor: PropertyDescriptor) {
    const getter = descriptor.get;
    const setter = descriptor.set;

    descriptor.get = function () {
      console.log(`Getting property ${key}`);
      return getter?.call(this);
    };

    descriptor.set = function (value: any) {
      console.log(`Setting property ${key} to ${value}`);
      setter?.call(this, value);
    };

    return descriptor;
  }

  class Example {
    private _value: number = 0;

    @logPropertyAccess
    get value() {
      return this._value;
    }

    set value(newValue: number) {
      this._value = newValue;
    }
  }

  const example = new Example();
  console.log(example.value); // Output: Getting property value, 0
  example.value = 42; // Output: Setting property value to 42

```

## 属性装饰器

**参数**：

- `target`： 被装饰方法所属的类的原型对象
- `key`： 被装饰方法的名称。

```js
// 属性装饰器：将属性设置为只读
function readOnly(target: any, key: string) {
  // 使用 Object.defineProperty 来定义属性的特性
  Object.defineProperty(target, key, {
    writable: false
  });
}

class Example {
  @readOnly
  someProperty: number = 42;
}

const example = new Example();
console.log(example.someProperty); // Output: 42

// 尝试修改只读属性，将会导致运行时错误
example.someProperty = 100; // Error: Cannot assign to read only property 'someProperty' of object '#<Example>'
```

私有云项目里路由与查询条件的同步变化就是应用的属性装饰器

## 参数的装饰器

使用场景较少，大多是用于日志记录

**参数**：

- `target`： 被装饰参数所属的类的原型对象（静态成员的情况下为类的构造函数）
- `key`： 被装饰参数所属的方法名或 undefined（如果参数是构造函数的参数则为 undefined）。
- `parameterIndex`： 被装饰参数在函数参数列表中的索引。

## 元数据

::: warning 注意 装饰器元数据是一项实验性功能，可能会在将来的版本中引入重大更改。
:::
