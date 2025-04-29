import React from "react";
import { Toaster } from "react-hot-toast";

const Modal = ({ selector, btnText = "Open Modal", children }) => {
	return (
		<>
			<button className="btn btn-primary text-base text-white font-bold shadow-none px-8 rounded-md" onClick={() => document.getElementById(selector).showModal()}>
				{btnText}
			</button>
			<dialog id={selector} className="modal">
				<div className="modal-box max-h-[94vh] md:max-h-[100vh]">
					<form method="dialog">
						<button className="btn px-3 btn-lg bg-transparent shadow-none border-none absolute right-2 top-2">✕</button>
					</form>

					{children}
				</div>

				<Toaster />
			</dialog>
		</>
	);
};

export default Modal;
