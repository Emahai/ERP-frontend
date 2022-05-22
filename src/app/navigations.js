export const navigations = [
    {
        label: 'Company Setup',
        type: 'label',
    },
    {
        name: 'Registration',
        icon: 'work',
        children: [
            // {
            //     name: 'Sign in',
            //     iconText: 'SI',
            //     path: '/session/signin',
            // },
            // {
            //     name: 'Sign up',
            //     iconText: 'SU',
            //     path: '/session/signup',
            // },
            // {
            //     name: 'Forgot Password',
            //     iconText: 'FP',
            //     path: '/session/forgot-password',
            // },
            // {
            //     name: 'Error',
            //     iconText: '404',
            //     path: '/session/404',
            // },
            {
                name: 'General',
                icon: 'grade',
                children: [
                    {
                        name: 'Company',
                        path: '/leave/leave-policy',
                    },
                    {
                        name: 'Branch',
                        path: '/leave/leave-type',
                    },
                    {
                        name: 'Department',
                        path: '/leave/leave-request',
                    },
                ],
            },
            {
                name: 'Human Resource',
                icon: 'supervisor_account',
                children: [
                    {
                        name: 'Employee Creation',
                        path: '/leave/leave-policy',
                    },
                    {
                        name: 'Salery Details',
                        path: '/leave/leave-type',
                    },
                ],
            },
            {
                name: 'Inventory',
                icon: 'shopping_cart',
                children: [
                    {
                        name: 'Product',
                        path: '/leave/leave-policy',
                    },
                    {
                        name: 'Item',
                        icon: 'exit_to_app',
                        children: [
                            {
                                name: 'GRV',
                                path: '/leave/leave-policy',
                            },
                            {
                                name: 'Variant',
                                path: '/leave/leave-type',
                            },
                            {
                                name: 'UOM',
                                path: '/leave/leave-request',
                            },
                            {
                                name: 'Supplier',
                                path: '/leave/leave-request',
                            },
                            {
                                name: 'Category & Subcategory',
                                path: '/leave/leave-request',
                            },
                        ],
                    },
                ],
            },
            {
                name: 'Transport',
                icon: 'airport_shuttle',
                children: [
                    {
                        name: 'Vehicle Registration',
                        path: '/leave/leave-policy',
                    },
                    {
                        name: 'Vehicle Type',
                        path: '/leave/leave-type',
                    },
                    {
                        name: 'Vechicle Assignment',
                        path: '/leave/leave-request',
                    },
                ],
            },
        ],
    },

    {
        label: 'Personal Pages',
        type: 'label',
    },

    {
        name: 'Dashboard',
        path: '/dashboard',
        icon: 'dashboard',
    },
    {
        name: 'My Profile',
        icon: 'account_circle',

        children: [
            {
                name: 'My Request',
                icon: 'exit_to_app',
                children: [
                    {
                        name: 'Travel Request',
                        path: '/leave/leave-policy',
                    },
                    {
                        name: 'Leave Request',
                        path: '/leave/leave-type',
                    },
                    {
                        name: 'Extend Leave Request',
                        path: '/leave/extend-leave-request',
                    },
                    {
                        name: 'Attendance Request',
                        path: '/leave/leave-request',
                    },
                ],
            },
            {
                name: 'My Status',
                path: '/profile',
            },
            {
                name: 'My Salery',
                path: '/session/logout',
                iconText: 'E',
            },
            {
                name: 'Log Out',
                path: '/session/logout',
                iconText: 'E',
            },
            {
                name: 'Log In',
                path: '/session/login',
                iconText: 'E',
            },
        ],
    },

    {
        label: 'Management',
        type: 'label',
    },

    {
        name: 'Employee Management',
        icon: 'supervisor_account',
        children: [
            {
                name: 'Attendance',
                icon: 'assignment_turned_in',
                children: [
                    {
                        name: 'Employee Attendance',
                        path: '/attendance/employee-attendance/add',
                    },
                    {
                        name: 'Upload Attendance',
                        path: '/attendance/upload-attendance',
                    },
                    {
                        name: 'Employee Attendance Tool',
                        path: '/attendance/attendance-tool',
                    },
                ],
            },
            {
                name: 'Leave',
                icon: 'assignment_return',
                children: [
                    {
                        name: 'Update Leave Policy',
                        path: '/leave/leave-policy',
                    },
                    {
                        name: 'Leave Type',
                        path: '/leave/leave-type',
                    },
                ],
            },
            {
                name: 'Employee History',
                icon: 'assignment_ind',
                children: [
                    {
                        name: 'Employee Appraisal',
                        path: '/leave/extend-leave-request',
                    },
                    {
                        name: 'Employee Promotion',
                        path: '/leave/leave-policy',
                    },
                    {
                        name: 'Employee Transfer',
                        path: '/leave/leave-type',
                    },
                    {
                        name: 'Employee Termination',
                        path: '/leave/leave-request',
                    },
                ],
            },
        ],
    },

    {
        name: 'Inventory Management',
        icon: 'shopping_cart',
        children: [
            {
                name: 'Sale Item',
                path: '/leave/leave-policy',
            },
            {
                name: 'Transaction',
                icon: 'next_week',
                children: [
                    {
                        name: 'Material Request',
                        path: '/attendance/employee-attendance/add',
                    },
                    {
                        name: 'Item Transfer',
                        path: '/attendance/upload-attendance',
                    },
                    {
                        name: 'Purchase Order',
                        path: '/attendance/attendance-tool',
                    },
                ],
            },
            {
                name: 'Tool',
                icon: 'build',
                children: [
                    {
                        name: 'Inspection',
                        path: '/leave/leave-policy',
                    },
                    {
                        name: 'Adjustment',
                        path: '/leave/leave-type',
                    },
                    {
                        name: 'Search',
                        path: '/leave/leave-request',
                    },
                ],
            },
        ],
    },

    {
        name: 'Logistics Management',
        icon: 'assessment',
        children: [
            {
                name: 'Vendor',
                path: '/report/new-employee-report',
            },
            {
                name: 'Issues',
                path: '/report/employee-promotion-report',
            },
            {
                name: 'Service and Maintainance',
                path: '/report/employee-transfer-report',
            },
            {
                name: 'Fuel Entry',
                path: '/report/employee-appraisal-report',
            },
             {
                name: 'Vihicle History',
                path: '/report/employee-leave-report',
            },
            {
                name: 'Managing Trips',
                icon: 'airport_shuttle',
                children: [
                    {
                        name: 'Employee Transportation',
                        path: '/report/new-employee-report',
                    },
                    {
                        name: 'Item Transportation',
                        path: '/report/new-employee-report',
                    },
                ],
            }, 
        ],
    },

    {
        label: 'Report',
        type: 'label',
    },

    {
        name: 'Report',
        icon: 'equalizer',
        children: [
            {
                name: 'Human Resource',
                icon: 'assessment',
                children: [
                    {
                        name: 'New Employees',
                        path: '/report/new-employee-report',
                    },
                    {
                        name: 'Employee Promotion',
                        path: '/report/employee-promotion-report',
                    },
                    {
                        name: 'Employee Transfer',
                        path: '/report/employee-transfer-report',
                    },
                    {
                        name: 'Employee Appraisal',
                        path: '/report/employee-appraisal-report',
                    },
                    {
                        name: 'Employee Termination',
                        path: '/report/employee-termination-report',
                    },

                    {
                        name: 'Employee Leave',
                        path: '/report/employee-leave-report',
                    },
                    {
                        name: 'Employee Attendance',
                        path: '/report/employee-attendance-report',
                    },
                    {
                        name: 'Travel Requests',
                        path: '/report/travel-requests',
                    },
                ],
            },
            {
                name: 'Inventory',
                icon: 'shopping_cart',
                children: [
                    {
                        name: 'Monthly',
                        path: '/report/new-employee-report',
                    },
                    {
                        name: 'Yearly',
                        path: '/report/employee-promotion-report',
                    },
                    {
                        name: 'Bin Card',
                        path: '/report/employee-transfer-report',
                    },
                    {
                        name: 'GRV',
                        path: '/report/employee-appraisal-report',
                    },
                    {
                        name: 'SIV',
                        path: '/report/employee-termination-report',
                    },
                    {
                        name: 'Purchase Order',
                        path: '/report/employee-leave-report',
                    },
                ],
            },
            {
                name: 'Transport',
                icon: 'local_shipping',
                children: [
                    {
                        name: 'Employee Transport',
                        path: '/report/new-employee-report',
                    },
                    {
                        name: 'Item Transfer',
                        path: '/report/employee-promotion-report',
                    },
                ],
            },
        ],
    },

    {
        label: 'Defaults',
        type: 'label',
    },

    {
        name: 'Settings',
        icon: 'settings',
        children: [
            {
                name: 'Human Resource',
                path: '/report/new-employee-report',
            },
            {
                name: 'Inventory',
                path: '/report/employee-promotion-report',
            },
            {
                name: 'Transport',
                path: '/report/employee-promotion-report',
            },
        ],
    },
    
    {
        label: 'General',
        type: 'label',
    },

    // {
    //     name: 'Charts',
    //     icon: 'trending_up',

    //     children: [
    //         {
    //             name: 'Echarts',
    //             path: '/charts/echarts',
    //             iconText: 'E',
    //         },
    //     ],
    // },
    // {
    //     name: 'Profile',
    //     icon: 'account_circle',

    //     children: [
    //         {
    //             name: 'Profile',
    //             path: '/profile',
    //         },
    //         {
    //             name: 'Settings',
    //             path: '/profile/settings',
    //             iconText: 'E',
    //         },
    //         {
    //             name: 'Log Out',
    //             path: '/session/logout',
    //             iconText: 'E',
    //         },
    //         {
    //             name: 'Log In',
    //             path: '/session/login',
    //             iconText: 'E',
    //         },
    //     ],
    // },
    // {
    //     name: 'Documentation',
    //     icon: 'launch',
    //     type: 'extLink',
    //     path: 'http://demos.ui-lib.com/matx-react-doc/',
    // },
    {
        name: 'Components',
        icon: 'favorite',
        badge: { value: '30+', color: 'secondary' },
        children: [
            {
                name: 'Auto Complete',
                path: '/material/autocomplete',
                iconText: 'A',
            },
            {
                name: 'Buttons',
                path: '/material/buttons',
                iconText: 'B',
            },
            {
                name: 'Checkbox',
                path: '/material/checkbox',
                iconText: 'C',
            },
            {
                name: 'Dialog',
                path: '/material/dialog',
                iconText: 'D',
            },
            {
                name: 'Expansion Panel',
                path: '/material/expansion-panel',
                iconText: 'E',
            },
            {
                name: 'Form',
                path: '/material/form',
                iconText: 'F',
            },
            {
                name: 'Icons',
                path: '/material/icons',
                iconText: 'I',
            },
            {
                name: 'Menu',
                path: '/material/menu',
                iconText: 'M',
            },
            {
                name: 'Progress',
                path: '/material/progress',
                iconText: 'P',
            },
            {
                name: 'Radio',
                path: '/material/radio',
                iconText: 'R',
            },
            {
                name: 'Switch',
                path: '/material/switch',
                iconText: 'S',
            },
            {
                name: 'Slider',
                path: '/material/slider',
                iconText: 'S',
            },
            {
                name: 'Snackbar',
                path: '/material/snackbar',
                iconText: 'S',
            },
            {
                name: 'Table',
                path: '/material/table',
                iconText: 'T',
            },
        ],
    },
]
