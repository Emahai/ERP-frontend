import React, { lazy } from 'react'
import Loadable from 'app/components/Loadable/Loadable';

const TravelRequest = Loadable(lazy(() => import("./TravelRequest")));

const TravelRequestRoutes = [
    {
        path: '/travel-request/add',
        element: <TravelRequest />,
    }
]

export default TravelRequestRoutes