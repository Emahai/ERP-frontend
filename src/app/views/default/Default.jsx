import { Box } from '@mui/material'
import React from 'react'
import { Breadcrumb } from 'app/components'
import styled from '@emotion/styled'

import DefaultHolidayList from './shared/DefaultHolidayList'
import WorkingHours from './shared/WorkingHours'
import Terms from './shared/Terms'
import CompanyPolicies from './shared/CompanyPolicies'

const buttonText = 'Save'

const Container = styled('div')(({ theme }) => ({
    margin: '30px',
    [theme.breakpoints.down('sm')]: {
        margin: '16px',
    },
    '& .breadcrumb': {
        marginBottom: '30px',
        [theme.breakpoints.down('sm')]: {
            marginBottom: '16px',
        },
    },
}))

function Default() {
    return (
        <Container>
            <div className="breadcrumb">
                <Breadcrumb
                    routeSegments={[
                        { name: 'Default', path: '/dashboard' },
                        { name: 'Set Defaults' },
                    ]}
                />
            </div>
            <DefaultHolidayList title="Default Holiday List" buttonText={buttonText}/>
            <Box py="10px" />
            <WorkingHours title="Standard Working Hours" buttonText={buttonText}/>
            <Box py="10px" />
            <Terms title="Upload Terms and Conditions" buttonText={buttonText}/>
            <Box py="10px" />
            <CompanyPolicies title="Upload Company Policies" buttonText={buttonText}/>
        </Container>
    )
}

export default Default
