import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [];

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: {
      reducer: (state, action) => {
        state.push(action.payload);
      },
      prepare: ({ title, description, assignedTo, priority, dueDate }) => ({
        payload: {
          id: nanoid(),
          title,
          description,
          assignedTo,
          assignedBy: "admin_1", // Static for Now
          priority, // low | medium | High
          dueDate,
          createdAt: new Date().toISOString().split("T")[0],
          status: "pending", // pending | ongoing | completed
        },
      }),
    },
  },
});

export const { addTodo } = todoSlice.actions;
export default todoSlice.reducer;
