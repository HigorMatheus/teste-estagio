import React from 'react';
import { useHistory} from 'react-router-dom'
import axios from 'axios'
import { ErrorMessage, Formik, Field, Form } from 'formik';
import * as yup from 'yup'

import './style.css';



  const validations= yup.object().shape({
    name: yup.string().required(),
    sobrenome: yup.string().required(),
    idade: yup.number().required(),
    escola: yup.number().required(),
    tecnologia: yup.string().required(),
  })

const FormModal =()=> {
  const history = useHistory()
  async function handleSubmit(data){
      console.log(data);
    //  const user = await axios.post('http://localhost:3333/users', data)

    //  if(user){
    //  console.log(user);
    //  return history.action()
    //  }
  }

  return (
    <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content ">
        <div className="modal-body">
          <Formik
            onSubmit={handleSubmit}
            initialValues={{
            name:"",
            sobrenome:"",
            idade:"",
            escola:"",
            tecnologia:"",
          }}
          validationSchema={validations}
          render={({values,handleSubmit})=>(
            <Form  onSubmit={handleSubmit} redirect={`/`}>   
            <div className="modal-header-form header">
              <h5 className="modal-title" >Cadastro de usuário</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                {/* <span aria-hidden="true">&times;</span> */}
              </button>
            <button className="btn btn-primary" aria-hidden="true" type="submit" onClick={handleSubmit}>
              Cadastrar 
              </button>
            </div>
              <div className="form-row col-md12">
                  <div className="col-md-6">
                      <h1>Dados pessoais</h1>
                    <div className='form-row col-md-12'>
                    <div className="form-dados form-row col-12">
                      <div className="form-group col-md-6">
                        <label for="name">Nome</label>{values.name}
                        <Field name="name" type="text" id="name" className="col-md-12 form-control"/>
                        <ErrorMessage className="form-error" component="span" name="name"/>
                      </div>
                      <div className="form-group col-md-6">
                        <label for="inputSobrenome">sobrenome</label>
                        <Field className="form-control col-md-12"   name="sobrenome"  type="text"  id="inputSobrenome4"/>
                        <ErrorMessage className="form-error" component="span" name="sobrenome"/>
                      </div>
                    </div>
                    <div className=" form-dados form-row col-md-12" >
                      <div className=" idade form-group col-md-6 ">
                          <label className="labelIdade col-12" for="customRange3">idade</label> 
                          <Field required className="col-12" type="range"  name="idade"  max="45" step="0" id="customRange3"/>{values.idade}
                          <ErrorMessage className="form-error" component="span" name="idade"/>
                      </div>
                      <div className="form-group col-md-6">
                        <label for="escola">escolaridade</label>
                        <Field as="select" id="escola" name="escolaridade" className="custom-select custom-select ">
                          <option selected value="">Open this select menu</option>
                          <option value="medio">medio</option>
                          <option value={2}>Two</option>
                          <option value={3}>Three</option>
                        </Field>
                        <Field name="color" as="select" placeholder="Favorite Color">
                              <option value="red">Red</option>
                              <option value="green">Green</option>
                              <option value="blue">Blue</option>
                            </Field>
                        <ErrorMessage className="form-error" component="span" name="escolaridade"/>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 ">
                 <h1>Tecnologias com conhecimento </h1>
                    <div className='form-row col-md-12'>
                    <div className="form-dados form-row col-md-12">
                      <div className="form-group add-Tec ">
                        <Field required name='tecnologia' type="text" className="form-control" id="inputName" placeholder="java script"/>
                        <ErrorMessage className="form-error" component="span" name="tecnologia"/>
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
                                <th scope="col">Tecnologias</th>
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
          )}
          />
    
        </div>
      </div>
    </div>
  </div>
  );
  
}

// FormModal.prototype={
//   // initialValues:{
//   //   name:"",
//   //   sobrenome:"",
//   //   idade:"",
//   //   escola:"",
//   //   tecnologia:"",
//   // },
//   initialValues:PropTypes.func.isRequonSubmit,
//   onSubmit : PropTypes.func.isRequired,
// }
export default FormModal;