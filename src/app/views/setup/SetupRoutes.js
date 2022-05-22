import React, { lazy } from 'react'
import Loadable from 'app/components/Loadable/Loadable'
//import { authRoles } from '../../auth/authRoles'

const CompanySetup = Loadable(lazy(() => import('./CompanySetup')))

const setupRoutes = [
    {
        path: '/setup',
        element: <CompanySetup />,
        //auth: authRoles.admin,
    },
]

export default setupRoutes
