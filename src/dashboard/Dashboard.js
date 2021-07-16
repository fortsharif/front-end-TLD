import React, { useState, useEffect } from "react"
import { BrowserRouter as Redirect, Route } from "react-router-dom"
import CreateApplication from "../create/CreateApplication"
import { withRouter } from 'react-router-dom';


const Dashboard = (props) => {

    const logout = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('email')
        localStorage.removeItem('type')
        props.history.push('/login')
    }

    const gotoApplications = () => {
        props.history.push('/applications')
    }

    const viewApplication = () => {
        props.history.push('/myapplication')
        {/* < Redirect to="/myapplication" /> */ }
    }

    const CreateApplication = () => {

        props.history.push('/create')
    }

    const [admin, setAdmin] = useState(false)

    const email = localStorage.getItem('email')
    const type = localStorage.getItem('type')

    useEffect(() => {
        if (type == 1) {
            setAdmin(true)
        }
        if (!email) {
            props.history.push('/login')
        }

    }, [])

    return (
        <>
            <h1>Welcome {email}</h1>
            {admin ? <div><p>You are an admin, check out the applications</p>
                <button type='button' onClick={gotoApplications}>Check applications</button>
            </div>

                : <button type='button' onClick={CreateApplication}>Start An Application</button>}
            {
                admin ? <h1></h1> : < button type='button' onClick={viewApplication}>View Your Application</button>

            }

            <br></br>
            <button type='button' onClick={logout}>Logout</button>
        </>
    )

}

export default withRouter(Dashboard)