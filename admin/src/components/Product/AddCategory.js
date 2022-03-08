import React, {useEffect, useState} from 'react';
import{useParams, useHistory} from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';
import { allCategory, CategoryAdd, categoryEditID } from '../../actions/productAction';


const AddCategory = (props) => {	

    const dispatch  = useDispatch();
    const{categorySaved,errors,categoryEditUpdate} = useSelector((state) => state.productReducer);		   	
   

    const {edit} = useParams();
      
    const[state, setState] = useState({        
		id:'',		
        category_name:'',        
    });
    
    const handleInputs = (e) => {        
        setState({
            ...state,
            [e.target.name] : e.target.value
        })        
    }

    const handleInputsImage = (e) => {               
        setState({
            ...state,
            [e.target.name] : e.target.files[0],            
        })        
    }

         const saveCategory = async (e) => {
            e.preventDefault();             
            state.id = edit ? edit: '';           
            dispatch(CategoryAdd(state))
         }

        //  useEffect(() => {
        //         dispatch(allCategory());
        //  },[])

         useEffect(() => {             
             if(edit){                        
                dispatch(categoryEditID(edit));	
             }
         },[edit])

         // for Saved
         useEffect(() => {             
            if(categorySaved){
                toast.success(categorySaved.msg);
                setState({
                    id:'',            
                    category_name:'',    
                })
                
                //dispatch(allCategory());
            }
            
         },[categorySaved])
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
                if(categoryEditUpdate){
                    setState({
                        ...state,                        
                        category_name: categoryEditUpdate.category_name,
                        category_image: categoryEditUpdate.category_image,                   
                    })
                }
            }
         },[categoryEditUpdate])


	return <>         
<div className="container-fluid">
                <div className="block-header">
                    <div className="row clearfix">
                        <div className="col-md-6 col-sm-12">
                            <h2>Add New Category</h2>                            
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

                    <form onSubmit={saveCategory}>
	                  <div className="card">
                      
                            <div className="body">
                                
                                <div className="row clearfix">
                                   
                                    <div className="col-lg-4 col-md-12">
                                        <div className="form-group">
                                        <input type="hidden" name="id" value={edit ? edit : ''} />
                                        <label style={{color:'#17C2D7'}}>Category Name</label>
                                            <input type="text" name="category_name" value={state.category_name} onChange={handleInputs}  className="form-control"  placeholder="Category Name" />
                                            <span style={{color: 'red'}}>{errors && errors.category_name ? errors.category_name.msg : ''}</span>
                                        </div>
                                    </div>

                                    <div className=" col-lg-4 col-md-12" style={{marginLeft:15}}>                                     
                                            <div className="form-group">                                                
                                                <input type="file" multiple  name="category_image" onChange={handleInputsImage} className="form-control" id="inputGroupFile01" />                                                
                                                <label className="custom-file-label" htmlFor="inputGroupFile01">Upload Product Images</label>
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
export default AddCategory
