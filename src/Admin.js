import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'

import { auth } from './base'

//const AdminHome = props => <h1>Seja bem-vindo!</h1>

class Admin extends Component{
    constructor(props) {
        super(props)
        this.state = {
            isAuthing: true,
            isLoggedIn: false,
            user: null
        }
    }
    componentDidMount(){
        auth.onAuthStateChanged(user => {
            this.setState({
                isAuthing: false,
                isLoggedIn: !!user,
                user: user
            })
        })
    }
    render() { 
        if (this.state.isAuthing){
            return <p>Aguarde...</p>
        }       
        if (!this.state.isLoggedIn) {
            return <Redirect to='/login' />
        }
        return(
            <div>
                <h1>Admin{JSON.stringify(this.state)}</h1>
                {/*<Route path='/' component={AdminHome} /> */}
            </div>
        )
    }
}

export default Admin