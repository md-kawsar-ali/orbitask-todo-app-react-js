import { Link } from "react-router-dom";

const NotFound = () => {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen bg-base-200 p-4 text-center">
			<div className="max-w-md">
				<h1 className="text-7xl font-bold text-error">404</h1>
				<h2 className="text-2xl md:text-3xl font-semibold mt-4">Oops! Page not found.</h2>
				<p className="text-base-content mt-2">The page you're looking for doesn't exist or has been moved.</p>
				<Link to="/" className="btn btn-primary text-base text-white font-semibold shadow-none mt-6">
					Back to Home
				</Link>
			</div>
		</div>
	);
};

export default NotFound;
