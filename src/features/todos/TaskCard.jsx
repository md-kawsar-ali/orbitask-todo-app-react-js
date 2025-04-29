import React from "react";

const TaskCard = ({ id, title, description, assignedTo, assignedBy, priority, dueDate, createdAt, status }) => {
	return (
		<div className="bg-gray-800 border border-slate-700 rounded-lg relative">
			<h2 className="text-lg font-semibold border-b border-slate-700 leading-[1.5] py-4 px-5 pe-[100px]">{title}</h2>
			<div className="py-5 px-5">
				<p className="font-medium text-slate-200">{description}</p>
			</div>

			<div className="flex justify-between items-center py-3 px-5 border-t border-slate-700">
				<div className="flex items-center gap-2">
					<svg width="1.2rem" height="1.2rem" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M21 10H3M16 2V6M8 2V6M7.8 22H16.2C17.8802 22 18.7202 22 19.362 21.673C19.9265 21.3854 20.3854 20.9265 20.673 20.362C21 19.7202 21 18.8802 21 17.2V8.8C21 7.11984 21 6.27976 20.673 5.63803C20.3854 5.07354 19.9265 4.6146 19.362 4.32698C18.7202 4 17.8802 4 16.2 4H7.8C6.11984 4 5.27976 4 4.63803 4.32698C4.07354 4.6146 3.6146 5.07354 3.32698 5.63803C3 6.27976 3 7.11984 3 8.8V17.2C3 18.8802 3 19.7202 3.32698 20.362C3.6146 20.9265 4.07354 21.3854 4.63803 21.673C5.27976 22 6.11984 22 7.8 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
					</svg>

					<span className="font-medium text-slate-200">{dueDate}</span>
				</div>

				<div className="flex items-center gap-2">
					<svg width="1.2rem" height="1.2rem" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M5.3163 19.4384C5.92462 18.0052 7.34492 17 9 17H15C16.6551 17 18.0754 18.0052 18.6837 19.4384M16 9.5C16 11.7091 14.2091 13.5 12 13.5C9.79086 13.5 8 11.7091 8 9.5C8 7.29086 9.79086 5.5 12 5.5C14.2091 5.5 16 7.29086 16 9.5ZM22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
					</svg>

					<span className="font-medium text-slate-200">{assignedTo}</span>
				</div>
			</div>

			<div className="absolute top-4 right-4">
				{priority === "low" && <div className="badge rounded-full py-3 font-bold badge-primary">Low</div>}
				{priority === "medium" && <div className="badge rounded-full py-3 font-bold badge-warning">Medium</div>}
				{priority === "high" && <div className="badge rounded-full py-3 font-bold badge-error">High</div>}
			</div>
		</div>
	);
};

export default TaskCard;
