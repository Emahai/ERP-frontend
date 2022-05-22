import { DatePicker, LocalizationProvider } from '@mui/lab'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import { Grid, TextField } from '@mui/material'
import { SimpleCard } from 'app/components'
import React from 'react'
import Form from '../../material-kit/forms/Form'

const DefaultHolidayList = ({title, buttonText}) => {
    return (
        <>
            <SimpleCard title={title}>
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
                                label="Holiday Name"
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
                                            label="Date"
                                            sx={{ mb: 3, width: '100%' }}
                                        />
                                    )}
                                />
                            </LocalizationProvider>
                        </Grid>
                    </Grid>
                </Form>
            </SimpleCard>
        </>
    )
}

export default DefaultHolidayList
