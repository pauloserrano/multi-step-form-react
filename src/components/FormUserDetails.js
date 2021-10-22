import React from 'react'
import AppBar from 'material-ui/AppBar'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

const FormUserDetails = ({ handleChange, nextStep, data }) => {
    return (
        <MuiThemeProvider><>
            <AppBar title="Enter User Details" />
            <TextField 
                hintText="Enter your first name"
                floatingLabelText="First name"
                onChange={(e) => handleChange('firstName', e.target.value)}
                defaultValue={data.firstName}
            /><br/>
            <TextField 
                hintText="Enter your last name"
                floatingLabelText="Last name"
                onChange={(e) => handleChange('lastName', e.target.value)}
                defaultValue={data.lastName}
            /><br/>
            <TextField 
                hintText="Enter your email"
                floatingLabelText="Email"
                onChange={(e) => handleChange('email', e.target.value)}
                defaultValue={data.email}
            /><br/>
            <RaisedButton 
                label="Continue"
                primary={true}
                style={styles.button}
                onClick={(e) => nextStep(e)}
            />
        </></MuiThemeProvider>
    )
}

const styles = {
    button: {
        marginTop: 15
    }
}

export default FormUserDetails
