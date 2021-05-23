function nouveau (Constructor) {
    // 1 - Create a new instance using the prototype of the Constructor.
    const instance = Object.create(Constructor.prototype);
    // 2 - Get the optional argument from the function call.
    const args = Array.prototype.slice.call(arguments, 1);
    // 3 - Call the constructor using args in place of instance. So `this` will be the instance.
    const constructor = Constructor.apply(instance, args);

    // 4 - If the constructor returned an object or function return that.
    if (
      constructor &&
      (
        typeof constructor === 'function' ||
        typeof constructor === 'object'
      )
    ) return constructor;

    // 5 - Return the created instance
    return instance;
}
