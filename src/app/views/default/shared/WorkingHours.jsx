import { DatePicker, LocalizationProvider } from '@mui/lab'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import { Grid, TextField } from '@mui/material'
import { SimpleCard } from 'app/components'
import React from 'react'
import Form from '../../material-kit/forms/Form'

const WorkingHours = ({title, buttonText}) => {
    return (
        <>
            <SimpleCard title={title}>
                <Form buttonText={buttonText}>
                    <Grid container spacing={4}>
                        <Grid item xs={6}>
                            <TextField
                                required
                                type="number"
                                id="standard-basic"
                                name="name"
                                fullWidth
                                sx={{ mb: 3 }}
                                label="Working Hours"
                            />
                        </Grid> 
                    </Grid>
                </Form>
            </SimpleCard>
        </>
    )
}

export default WorkingHours
