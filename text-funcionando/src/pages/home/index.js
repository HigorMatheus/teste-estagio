import React, { Component }  from 'react';
import './style.css';
// import api from '../../services/api'

import axios from 'axios'
import Header from '../../component/header';
class Home extends Component{
  state={
    users:[],
    usersInfo: {},
    page: 1
}
    
componentDidMount(){
  this.loadProducs()
}

loadProducs = async( page = 1 )=>{
  const response = await axios.get(`http://localhost:3333/users?page=${page}`)
  const { users, ...usersInfo}= response.data
  this.setState({users, usersInfo, page})
}

prevPage =()=>{
  const { page, usersInfo} =this.state;
  if(page === 1) return;
  const pageNumbler= page - 1;
  return this.loadProducs(pageNumbler)
}
nextPage =()=>{
  const { page, usersInfo} =this.state;
  if(page === usersInfo.page) return;
  const pageNumbler= page + 1;
  return this.loadProducs(pageNumbler);
}


 render(){
   const {users, page,usersInfo} = this.state
   if ( usersInfo.pages == 0 ) {
      return(
        <div className="container">
          <Header/>
          <div className="mensagem" >
            <p>Não á usuários cadastrados </p>
          </div>
        </div>
      )
   }else{
      return (
        <div className="container">
           <Header/>
          <table className=" col-12">
            <thead>
              <tr>
                <th scope="col">nome</th>
                <th scope="col">sobrenome</th>
                <th scope="col">idade</th>
                <th scope="col">Escolaridade</th>
                <th scope="col">Qtd skills</th>
              </tr>
            </thead>
            <tbody>
              {users.map(user=>{
                return(
                  <tr>
                  <td>{user.name}</td>
                  <td>{user.sobrenome}</td>
                  <td>{user.idade}</td>
                  <td>{user.escolaridade}</td>
                  <td>{user.tecnologia}</td>
                </tr>
                )
              })}
            
            </tbody>
          </table>
          <div className="actions">
              <button className="btn btn-primary" disabled={page===1} onClick={this.prevPage} >anteior</button>
              <button className="btn btn-primary" disabled={page ===usersInfo.pages} onClick={this.nextPage} >proximo</button>
          </div>
        </div>
      )
   }
  
 }
}
export default Home;

