import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layouts/Layout";
import ErrorPage from "../pages/ErrorPage";
import Dashboard from "../pages/Dashboard";
import UserPage from "../pages/UserPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <DashboardLayout children={undefined} />,
        errorElement: <ErrorPage />,
        children: [
            { index: true, element: <Dashboard /> },
            { path: "users", element: <UserPage /> },
        ]
    }
]);

export default router;
