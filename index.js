const Constantie = args => {
  const argsType =
    typeof args === "object" && Array.isArray(args) ? "array" : "object";

  const errorText =
    argsType === "array"
      ? "You can't change elements of this array"
      : "You can't change properties of this object";

  const handler = {
    set: () => {
      throw new Error(errorText);
    },
    deleteProperty: () => {
      throw new Error(errorText);
    },
    defineProperty: () => {
      throw new Error(errorText);
    }
  };

  return new Proxy(args, handler);
};

module.exports = Constantie;
