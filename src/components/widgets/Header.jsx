import React from "react";
import userImg from "../../assets/user.jpeg";

const Header = ({ title = "Welcome back!", children }) => {
	return (
		<div className="navbar border-b-1 border-slate-700 lg:px-8 lg:py-4">
			<label htmlFor="my-drawer" className="btn btn-ghost btn-circle lg:hidden">
				<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
				</svg>
			</label>

			<div className="flex-1">
				<h2 className="text-2xl text-slate-300 font-bold">{title}</h2>
			</div>

			<div className="flex gap-5">
				{children}

				<div className="dropdown dropdown-end">
					<div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
						<div className="w-12 rounded-full">
							<img alt="User Profile Picture" src={userImg} />
						</div>
					</div>
					<ul tabIndex={0} className="menu menu-md dropdown-content bg-slate-100 text-slate-800 font-medium rounded-box z-1 mt-3 w-52 p-2 shadow">
						<li>
							<a className="justify-between">My Profile</a>
						</li>
						<li>
							<a>Settings</a>
						</li>
						<li>
							<a>Logout</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Header;
