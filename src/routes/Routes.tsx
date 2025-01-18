import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layouts/Layout";
import ErrorPage from "../pages/ErrorPage";
import Dashboard from "../pages/Dashboard";


const router = createBrowserRouter([
    {
        path: "/",
        element: <DashboardLayout />,
        errorElement: <ErrorPage />,
        children: [
            {index: true, element: <Dashboard />},
            // {path: "/users", element: <Dashboard />},
            
        ]
    }
])

export default router