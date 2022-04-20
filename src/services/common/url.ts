const build = (...args: any[]) => {
  const arr = Array.from(args);
  return arr.join('/');
};

export { build };
export default {};
