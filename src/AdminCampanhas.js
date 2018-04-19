import React, { Component } from 'react'

import base from './base'

class AdminCampanhas extends Component {
    constructor(props) {
        super(props)
        this.state = {
           campanhas: {}
        }

        this.renderCampanha = this.renderCampanha.bind(this)
        this.removeCampanha = this.removeCampanha.bind(this)
        this.handleSave = this.handleSave.bind(this)
    }
     
    componentDidMount() {
        base.syncState('campanhas', {
            context: this,
            state: 'campanhas',
            asArray: false
        })
    }
    removeCampanha(key){
        base.remove('campanhas/'+key, err => {
            console.log(err)
        })
        /* dessa forma não esta funcionando
        const { [key]: undefined, ...newCampanhas } = this.state.campanhas
        this.setState({
            campanha: newCampanhas
        })*/
    }
    handleSave(){
        const nome = this.nome.value
        const descricao = this.descricao.value

        base.push('campanhas', {
            data: { nome, descricao },
            then: err => { 
                if(!err){
                    this.nome.value = ''
                    this.descricao.value = ''
                }
            }
        })
    }
    renderCampanha(key, campanha){
        return(
            <li key={key}>
                {campanha.nome}
                &nbsp;
                <button onClick={()=>1}>Editar</button>
                <button onClick={()=> this.removeCampanha(key)}>Remover</button>
            </li>
        )
    }
    render(){
        return(
            <div>
                <h1>Campanhas</h1>
                <h2>Nova campanha</h2>
                Campanha: <input type="text" ref={ref => this.nome = ref} /><br />
                Descrição: <textarea ref={ref => this.descricao = ref}></textarea><br />
                <button onClick={this.handleSave}>Salvar nova campanha</button>
                <ul>
                    {
                        Object.keys(this.state.campanhas)
                          .map(key => this.renderCampanha(key, this.state.campanhas[key]))
                    }
                </ul>
            </div>

        )
    }
}

export default AdminCampanhas