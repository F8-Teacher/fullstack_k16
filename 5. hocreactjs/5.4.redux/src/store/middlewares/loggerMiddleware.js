export const loggerMiddleware = (store) => {
  return (next) => {
    return (action) => {
      console.log(`store:`, store);
      console.log(`next:`, next);
      console.log(`action:`, action);
      //   const count = store.getState().counter.count;
      //   if (count >= 50) {
      //     return;
      //   }
      return next(action);
    };
  };
};
//store -> next -> action
