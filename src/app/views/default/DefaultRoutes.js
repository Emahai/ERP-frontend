import React, { lazy } from 'react'
import Loadable from 'app/components/Loadable/Loadable'
//import { authRoles } from '../../auth/authRoles'

const Default = Loadable(lazy(() => import('../default/Default')))

const defaultRoutes = [
    {
        path: '/set-defaults',
        element: <Default />,
        //auth: authRoles.admin,
    },
]

export default defaultRoutes
