import React from 'react'
import AppBar from 'material-ui/AppBar'
import { List, ListItem } from 'material-ui/List'
import RaisedButton from 'material-ui/RaisedButton'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

const Confirm = ({ prevStep, nextStep, data }) => {
    const { firstName, lastName, email, occupation, city, bio } = data
    return (
        <MuiThemeProvider><>
            <AppBar title="Confirm User Data" />
            <List>
                <ListItem 
                    primaryText={'First Name'}
                    secondaryText={firstName}
                />
                <ListItem 
                    primaryText={'Last Name'}
                    secondaryText={lastName}
                />
                <ListItem 
                    primaryText={'Email'}
                    secondaryText={email}
                />
                <ListItem 
                    primaryText={'Occupation'}
                    secondaryText={occupation}
                />
                <ListItem 
                    primaryText={'City'}
                    secondaryText={city}
                />
                <ListItem 
                    primaryText={'Bio'}
                    secondaryText={bio}
                />
            </List>
            <RaisedButton 
                label="Back"
                primary={false}
                style={styles.button}
                onClick={(e) => prevStep(e)}
            />
            <RaisedButton 
                label="Confirm"
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

export default Confirm
