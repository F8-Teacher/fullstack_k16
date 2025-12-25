import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
    todoList: [],
    status: "idle",
    message: "",
  },
  reducers: {
    // initTodoList: (state, action) => {
    //   state.todoList = action.payload;
    //   state.status = "success";
    // },
    // updateError: (state) => {
    //   state.status = "error";
    // },
    increment: (state, action) => {
      state.count += action.payload;
    },
    decrement: (state, action) => {
      state.count -= action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getTodos.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(getTodos.fulfilled, (state, action) => {
      state.todoList = action.payload;
      state.status = "success";
    });
    builder.addCase(getTodos.rejected, (state, action) => {
      state.status = "error";
      state.message = action.payload;
    });
  },
});

export const { increment, decrement } = counterSlice.actions;

// export const getTodos = () => {
//   return async (dispatch) => {
//     try {
//       const response = await fetch(
//         `https://jsonplaceholder.typicode.com/todos`
//       );
//       const todos = await response.json();
//       dispatch(initTodoList(todos));
//     } catch {
//       dispatch(updateError());
//     }
//   };
// };

export const getTodos = createAsyncThunk(
  "getTodos",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/todos`
      );
      if (!response.ok) {
        throw new Error("Fail to fetch");
      }
      const todos = await response.json();
      return todos;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
