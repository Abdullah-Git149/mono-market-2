import React, {useEffect, useState} from 'react';
import{useParams, useHistory} from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';
import "react-datepicker/dist/react-datepicker.css";
import {branchEditID, allAgency, BranchAdd} from '../../actions/agencyAction';


const AddBranch = (props) => {	

    const dispatch  = useDispatch();
    const{agencyList,branchSaved,errors,branchEdit} = useSelector((state) => state.agencyReducer);		   	
   

    const {edit} = useParams();
      
    const[state, setState] = useState({        
		id:'',
		hospital_id:'',
        branch_name:'',        
    });
    
    const handleInputs = (e) => {        
        setState({
            ...state,
            [e.target.name] : e.target.value
        })        
    }

         const saveBranch = async (e) => {
            e.preventDefault();             
            state.id = edit ? edit: '';           
            dispatch(BranchAdd(state))
         }

         useEffect(() => {
                dispatch(allAgency());
         },[])

         useEffect(() => {             
             if(edit){                        
                dispatch(branchEditID(edit));	
             }
         },[edit])

         // for Saved
         useEffect(() => {
            if(branchSaved){
                toast.success(branchSaved.msg);
                setState({
                    id:'',
                    hospital_id:'',
                    branch_name:'',    
                })
                
                dispatch(allAgency());
            }
            
         },[branchSaved])
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
                if(branchEdit){
                    setState({
                        ...state,
                        hospital_id: branchEdit.hospital_id,
                        branch_name: branchEdit.branch_name
                                            
                    })
                }
            }
         },[branchEdit])


	return <>         
<div className="container-fluid">
                <div className="block-header">
                    <div className="row clearfix">
                        <div className="col-md-6 col-sm-12">
                            <h2>Add New Branch</h2>                            
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

                    <form onSubmit={saveBranch}>
	                  <div className="card">
                      
                            <div className="body">
                                
                                <div className="row clearfix">
                                    <div className="col-lg-4 col-md-12">
                                        <div className="form-group">
                                            <input type="hidden" name="id" value={edit ? edit : ''} />
                                            <label style={{color:'#17C2D7'}}>Agency Name</label>
                                            <select className="form-control" name="hospital_id" value={state.hospital_id} onChange={handleInputs}>
                                                <option value="">-- Select Agency --</option>
                                                {agencyList ? agencyList.map((agn) => (
                                                <option value={agn._id} key={agn._id} selected={state.hospital_id?"selected":""}>{agn.hospital_name}</option>
                                                )) : 'No Record found!'
							                }
                                            </select>
                                            <span style={{color: 'red'}}>{errors && errors.hospital_id ? errors.hospital_id.msg : ''}</span>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-12">
                                        <div className="form-group">
                                        <label style={{color:'#17C2D7'}}>Branch Name</label>
                                            <input type="text" name="branch_name" value={state.branch_name} onChange={handleInputs}  className="form-control"  placeholder="Branch Name" />
                                            <span style={{color: 'red'}}>{errors && errors.branch_name ? errors.branch_name.msg : ''}</span>
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
export default AddBranch
