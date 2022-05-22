import { Grid, TextField, Typography } from '@mui/material'
import React from 'react'
import Form from '../material-kit/forms/Form'
import DropDown from '../material-kit/drop-down/DropDown'
import { Breadcrumb, SimpleCard } from 'app/components'
import styled from '@emotion/styled'
import dropDownData from '../../utils/data/dropDownData.json'
import { DatePicker, LocalizationProvider } from '@mui/lab'
import AdapterDateFns from '@mui/lab/AdapterDateFns'

const buttonText = 'Send Request'

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

function TravelRequest() {
    return (
        <Container>
            <div className="breadcrumb">
                <Breadcrumb
                    routeSegments={[
                        { name: 'Travel Request', path: '/dashboard' },
                        { name: 'Send Travel Request' },
                    ]}
                />
            </div>
            <SimpleCard>
                <Form buttonText={buttonText}>
                    <Grid container spacing={4}>
                        <Grid item xs={6}>
                            <TextField
                                required
                                type="text"
                                id="standard-basic"
                                name="name"
                                fullWidth
                                sx={{ mb: 3 }}
                                label="Employee Name"
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <DropDown
                                label="Department"
                                options={dropDownData}
                            />
                        </Grid>
                    </Grid>
                    <Typography sx={{ mb: 2 }}>Address</Typography>
                    <Grid container spacing={4}>
                    <Grid item xs={6}>
                            <TextField
                                required
                                type="text"
                                id="standard-basic"
                                name="name"
                                fullWidth
                                label="House No."
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                required
                                type="text"
                                id="standard-basic"
                                name="name"
                                fullWidth
                                label="Kebele"
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                required
                                type="text"
                                id="standard-basic"
                                name="name"
                                fullWidth
                                label="Wereda"
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                required
                                type="text"
                                id="standard-basic"
                                name="name"
                                fullWidth
                                label="Subcity"
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                required
                                type="text"
                                id="standard-basic"
                                name="name"
                                fullWidth
                                label="City"
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                required
                                type="text"
                                id="standard-basic"
                                name="name"
                                fullWidth
                                label="Area Name"
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                required
                                id="outlined-multiline-static"
                                label="Reason"
                                multiline
                                rows={4}
                                fullWidth
                                type="text"
                                name="reason"
                                sx={{ mb: 3 }}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <DatePicker
                                    renderInput={(props) => (
                                        <TextField
                                            {...props}
                                            // variant="Outlined"
                                            id="mui-pickers-date"
                                            label="Date of Trip"
                                            sx={{ mb: 3, width: '100%' }}
                                        />
                                    )}
                                />
                            </LocalizationProvider>
                        </Grid>
                    </Grid>
                    <Typography sx={{ mb: 2 }}>
                        Transport Requester
                    </Typography>
                    <Grid container spacing={4}>
                    <Grid item xs={6}>
                            <TextField
                                required
                                id="outlined-multiline-static"
                                label="Name"
                                rows={4}
                                fullWidth
                                type="text"
                                name="name"
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                required
                                id="outlined-multiline-static"
                                label="Signature"
                                rows={4}
                                fullWidth
                                type="text"
                                name="name"
                                sx={{ mb: 3 }}
                            />
                        </Grid>
                    </Grid>
            
                  
                </Form>
            </SimpleCard>
        </Container>
    )
}

export default TravelRequest
