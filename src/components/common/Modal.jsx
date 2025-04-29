import React from "react";
import { Toaster } from "react-hot-toast";
import clsx from "clsx";

const Modal = ({ selector, btnText = "Open Modal", btnClass = "", children }) => {
	return (
		<>
			<button className={clsx("btn btn-primary text-base text-white font-bold shadow-none px-8 rounded-md", btnClass)} onClick={() => document.getElementById(selector).showModal()}>
				{btnText}
			</button>

			<dialog id={selector} className="modal !bg-black/70 transition-opacity duration-500 ease-in-out">
				<div className="modal-box border border-gray-700 max-h-[94vh] md:max-h-[100vh]">
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
