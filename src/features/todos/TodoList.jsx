import React from "react";
import { useSelector } from "react-redux";
import TodoCard from "./TaskCard";

const TodoList = () => {
	const todos = useSelector((state) => state.todos);

	const pendingTodos = todos?.filter((todo) => todo.status === "pending");
	const ongoingTodos = todos?.filter((todo) => todo.status === "ongoing");
	const completedTodos = todos?.filter((todo) => todo.status === "completed");

	return (
		<div className="grid grid-cols md:grid-cols-3 gap-7">
			<div>
				<div className="flex justify-between items-center bg-violet-600 text-white rounded-lg py-5 px-6">
					<div>
						<svg width="2rem" height="2rem" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M16.5 17H21.5L16.5 22H21.5M21.9506 13C21.9833 12.6711 22 12.3375 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C12.1677 22 12.3344 21.9959 12.5 21.9877C12.6678 21.9795 12.8345 21.9671 13 21.9506M12 6V12L15.7384 13.8692" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
						</svg>
						<h3 className="text-xl font-bold mt-2">Pending Tasks</h3>
					</div>

					<h4 className="text-4xl md:text-5xl font-bold">{pendingTodos.length === 0 ? "0" : pendingTodos.length.toString().padStart(2, "0")}</h4>
				</div>

				<div className="grid grid-col gap-7 mt-7">
					{pendingTodos?.map((todo) => (
						<TodoCard key={todo.id} {...todo} />
					))}
				</div>
			</div>

			<div>
				<div className="flex justify-between items-center bg-blue-600 text-white rounded-lg py-5 px-6">
					<div>
						<svg width="2rem" height="2rem" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M13 2L4.09344 12.6879C3.74463 13.1064 3.57023 13.3157 3.56756 13.4925C3.56524 13.6461 3.63372 13.7923 3.75324 13.8889C3.89073 14 4.16316 14 4.70802 14H12L11 22L19.9065 11.3121C20.2553 10.8936 20.4297 10.6843 20.4324 10.5075C20.4347 10.3539 20.3663 10.2077 20.2467 10.1111C20.1092 10 19.8368 10 19.292 10H12L13 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
						</svg>
						<h3 className="text-xl font-bold mt-2">Ongoing Tasks</h3>
					</div>

					<h4 className="text-4xl md:text-5xl font-bold">{ongoingTodos.length === 0 ? "0" : ongoingTodos.length.toString().padStart(2, "0")}</h4>
				</div>

				<div className="grid grid-col gap-7 mt-7">
					{ongoingTodos?.map((todo) => (
						<TodoCard key={todo.id} {...todo} />
					))}
				</div>
			</div>

			<div>
				<div className="flex justify-between items-center bg-green-600 text-white rounded-lg py-5 px-6">
					<div>
						<svg width="2rem" height="2rem" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M7.5 12L10.5 15L16.5 9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
						</svg>
						<h3 className="text-xl font-bold mt-2">Completed Tasks</h3>
					</div>

					<h4 className="text-4xl md:text-5xl font-bold">{completedTodos.length === 0 ? "0" : completedTodos.length.toString().padStart(2, "0")}</h4>
				</div>

				<div className="grid grid-col gap-7 mt-7">
					{completedTodos?.map((todo) => (
						<TodoCard key={todo.id} {...todo} />
					))}
				</div>
			</div>
		</div>
	);
};

export default TodoList;
