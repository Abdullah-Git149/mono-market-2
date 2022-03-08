import React, {useEffect, useState} from 'react';
import {Link, useParams} from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';
import { privacyTc, updatedTC } from '../../actions/agencyAction';
import CKEditor from "react-ckeditor-component";

const TC = (props) => {	

	const dispatch  = useDispatch();
	let ppm = new URLSearchParams(props.location.search).get("content_type");
    
    const{privacyTCL,tcUpdate} = useSelector((state) => state.agencyReducer);
    
    
    const[state, setState] = useState({             
		tc:'tc',		
		content_content:'please enter',        
       
    });
   
         const saveNote = async (e) => {
            e.preventDefault();              
            //state.id = edit ? edit: '';           
            dispatch(updatedTC(state));
         }

        useEffect(() => {            
           dispatch(privacyTc(ppm));   
           //updateContent();           
        },[tcUpdate]);

        useEffect(() => {
            if(privacyTCL != undefined){                
                setState({
                    ...state,
                    content_content: privacyTCL.content_content                    
                })
            }   
        },[privacyTCL])

       const updateContent = (newContent) => {
            setState({
                content_content: newContent
            })
       }

        const onChange = (evt) => {          
          var newContent = evt.editor.getData();
          var tc = 'tc';
          setState({
            content_content: newContent,
            tc : tc
          })
        }
        // Update tc
        useEffect(() => {
            if(tcUpdate){
                toast.success(tcUpdate.msg);
                setState({
                    content_content:'',                    
                })
            }
        },[tcUpdate])
       
	return <> 
	<div className="container-fluid">
                <div className="block-header">
                    <div className="row clearfix">
                        <div className="col-md-6 col-sm-12">
                            <h2>Term & Condition</h2>                            
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

                    <form onSubmit={saveNote}>
	                  <div className="card">
                      
                            <div className="body">
                                
                                <div className="row clearfix">
                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group">
                                            {/* <input type="hidden" name="content_type" value={state.content_type} /> */}
                                            <label style={{color:'#17C2D7'}}>Term & Condition</label>
                                            <CKEditor
                                                content={state.content_content}                                
                                                events={{                                            
                                                "change": onChange
                                            }}    
                                            />
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
export default TC;
