const createObject = args => {
  const handler = {
    set: () => {
      throw new Error("You can't set properties to this object");
    },
    deleteProperty: () => {
      throw new Error("You can't delete properties of this object");
    },
    defineProperty: () => {
      throw new Error("You can't define properties for this object");
    }
  };

  return new Proxy(args, handler);
};

module.exports.createObject = createObject;
