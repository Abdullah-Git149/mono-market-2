import React, {useEffect, useState} from 'react';
import{useParams, useHistory} from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux';
import DatePicker from "react-datepicker";
import toast, { Toaster } from 'react-hot-toast';
import "react-datepicker/dist/react-datepicker.css";
import * as moment from 'moment';
import {AgencyAdd,agencyEditID} from '../../actions/agencyAction';
import { companyByID, companySave } from '../../actions/userAction';



const AddCompany = (props) => {	

    const dispatch  = useDispatch();
    const{addCompany,loginErrors,companyEdit} = useSelector((state) => state.userReducer);		   	
   

    const {edit} = useParams();      
   
    const[state, setState] = useState({        
		id:'',
		name:'',        
        email:'',        
        password:'',        
    });
    
    const handleInputs = (e) => {        
        setState({
            ...state,
            [e.target.name] : e.target.value
        })        
    }

         const saveCompany = async (e) => {
            e.preventDefault();  

            state.id = edit ? edit: '';           
            dispatch(companySave(state))
         }

        //  useEffect(() => {
        //     dispatch(userlist());            
        //  },[])

         useEffect(() => {             
             if(edit){                
                dispatch(companyByID(edit));	
             }
         },[edit])

         // for Saved
         useEffect(() => {
            if(addCompany){
                toast.success(addCompany.msg);
                setState({
                    id:'',
                    name:'',        
                    email:'',  
                    password:'',  
                })
                
            }
            
         },[addCompany])
         // for loginErrors
         useEffect(() => {                       
            if(loginErrors && loginErrors.length > 0){
                loginErrors.map(error => (
                toast.error(error.msg)
                 ))
            }
         },[loginErrors])

         useEffect(() => {
             if(edit){
                if(companyEdit){
                    setState({
                        ...state,
                        name: companyEdit.name,                        
                        email: companyEdit.email,
                                            
                    })
                }
            }
         },[companyEdit])


	return <>         
<div className="container-fluid">
                <div className="block-header">
                    <div className="row clearfix">
                        <div className="col-md-6 col-sm-12">
                            <h2>Add New Company</h2>                            
                        </div>                       
                    </div>
                </div>
                <div className="row clearfix">
                    
                <Toaster
						position="top-right"
						reverseOrder={false}
						toastOptions={{							
							style: {
							  border: '1px solid #713200',
							  padding: '16px',
							  color: '#713200',
							  fontSize: '17px'
							},
						  }}
						/>

                    <div className="col-xl-8 col-lg-8 col-md-7">

                    <form onSubmit={saveCompany}>
	                  <div className="card">
                      
                            <div className="body">
                                
                                <div className="row clearfix">
                                    <div className="col-lg-4 col-md-12">
                                        <div className="form-group">
                                            <input type="hidden" name="id" value={edit ? edit : ''} />
                                            <label style={{color:'#17C2D7'}}>Company Name</label>
                                            <input type="text" name="name" value={state.name} onChange={handleInputs}  className="form-control" placeholder="Company Name" />
                                            <span style={{color: 'red'}}>{loginErrors && loginErrors.name ? loginErrors.name.msg : ''}</span>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-12">
                                        <div className="form-group">
                                        <label style={{color:'#17C2D7'}}>Email</label>
                                            <input type="text" name="email" value={state.email} onChange={handleInputs}  className="form-control"  placeholder="Email" />
                                            <span style={{color: 'red'}}>{loginErrors && loginErrors.email ? loginErrors.email.msg : ''}</span>
                                        </div>
                                    </div>
                                   
                                    {!edit ? 
                                    <div className="col-lg-4 col-md-12">
                                        <div className="form-group">
                                        <label style={{color:'#17C2D7'}}>Password</label>
                                            <input type="password" name="password" value={state.password} onChange={handleInputs}  className="form-control"  placeholder="Password" />
                                            <span style={{color: 'red'}}>{loginErrors && loginErrors.password ? loginErrors.password.msg : ''}</span>
                                        </div>
                                    </div>
                                    : ''   
                                }
                                  
                                </div>
                              
                                <button type="submit"  className="btn btn-round btn-primary mr-1">Save</button>
                            </div>                            
                        </div>                          
                        </form>           
                        </div>                       
                     </div>
                     </div>                   
	</>

}
export default AddCompany
