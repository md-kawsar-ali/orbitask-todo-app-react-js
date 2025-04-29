import { Routes, Route } from "react-router-dom";
import DashboardLayout from "../components/layouts/DashboardLayout";
import DashboardHome from "../pages/dashboard/DashboardHome";
import MyTasks from "../pages/dashboard/MyTasks";
import Team from "../pages/dashboard/Team";
import Settings from "../pages/dashboard/Settings";
import NotFound from "../pages/NotFound";

const AppRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<DashboardLayout />}>
				<Route index element={<DashboardHome />} />
				<Route path="/my-tasks" element={<MyTasks />} />
				<Route path="/team" element={<Team />} />
				<Route path="/settings" element={<Settings />} />
			</Route>

			<Route path="*" element={<NotFound />} />
		</Routes>
	);
};

export default AppRoutes;
