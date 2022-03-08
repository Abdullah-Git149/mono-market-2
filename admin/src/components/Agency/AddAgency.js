import React, {useEffect, useState} from 'react';
import{useParams, useHistory} from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux';
import DatePicker from "react-datepicker";
import toast, { Toaster } from 'react-hot-toast';
import "react-datepicker/dist/react-datepicker.css";
import * as moment from 'moment';
import {AgencyAdd,agencyEditID} from '../../actions/agencyAction';



const AddAgency = (props) => {	

    const dispatch  = useDispatch();
    const{agencySaved,errors,agencyEdit} = useSelector((state) => state.agencyReducer);		   	
   

    const {edit} = useParams();      
   
    const[state, setState] = useState({        
		id:'',
		hospital_name:'',
        agencyDescription:'',
        email:'',        
    });
    
    const handleInputs = (e) => {        
        setState({
            ...state,
            [e.target.name] : e.target.value
        })        
    }

         const saveAgency = async (e) => {
            e.preventDefault();  

            state.id = edit ? edit: '';           
            dispatch(AgencyAdd(state))
         }

        //  useEffect(() => {
        //     dispatch(userlist());            
        //  },[])

         useEffect(() => {             
             if(edit){                
                dispatch(agencyEditID(edit));	
             }
         },[edit])

         // for Saved
         useEffect(() => {
            if(agencySaved){
                toast.success(agencySaved.msg);
                setState({
                    id:'',
                    hospital_name:'',
                    agencyDescription:'',
                    email:'',   
                    password:''   
                })
                
            }
            
         },[agencySaved])
         // for errors
         useEffect(() => {                       
            if(errors && errors.length > 0){
                errors.map(error => (
                toast.error(error.msg)
                 ))
            }
         },[errors])

         useEffect(() => {
             if(edit){
                if(agencyEdit){
                    setState({
                        ...state,
                        hospital_name: agencyEdit.hospital_name,
                        agencyDescription: agencyEdit.agencyDescription,
                        email: agencyEdit.email,
                                            
                    })
                }
            }
         },[agencyEdit])


	return <>         
<div className="container-fluid">
                <div className="block-header">
                    <div className="row clearfix">
                        <div className="col-md-6 col-sm-12">
                            <h2>Add New Agency</h2>                            
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

                    <form onSubmit={saveAgency}>
	                  <div className="card">
                      
                            <div className="body">
                                
                                <div className="row clearfix">
                                    <div className="col-lg-4 col-md-12">
                                        <div className="form-group">
                                            <input type="hidden" name="id" value={edit ? edit : ''} />
                                            <label style={{color:'#17C2D7'}}>Agency Name</label>
                                            <input type="text" name="hospital_name" value={state.hospital_name} onChange={handleInputs}  className="form-control" placeholder="Agency Name" />
                                            <span style={{color: 'red'}}>{errors && errors.hospital_name ? errors.hospital_name.msg : ''}</span>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-12">
                                        <div className="form-group">
                                        <label style={{color:'#17C2D7'}}>Email</label>
                                            <input type="text" name="email" value={state.email} onChange={handleInputs}  className="form-control"  placeholder="Email" />
                                            <span style={{color: 'red'}}>{errors && errors.email ? errors.email.msg : ''}</span>
                                        </div>
                                    </div>
                                   
                                    {!edit ? 
                                    <div className="col-lg-4 col-md-12">
                                        <div className="form-group">
                                        <label style={{color:'#17C2D7'}}>Password</label>
                                            <input type="password" name="password" value={state.password} onChange={handleInputs}  className="form-control"  placeholder="Password" />
                                            <span style={{color: 'red'}}>{errors && errors.password ? errors.password.msg : ''}</span>
                                        </div>
                                    </div>
                                    : ''   
                                }

                                  
                                </div>


                                <div className="row clearfix">
                                    <div className="col-lg-4 col-md-12">
                                        <div className="form-group">
                                            <input type="hidden" name="id" value={edit ? edit : ''} />
                                            <label style={{color:'#17C2D7'}}>Agency Details</label>
                                            <input type="text" name="agencyDescription" value={state.agencyDescription} onChange={handleInputs}  className="form-control" placeholder="Agency Details" />
                                            <span style={{color: 'red'}}>{errors && errors.agencyDescription ? errors.agencyDescription.msg : ''}</span>
                                        </div>
                                    </div>
                                   
                                  
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
export default AddAgency
