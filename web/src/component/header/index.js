import React from 'react'
import './style.css'
const Header = ()=>(
    <header className="header">
          <h1>Listagem de usuarios</h1>
        <button  type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">Cadastrar usuário</button>
      </header>
)

export default Header

