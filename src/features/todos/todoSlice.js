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
		priority: "high",
		dueDate: "2025-05-12",
		createdAt: "2025-04-29",
		status: "completed",
	},
	{
		id: "task_004",
		title: "Integrate Payment Gateway",
		description: "Integrate Stripe for secure and scalable payment processing.",
		assignedTo: "dev_backend_3",
		assignedBy: "admin_1",
		priority: "medium",
		dueDate: "2025-05-11",
		createdAt: "2025-04-29",
		status: "pending",
	},
	{
		id: "task_005",
		title: "Prepare Marketing Copy",
		description: "Draft compelling headlines and product descriptions for the homepage.",
		assignedTo: "content_2",
		assignedBy: "admin_1",
		priority: "low",
		dueDate: "2025-05-08",
		createdAt: "2025-04-29",
		status: "pending",
	},
	{
		id: "task_006",
		title: "Deploy Staging Environment",
		description: "Set up CI/CD pipeline and deploy the latest build to staging.",
		assignedTo: "devops_1",
		assignedBy: "admin_1",
		priority: "high",
		dueDate: "2025-05-06",
		createdAt: "2025-04-29",
		status: "ongoing",
	},
	{
		id: "task_007",
		title: "Accessibility Review",
		description: "Ensure WCAG compliance for all UI components.",
		assignedTo: "designer_1",
		assignedBy: "admin_1",
		priority: "low",
		dueDate: "2025-05-14",
		createdAt: "2025-04-29",
		status: "completed",
	},
	{
		id: "task_008",
		title: "User Feedback Survey",
		description: "Design and distribute survey for collecting beta tester feedback.",
		assignedTo: "marketing_1",
		assignedBy: "admin_1",
		priority: "medium",
		dueDate: "2025-05-09",
		createdAt: "2025-04-29",
		status: "ongoing",
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
