import React from "react";
import Header from "../../components/widgets/Header";

const MyTasks = () => {
	return (
		<>
			<Header title="My Tasks" />

			<div className="px-5 py-8 md:px-8">
				<p>Here is my all tasks!</p>
			</div>
		</>
	);
};

export default MyTasks;
