import React from "react";
import Header from "../../components/widgets/Header";
import Modal from "../../components/common/Modal";
import AddTask from "../../features/todos/AddTask";
import TodoList from "../../features/todos/TodoList";

const DashboardHome = () => {
	return (
		<>
			<Header title="All Tasks">
				<Modal selector="add_task" btnText="Add Task">
					<AddTask />
				</Modal>
			</Header>

			<div className="px-5 md:px-8">
				<TodoList />
			</div>
		</>
	);
};

export default DashboardHome;
