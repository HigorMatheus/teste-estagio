import React, { Component }  from 'react';

import './style.css';
import FormModal from '../../component/modal/index';
import Header from '../../component/header';
import axios from "axios" 

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
  return (
    <div className="container">
      <Header/>
     
     <FormModal/>
    </div>
  );
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
          <th scope="col"> skill </th>
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
                <td>@mdo</td>
              </tr>
              )
            })}
      </tbody>
    </table>
   <FormModal/>
  </div>
   )

 }
}
}
export default Home;
