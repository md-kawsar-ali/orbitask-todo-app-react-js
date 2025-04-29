import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch } from "react-redux";
import { addTodo } from "./todoSlice";
import { toast } from "react-hot-toast";

const AddTask = () => {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [assignedTo, setAssignedTo] = useState("");
	const [priority, setPriority] = useState("");
	const [dueDate, setDueDate] = useState(new Date());

	const dispatch = useDispatch();

	const isInvalid = (field) => !field.trim();

	const handleAddTask = (e) => {
		e.preventDefault();

		if (isInvalid(title) || isInvalid(description) || isInvalid(assignedTo) || isInvalid(priority)) {
			toast.error("Please fill in all the fields!", {
				style: {
					fontWeight: "bold",
				},
			});
			return;
		}

		const payload = {
			title,
			description,
			assignedTo,
			priority,
			dueDate: dueDate.toISOString().split("T")[0],
		};

		dispatch(addTodo(payload));

		toast.success("A New Task Assigned!", {
			style: {
				fontWeight: "bold",
			},
		});

		// Reset Forms
		setTitle("");
		setDescription("");
		setAssignedTo("");
		setPriority("");
		setDueDate(new Date());

		// Close Modal
		document.getElementById("add_task").close();
	};

	return (
		<>
			<h2 className="text-2xl text-slate-300 font-bold mb-3">Add New Task</h2>
			<form onSubmit={handleAddTask} className="flex flex-col gap-4 text-white font-semibold">
				<div>
					<label id="title" className="label text-sm mb-1">
						Title
					</label>
					<input type="text" placeholder="Enter title" id="title" className="input input-lg text-base w-full focus:outline-none focus:border-indigo-500" value={title} onChange={(e) => setTitle(e.target.value)} />
				</div>

				<div>
					<label id="description" className="label text-sm mb-1">
						Description
					</label>

					<textarea placeholder="Enter description" id="description" className="textarea text-base w-full focus:outline-none focus:border-indigo-500" value={description} onChange={(e) => setDescription(e.target.value)} rows={2}></textarea>
				</div>

				<div className="grid grid-col md:grid-cols-2 gap-4">
					<div>
						<label id="assignedTo" className="label text-sm mb-1">
							Assign To
						</label>
						<select value={assignedTo} id="assignedTo" onChange={(e) => setAssignedTo(e.target.value)} className="select h-12 text-base w-full focus:outline-none focus:border-indigo-500">
							<option value="" disabled={true}>
								Team Member
							</option>
							<option value="nova">Nova</option>
							<option value="aria">Aria</option>
							<option value="zane">Zane</option>
							<option value="lyra">Lyra</option>
						</select>
					</div>

					<div>
						<label id="priority" className="label text-sm mb-1">
							Set Priority
						</label>
						<select value={priority} id="priority" onChange={(e) => setPriority(e.target.value)} className="select h-12 text-base w-full focus:outline-none focus:border-indigo-500">
							<option value="" disabled={true}>
								Set Priority
							</option>
							<option value="low">Low</option>
							<option value="medium">Medium</option>
							<option value="high">High</option>
						</select>
					</div>
				</div>

				<div>
					<label className="label text-sm mb-1">Set Deadline</label>

					<DatePicker selected={dueDate} onChange={(date) => setDueDate(date)} dateFormat="dd/MM/yyyy" className="input input-lg text-base w-full focus:outline-none focus:border-indigo-500" wrapperClassName="w-full" popperPlacement="bottom" minDate={new Date()} />
				</div>

				<div>
					<button className="btn btn-lg btn-primary text-white font-semibold mt-2 w-full shadow-none" type="submit">
						Add New Task
					</button>
				</div>
			</form>
		</>
	);
};

export default AddTask;
