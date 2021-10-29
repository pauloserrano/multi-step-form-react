import React, { useEffect, useState } from 'react'
import FormUserDetails from './FormUserDetails'
import FormPersonalDetails from './FormPersonalDetails'
import Confirm from './Confirm'
import Success from './Success'

const UserForm = () => {
    const [data, setData] = useState({
        step: 1,
        firstName: '',
        lastName: '',
        email: '',
        occupation: '',
        city: '',
        bio: '',
    })

    const nextStep = (e) => {
        e.preventDefault()
        setData({
            ...data,
            step: data.step + 1
        })
    }

    const prevStep = (e) => {
        e.preventDefault()
        setData({
            ...data,
            step: data.step - 1
        })
    }

    const handleChange = (input, value) => {
        setData({
            ...data,
            [input]: value
        })
    }

    useEffect(() => {
        console.log(data)
    }, [data])

    switch(data.step){
        case 1:
            return (
                <div style={styles.form}>
                    <FormUserDetails 
                        handleChange={handleChange}
                        nextStep={nextStep}
                        data={data}
                    />
                </div>
            )

        case 2:
            return (
                <div style={styles.form}>
                    <FormPersonalDetails 
                        handleChange={handleChange}
                        prevStep={prevStep}
                        nextStep={nextStep}
                        data={data}
                    />
                </div>
            )

        case 3:
            return (
                <div style={styles.form}>
                    <Confirm 
                        prevStep={prevStep}
                        nextStep={nextStep}
                        data={data}
                    />
                </div>
            )

        case 4:
            return (
                <div style={styles.form}>
                    <Success/>
                </div>
            )

        default:
            return
    }
}

export default UserForm

const styles = {
    form: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
    }
  }