import React from 'react'
import './style.css'
import { Link } from 'react-router-dom';
const Header = ()=>(
    <header className="header">
          <h1>Listagem de usuários</h1>
        <button  type="button" className="btn btn-primary">
            <Link to='/cadastro'>Cadastrar usuário</Link>
        </button>
      </header>
)

export default Header

