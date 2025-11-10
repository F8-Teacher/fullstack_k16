const a = 10;
const b = 20;
const c = 30;
const doSomething = () => {
  console.log("doSomething");
};
//export
// - default
// - named

export default a;

export { b, c, doSomething };
