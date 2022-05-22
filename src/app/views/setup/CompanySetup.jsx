import { Grid } from '@mui/material'
import { styled } from '@mui/system'
import React, { useState, useEffect } from 'react'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'
import { Breadcrumb, SimpleCard } from 'app/components'
import { DatePicker, LocalizationProvider } from '@mui/lab'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import Form from '../material-kit/forms/Form'

const TextField = styled(TextValidator)(() => ({
    width: '100%',
    marginBottom: '16px',
}))

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

const CompanySetup = () => {
    const [state, setState] = useState({
        date: new Date(),
    })

    useEffect(() => {
        ValidatorForm.addValidationRule('isPasswordMatch', (value) => {
            console.log(value)

            if (value !== state.password) {
                return false
            }
            return true
        })
        return () => ValidatorForm.removeValidationRule('isPasswordMatch')
    }, [state.password])

    const handleSubmit = () => {
        // console.log("submitted");
        // console.log(event);
    }

    const handleChange = (event) => {
        event.persist()
        setState({
            ...state,
            [event.target.name]: event.target.value,
        })
    }

    const handleDateChange = (date) => {
        setState({ ...state, date })
    }

    const { companyName, abbreviation, date, website, telephone, email, fax } =
        state

    const buttonText = 'Save'
    return (
        <Container>
            <div className="breadcrumb">
                <Breadcrumb
                    routeSegments={[
                        { name: 'Setup', path: '/dashboard' },
                        { name: 'Company Setup' },
                    ]}
                />
            </div>
            <SimpleCard>
                <Form buttonText={buttonText}>
                    <Grid container spacing={6}>
                        <Grid item lg={6} md={6} sm={12} xs={12}>
                            <TextField
                                label="Company Name"
                                type="text"
                                name="companyName"
                                value={companyName || ''}
                            />
                            <TextField
                                label="Abbreviation"
                                type="text"
                                name="abbreviation"
                                value={abbreviation || ''}
                            />
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <DatePicker
                                    value={date}
                                    renderInput={(props) => (
                                        <TextField
                                            {...props}
                                            // variant="Outlined"
                                            id="mui-pickers-date"
                                            label="Date of Incorporation"
                                            sx={{ mb: 2, width: '100%' }}
                                        />
                                    )}
                                />
                            </LocalizationProvider>
                        </Grid>

                        <Grid item lg={6} md={6} sm={12} xs={12}>
                            <TextField
                                label="Website"
                                type="text"
                                name="website"
                                value={website || ''}
                            />
                            <TextField
                                label="Telephone"
                                type="text"
                                name="telephone"
                                value={telephone || ''}
                            />
                            <TextField
                                label="Email"
                                type="text"
                                name="email"
                                value={email || ''}
                            />
                            <TextField
                                label="Fax"
                                type="text"
                                name="fax"
                                value={fax || ''}
                                validators={[
                                    'required',
                                    'minStringLength:16',
                                    'maxStringLength: 16',
                                ]}
                            />
                        </Grid>
                    </Grid>
                </Form>
            </SimpleCard>
        </Container>
    )
}

export default CompanySetup
