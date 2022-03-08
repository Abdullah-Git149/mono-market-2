import React, {useEffect, useState} from 'react';
import {Link, StaticRouter} from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';
import { bractionAdd } from '../../actions/bractionAction';

const AddBraction = () => {	

	const dispatch  = useDispatch();
	
    const{newBracSave,errors} = useSelector((state) => state.bractionReducer);
    const[state, setState] = useState({        
		id:'',
		title:'',
		content:'',
        braction_image:'',
       
    });

  
    
    const handleInputs = (e) => {        
        setState({
            ...state,
            [e.target.name] : e.target.value,            
        })        
    }

    const handleInputsImage = (e) => {    
 
        setState({
            ...state,
            [e.target.name] : e.target.files[0],            
        })        
    }

    
         const saveBraction = async (e) => {
            e.preventDefault();  
            //state.id = edit ? edit: '';           
            dispatch(bractionAdd(state));
         }

    //      useEffect(() => {
    //          if(edit){
    //             dispatch(CustomerEdt(edit));	
    //          }
    //      },[edit])

         // for Saved
         useEffect(() => {
            if(newBracSave){
                toast.success(newBracSave.msg);
                setState({
                    title:'',
                    content:'',
                    braction_image:''
                })
                
            }            
          },[newBracSave])
         // for errors
         useEffect(() => {                       
            if(errors && errors.length > 0){
                errors.map(error => (
                toast.error(error.msg)
                 ))
            }
         },[errors])

    //      useEffect(() => {
    //          if(edit){
    //             if(customerEdit){
    //                 setState({
    //                     ...state,
    //                     customer_name: customerEdit.customer_name,
    //                     description: customerEdit.description,
    //                 })
    //             }
    //         }
    //      },[customerEdit])


      


	return <> 
	<div className="container-fluid">
                <div className="block-header">
                    <div className="row clearfix">
                        <div className="col-md-6 col-sm-12">
                            <h2>Add New Braction</h2>                            
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

                    <form onSubmit={saveBraction}>
	                  <div className="card">
                      
                            <div className="body">
                                
                                <div className="row clearfix">
                                    <div className="col-lg-4 col-md-12">
                                        <div className="form-group">
                                            {/* <input type="hidden" name="id" value={edit ? edit : ''} /> */}
                                            <label style={{color:'#17C2D7'}}>Title</label>
                                            <input type="text" name="title" onChange={handleInputs} value={state.title}   className="form-control" placeholder="Title" />
                                            <span style={{color: 'red'}}>{errors && errors.title ? errors.title.msg : ''}</span>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-12">
                                        <div className="form-group">
                                        <label style={{color:'#17C2D7'}}>Braction Image</label>
                                            
                                        <div className="input-group mb-3">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text">Upload</span>
                                            </div>
                                            <div className="custom-file">
                                                <input type="file"  name="braction_image" onChange={handleInputsImage} className="custom-file-input" id="inputGroupFile01" />
                                                <label className="custom-file-label" htmlFor="inputGroupFile01">Choose file</label>
                                            </div>
                                        </div>

                                        </div>
                                    </div>                                

                                </div>

                                    <div className="row clearfix">
                                        <div className="col-lg-12 col-md-12">
                                            <div className="form-group">
                                            <label style={{color:'#17C2D7'}}>Content</label>
                                            <textarea name="content" onChange={handleInputs} value={state.content} className="form-control" rows="5" cols="30" required=""></textarea>
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
export default AddBraction;
