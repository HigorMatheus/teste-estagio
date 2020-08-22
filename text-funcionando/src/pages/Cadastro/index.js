import React,{ useRef}  from 'react';
import { useHistory} from 'react-router-dom'
import './style.css';
import { Form } from '@unform/web'
import Input from '../../component/Form/input'
import Select from '../../component/Form/Select'
import axios from 'axios'
import * as Yup from 'yup';

const Cadastro = ()=>{
  const formRef = useRef(null)
  const history = useHistory()
  async function handleSubmit(data){
    try {
      const schema = Yup.object().shape({
        name : Yup.string().required('o nome é obrigatório'),
        sobrenome: Yup.string().required('o sobrenome é obrigatório'),
        idade: Yup.number('a idade precisa ser um numero').required('a idade é obrigatório'),
        escolaridade: Yup.string().required('a escolaridade é obrigatória'),
        tecnologia: Yup.string().required('obrigatorio uma tecnologia')
      })
      await schema.validate(data,{
        abortEarly: false,
      })
        console.log(data);
       const user = await axios.post('http://localhost:3333/users', data)
       if(user){
       console.log(user);
       return history.push("/")
       }
    } catch (error) {
      if(error instanceof Yup.ValidationError){
        const errorMessages= {};
        error.inner.forEach(error=>{
          errorMessages[error.path]= error.message
        })

        formRef.current.setErrors(errorMessages)
      }
    }
  }
  return (
    <div className="container">
       <section>
       <Form ref={formRef} onSubmit={handleSubmit}>   
       <header className="header">
          <h1>Cadastro de usuário</h1>
        <button  type="submit" className="btn btn-primary">
          Cadastrar usuário
        </button>
      </header>
              <div className="form-row col-md12">
                  <div className="col-md-6">
                      <h1>Dados pessoais</h1>
                    <div className='form-row col-md-12'>
                    <div className=" form-dados form-row col-md-12">
                      <div className="form-group col-md-6">
                        <label for="name">Nome</label>
                        <Input name="name" type="text" id="name" className="col-md-12 form-control"/>
                      </div>
                      <div className="form-group col-md-6">
                        <label for="inputSobrenome">sobrenome</label>
                        <Input className="form-control col-md-12" name="sobrenome"  type="text" id="inputSobrenome4"/>
                      </div>
                    </div>
                    <div className=" form-dados form-row col-md-12" >
                      <div className=" idade form-group col-md-6 ">
                          <label className="labelIdade col-12" for="customRange3">idade</label> 
                          <Input className="form-control col-md-12" type="number"  name="idade" />
                      </div>
                      <div className="form-group col-md-6">
                        <label for="escola">escolaridade</label>
                        <Select id="escola"  name="escolaridade" className="custom-select custom-select " >
                          <option value="Fundamental - Incompleto" >Fundamental - Incompleto</option>
                          <option value='Fundamental - Completo'>Fundamental - Completo</option>
                          <option value=' Médio - Incompleto '> Médio - Incompleto</option>
                          <option value='Médio - Completo'>Médio - Completo</option>
                          <option value='Superior - Incompleto'> Superior - Incompleto</option>
                          <option value='Superior - Completo'>Superior - Completo</option>
                          <option value='Pós-graduação  - Incompleto'> Pós-graduação  - Incompleto</option>
                          <option value='Pós-graduação  - Completo'>Pós-graduação  - Completoo</option>
                        </Select>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 ">
                 <h1>Tecnologias com conhecimento </h1>
                    <div className='form-row col-md-12'>
                    <div className="form-dados form-row col-md-12">
                            <div   className="form-group add-Tec ">
                            <Input name='tecnologia' type="text" className="form-control" id="inputName" placeholder="java script"/>
                          </div>
                   
                      <div className="form-group  add-Tec ">
                         <button className="btn btn-white" type="button"> Adicionar</button>
                      </div>
                    </div>
                    <div className="  form-row col-md-12" >
                      <div className=" form-group col-md-12 ">
                          <table className="tableTec col-md-12" >
                            <thead>
                              <tr>
                                <th scope="col"> exemplos de Tecnologias</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td> PHP,  CSS, HTML </td>
                              </tr>
                            </tbody>
                          </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Form>
       </section>
    </div>
  );
}
export default Cadastro;
