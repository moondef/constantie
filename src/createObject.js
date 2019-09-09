const createObject = args => {
  const handler = {
    set: (target, name) => {
      throw new Error("You can't set properties to this object");
    }
  };

  return new Proxy(args, handler);
};

module.exports.createObject = createObject;
