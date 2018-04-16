import React, { Component } from 'react'

class Login extends Component  {
    render(){
        return (
            <div>
                <input type='email' />
                <input type='passwd' />
                <button onClick={() => console.log('clicou')}>
                    Entrar
                </button>
            </div>
        )
    }
}

export default Login