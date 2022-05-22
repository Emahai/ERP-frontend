import NotFound from 'app/views/sessions/NotFound'
import chartsRoute from 'app/views/charts/ChartsRoute'
import materialRoutes from 'app/views/material-kit/MaterialRoutes'
import dashboardRoutes from 'app/views/dashboard/DashboardRoutes'
import sessionRoutes from 'app/views/sessions/SessionRoutes'
import MatxLayout from '../components/MatxLayout/MatxLayout'
import { Navigate } from 'react-router-dom'

// Management
import EmployeeManagementRoutes from 'app/views/employeeManagement/EmployeeManagementRoutes'


import defaultRoutes from 'app/views/default/DefaultRoutes'
import TravelRequestRoutes from 'app/views/travel-request/TravelRequestRoutes'
import SetupRoutes from 'app/views/setup/SetupRoutes'

export const AllPages = () => {
    const all_routes = [
        {
            element: <MatxLayout />,
            children: [...dashboardRoutes, ...chartsRoute, ...materialRoutes, ...defaultRoutes, ...TravelRequestRoutes, ...SetupRoutes],
        },
        ...sessionRoutes,
        {
            path: '/',
            element: <Navigate to="dashboard" />,
        },
        {
            path: '*',
            element: <NotFound />,
        },
    ]

    return all_routes
}
