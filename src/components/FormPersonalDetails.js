import React from 'react'
import AppBar from 'material-ui/AppBar'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

const FormPersonalDetails = ({ handleChange, prevStep, nextStep, data }) => {
    return (
        <MuiThemeProvider><>
            <AppBar title="Enter Personal Details" />
            <TextField 
                hintText="Enter your occupation"
                floatingLabelText="Occupation"
                onChange={(e) => handleChange('occupation', e.target.value)}
                defaultValue={data.occupation}
            /><br/>
            <TextField 
                hintText="Enter your city"
                floatingLabelText="City"
                onChange={(e) => handleChange('city', e.target.value)}
                defaultValue={data.city}
            /><br/>
            <TextField 
                hintText="Enter your bio"
                floatingLabelText="Bio"
                onChange={(e) => handleChange('bio', e.target.value)}
                defaultValue={data.bio}
            /><br/>
            <RaisedButton 
                label="Back"
                primary={false}
                style={styles.button}
                onClick={(e) => prevStep(e)}
            />
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

export default FormPersonalDetails
