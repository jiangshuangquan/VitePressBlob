# vue-class-component

- **类组件**：使用类来定义 Vue 组件，可以继承其他组件或混入其他组件的功能。

- **装饰器**：使用装饰器来添加组件选项、生命周期钩子和自定义的属性。

- **Mixins**：可以通过混入（Mixins）的方式，将共用的功能或逻辑复用到多个组件中。

- **TypeScript 支持**：完全支持 TypeScript，可以使用 TypeScript 来编写类型安全的 Vue 组件。

## Component

```js
// 判断是否是函数调用，传参时options是对象
function Component(options: ComponentOptions<Vue> | VueClass<Vue>): any {
  if (typeof options === 'function') {
    return componentFactory(options);
  }
  return function (Component: VueClass<Vue>) {
    return componentFactory(Component, options);
  };
}
```

## componentFactory

```js
export const $internalHooks = [
  'data',
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeDestroy',
  'destroyed',
  'beforeUpdate',
  'updated',
  'activated',
  'deactivated',
  'render',
  'errorCaptured', // 2.5
  'serverPrefetch' // 2.6
]

export function componentFactory (
  Component: VueClass<Vue>,
  options: ComponentOptions<Vue> = {}
): VueClass<Vue> {
  options.name = options.name || (Component as any)._componentTag || (Component as any).name
  // prototype props.
  const proto = Component.prototype
  // 遍历所有属性
  Object.getOwnPropertyNames(proto).forEach(function (key) {
    if (key === 'constructor') {
      return
    }

    // hooks 是生命周期或者特定钩子就返回
    if ($internalHooks.indexOf(key) > -1) {
      options[key] = proto[key]
      return
    }
    // 获取函数描述属性
    const descriptor = Object.getOwnPropertyDescriptor(proto, key)!
    if (descriptor.value !== void 0) {
      // methods 函数就加到方法里面
      if (typeof descriptor.value === 'function') {
        (options.methods || (options.methods = {}))[key] = descriptor.value
      } else {
        // typescript decorated data 不是函数就加入到data里面
        (options.mixins || (options.mixins = [])).push({
          data (this: Vue) {
            return { [key]: descriptor.value }
          }
        })
      }
    } else if (descriptor.get || descriptor.set) {
      // computed properties get、set添加到计算属性
      (options.computed || (options.computed = {}))[key] = {
        get: descriptor.get,
        set: descriptor.set
      }
    }
  })

  // add data hook to collect class properties as Vue instance's data
  ;(options.mixins || (options.mixins = [])).push({
    data (this: Vue) {
      return collectDataFromConstructor(this, Component)
    }
  })

  // decorate options 执行所有绑定到__decorators__的装饰器函数
  const decorators = (Component as DecoratedClass).__decorators__
  if (decorators) {
    decorators.forEach(fn => fn(options))
    delete (Component as DecoratedClass).__decorators__
  }

  // find super 查到到他的父类，调用父类extend方法
  const superProto = Object.getPrototypeOf(Component.prototype)
  const Super = superProto instanceof Vue
    ? superProto.constructor as VueClass<Vue>
    : Vue
  const Extended = Super.extend(options)

  forwardStaticMembers(Extended, Component, Super)

  if (reflectionIsSupported()) {
    copyReflectionMetadata(Extended, Component)
  }

  // 返回Extended
  return Extended
}

```

## forwardStaticMembers

