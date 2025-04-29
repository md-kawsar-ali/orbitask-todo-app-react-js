import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
	{
		id: "task_001",
		title: "Design Landing Page",
		description: "Create the initial wireframes and layout for the new landing page.",
		assignedTo: "designer_3",
		assignedBy: "admin_1",
		priority: "high",
		dueDate: "2025-05-10",
		createdAt: "2025-04-29",
		status: "pending",
	},
	{
		id: "task_002",
		title: "Setup Database Schema",
		description: "Define and implement schema for user authentication and task management.",
		assignedTo: "dev_backend_2",
		assignedBy: "admin_1",
		priority: "medium",
		dueDate: "2025-05-07",
		createdAt: "2025-04-29",
		status: "ongoing",
	},
	{
		id: "task_003",
		title: "QA Test Signup Flow",
		description: "Perform testing on the user signup and validation flows across devices.",
		assignedTo: "qa_1",
		assignedBy: "admin_1",
		priority: "low",
		dueDate: "2025-05-12",
		createdAt: "2025-04-29",
		status: "completed",
	},
];

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
