export const thunkMiddleware = (store) => {
  return (next) => {
    return (action) => {
      if (typeof action === "function") {
        return action(store.dispatch, store.getState);
      }
      return next(action);
    };
  };
};

//Tách hàm (Action creator)
export const getTodos = () => {
  //this
  return async (dispatch, getState) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos`);
    const todos = await response.json();
    dispatch({
      type: "todos/init-data",
      payload: todos,
    });
  };
};