```js
// 需要忽视的vue属性
const reservedPropertyNames = [
  // Unique id
  'cid',

  // Super Vue constructor
  'super',

  // Component options that will be used by the component
  'options',
  'superOptions',
  'extendOptions',
  'sealedOptions',

  // Private assets
  'component',
  'directive',
  'filter'
]

// 需要忽视的浏览器属性
const shouldIgnore = {
  prototype: true,
  arguments: true,
  callee: true,
  caller: true
}

function forwardStaticMembers (
  Extended: typeof Vue,
  Original: typeof Vue,
  Super: typeof Vue
): void {
  // We have to use getOwnPropertyNames since Babel registers methods as non-enumerable
  // 获取传入对象所有属性，包括静态方法和静态属性
  Object.getOwnPropertyNames(Original).forEach(key => {
    // Skip the properties that should not be overwritten
    // 跳过不覆盖的浏览器属性
    if (shouldIgnore[key]) {
      return
    }

    // Some browsers does not allow reconfigure built-in properties
    // 某些浏览器不允许重新配置属性
    const extendedDescriptor = Object.getOwnPropertyDescriptor(Extended, key)
    if (extendedDescriptor && !extendedDescriptor.configurable) {
      return
    }

    // 原对象上类型描述
    const descriptor = Object.getOwnPropertyDescriptor(Original, key)!

    // If the user agent does not support `__proto__` or its family (IE <= 10),
    // the sub class properties may be inherited properties from the super class in TypeScript.
    // We need to exclude such properties to prevent to overwrite
    // the component options object which stored on the extended constructor (See #192).
    // If the value is a referenced value (object or function),
    // we can check equality of them and exclude it if they have the same reference.
    // If it is a primitive value, it will be forwarded for safety.
    if (!hasProto) {
      // Only `cid` is explicitly exluded from property forwarding
      // because we cannot detect whether it is a inherited property or not
      // on the no `__proto__` environment even though the property is reserved.
      if (key === 'cid') {
        return
      }

      // 父类上属性描述
      const superDescriptor = Object.getOwnPropertyDescriptor(Super, key)

      //检查属性是否继承自父类，如果是引用类型的属性且值相同，就直接跳过处理
      if (
        !isPrimitive(descriptor.value) &&
        superDescriptor &&
        superDescriptor.value === descriptor.value
      ) {
        return
      }
    }

    // Warn if the users manually declare reserved properties
    // 如果用户手动声明保留属性，则发出警告
    if (
      process.env.NODE_ENV !== 'production' &&
      reservedPropertyNames.indexOf(key) >= 0
    ) {
      warn(
        `Static property name '${key}' declared on class '${Original.name}' ` +
        'conflicts with reserved property name of Vue internal. ' +
        'It may cause unexpected behavior of the component. Consider renaming the property.'
      )
    }

    //对属性的继承和扩展。这样，拓展后的组件类就包含了原始组件类的静态属性和方法，同时也可以自定义新的属性和方法
    Object.defineProperty(Extended, key, descriptor)
  })
}

```

## mixins

```js
export function mixins(...Ctors: VueClass<Vue>[]): VueClass<Vue> {
  return Vue.extend({ mixins: Ctors });
}
```

## collectDataFromConstructor

返回收集到的类属性的普通数据对象 plainData，该对象可以在 Vue 组件中作为 data 选项使用，实现对类属性的响应式处理。

```js
export function collectDataFromConstructor(
  vm: Vue,
  Component: VueClass<Vue>
) {
  // override _init to prevent to init as Vue instance
  const originalInit = Component.prototype._init;
  Component.prototype._init = function (this: Vue) {
    // proxy to actual vm
    const keys = Object.getOwnPropertyNames(vm);
    // 2.2.0 compat (props are no longer exposed as self properties)
    if (vm.$options.props) {
      for (const key in vm.$options.props) {
        if (!vm.hasOwnProperty(key)) {
          keys.push(key);
        }
      }
    }
    // 对所有属性做代理
    //在 Vue 组件中，data 选项中的属性会被 Vue 自动进行响应式处理，即当数据发生变化时，会自动更新视图。然而，在使用类语法定义组件时，类属性并不会自动成为响应式数据，因为 Vue 不会对类属性进行特殊处理。

    //为了让类属性也能实现响应式，这段代码的作用是在组件实例创建时，通过代理的方式，将类属性的读取和赋值操作映射到实际的响应式数据对象 vm 上。这样，当我们在组件中读取和修改类属性时，实际上是在读取和修改 vm 实例中的对应属性，从而触发 Vue 的响应式机制，实时更新视图
    keys.forEach((key) => {
      Object.defineProperty(this, key, {
        get: () => vm[key],
        set: (value) => {
          vm[key] = value;
        },
        configurable: true
      });
    });
  };

  // should be acquired class property values
  const data = new Component();

  // restore original _init to avoid memory leak (#209)
  Component.prototype._init = originalInit;

  // create plain data object
  const plainData = {};

  // 遍历new出来的对象，把所有属性添加到空对象里面
  Object.keys(data).forEach((key) => {
    if (data[key] !== undefined) {
      plainData[key] = data[key];
    }
  });

  if (process.env.NODE_ENV !== 'production') {
    if (
      !(Component.prototype instanceof Vue) &&
      Object.keys(plainData).length > 0
    ) {
      warn(
        'Component class must inherit Vue or its descendant class ' +
          'when class property is used.'
      );
    }
  }

  return plainData;
}
```
