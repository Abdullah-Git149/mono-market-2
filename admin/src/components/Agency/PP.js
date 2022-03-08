import React, {useEffect, useState} from 'react';
import {Link, useParams} from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';
import { privacyPo, updatedPP } from '../../actions/agencyAction';
import CKEditor from "react-ckeditor-component";

const PP = (props) => {	

	const dispatch  = useDispatch();
	let ppm = new URLSearchParams(props.location.search).get("content_type");
    
    const{privacyPol,ppUpdate} = useSelector((state) => state.agencyReducer);
    
    const[state, setState] = useState({             
		pp:'pp',		
		content_content:'please enter',        
       
    });
   
         const saveNote = async (e) => {
            e.preventDefault();  
            console.log('here type',state);
            //state.id = edit ? edit: '';           
            dispatch(updatedPP(state));
         }

        useEffect(() => {
           dispatch(privacyPo(ppm));   
           //updateContent();           
        },[ppUpdate]);

        useEffect(() => {
            if(privacyPol != undefined){                
                setState({
                    ...state,
                    content_content: privacyPol.content_content                    
                })
            }   
        },[privacyPol])

       const updateContent = (newContent) => {
            setState({
                content_content: newContent
            })
       }

        const onChange = (evt) => {          
          var newContent = evt.editor.getData();
          var pp = 'pp';
          setState({
            content_content: newContent,
            pp : pp
          })
        }
        // Update pp
        useEffect(() => {
            if(ppUpdate){
                toast.success(ppUpdate.msg);
                setState({
                    content_content:'',                    
                })
            }
        },[ppUpdate])
       
	return <> 
	<div className="container-fluid">
                <div className="block-header">
                    <div className="row clearfix">
                        <div className="col-md-6 col-sm-12">
                            <h2>Privacy Policy</h2>                            
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
                                            <label style={{color:'#17C2D7'}}>Privacy Policy</label>
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
export default PP;
