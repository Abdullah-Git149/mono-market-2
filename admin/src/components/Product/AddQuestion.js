import React, {useEffect, useState} from 'react';
import{useParams, useHistory} from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';
import { allCategory, allProduct, CategoryAdd, categoryEditID, QuestionAdd } from '../../actions/productAction';


const AddQuestion = (props) => {	

    const dispatch  = useDispatch();
    const{saveQuestion,errors,categoryEditUpdate,getAllProduct} = useSelector((state) => state.productReducer);		   	
   

    const {edit} = useParams();
      
    const[state, setState] = useState({        
		id:'',		
		product_id:'',		
        question:'',        
    });
    
    const handleInputs = (e) => {        
        setState({
            ...state,
            [e.target.name] : e.target.value
        })        
    }
   
         const saveCategory = async (e) => {
            e.preventDefault();             
            state.id = edit ? edit: '';           
            dispatch(QuestionAdd(state))
         }    

         useEffect(() => {
            dispatch(allProduct());
        }, []) 

         useEffect(() => {             
             if(edit){                        
                dispatch(categoryEditID(edit));	
             }
         },[edit])

         // for Saved
         useEffect(() => {             
            if(saveQuestion){
                toast.success(saveQuestion.msg);
                setState({
                    id:'',		
                    product_id:'',		
                    question:'',     
                })
                
                //dispatch(allCategory());
            }
            
         },[saveQuestion])
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
                            <h2>Add New Question</h2>                            
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
                                                    <label style={{color:'#17C2D7'}}>Product Name</label>
                                                    <select className="form-control" name="product_id" value={state.product_id} onChange={handleInputs}>
                                                        <option value="">-- Select Product --</option>
                                                        {getAllProduct ? getAllProduct.map((agn) => (
                                                        <option value={agn._id} key={agn._id} selected={state.product_id?"selected":""}>{agn.title}</option>
                                                        )) : 'No Record found!'
                                                    }
                                                    </select>
                                                    <span style={{color: 'red'}}>{errors && errors.category_id ? errors.category_id.msg : ''}</span>
                                            </div>
                                     </div>                                              
                                </div>

                                <div className="row clearfix">
                                    <div className="col-lg-4 col-md-12">
                                            <div className="form-group">                                        
                                            <label style={{color:'#17C2D7'}}>Question</label>
                                                <input type="text" name="question" value={state.question} onChange={handleInputs}  className="form-control"  placeholder="Question" />
                                                <span style={{color: 'red'}}>{errors && errors.question ? errors.question.msg : ''}</span>
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
export default AddQuestion
