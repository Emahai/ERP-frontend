import { Grid, TextField } from '@mui/material'
import { SimpleCard } from 'app/components'
import React from 'react'
import Form from '../../material-kit/forms/Form'

const Terms = ({ title, buttonText }) => {
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
                                label="Terms Name"
                            />
                        </Grid>

                        <Grid item xs={6}>
                            <TextField name="upload-photo" type="file" />
                        </Grid>
                    </Grid>
                </Form>
            </SimpleCard>
        </>
    )
}

export default Terms
