import React, { useEffect, useState } from 'react'
import FormUserDetails from './FormUserDetails'

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
                <h1>2</h1>
            )

        case 3:
            return (
                <h1>3</h1>
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