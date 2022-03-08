import React, {useEffect, useState} from 'react';
import{useParams, useHistory} from 'react-router-dom';
import Dropzone from '../common/DropzoneExample';
import {useDispatch,useSelector} from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';
import { allCategory, productEditID, productSave } from '../../actions/productAction';



const AddProduct = (props) => {	

    const dispatch  = useDispatch();
    const{getAllCategory, saveProduct,errors,productEdit} = useSelector((state) => state.productReducer);		   	
   

    const {edit} = useParams();
      console.log(edit);
   
    const[state, setState] = useState({        
		id:'',
		category_id:'',
		title:'',
        description:'',                      
    });
    const [featuresArr, setFeaturesArr] = useState([]);
    
    const handleInputs = (e) => {        
        setState({
            ...state,
            [e.target.name] : e.target.value
        })        
    }

    const handleInputsImage = (e) => {    
 
        setState({
            ...state,
            [e.target.name] : e.target.files,            
        })        
    }

	useEffect(() => {
		dispatch(allCategory());
	}, [])
         const saveProductData = async (e) => {
            e.preventDefault();  

            state.id = edit ? edit: '';           
            dispatch(productSave({...state, featuresArr}))
         }

         useEffect(() => {             
             if(edit){                
                dispatch(productEditID(edit));	
             }
         },[edit])

         // for Saved
         useEffect(() => {
            if(saveProduct){
                
                setState({
                    id:'',
                    category_id:'',
                    title:'',
                    description:'', 
                })
                window.location.reload(false);
                toast.success(saveProduct.msg);
            }
            
         },[saveProduct])
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
                if(productEdit){
                    setState({
                        ...state,
                        title: productEdit.title,
                        category_id: productEdit.category_id,
                        description: productEdit.description,                        
                                            
                    })
                }
            }
         },[productEdit])

       


	return <>         
<div className="container-fluid">
                <div className="block-header">
                    <div className="row clearfix">
                        <div className="col-md-6 col-sm-12">
                            <h2>Add New Product</h2>                            
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

                    <form onSubmit={saveProductData}>
	                  <div className="card">
                      
                            <div className="body">
                                
                                <div className="row clearfix">


                                <div className="col-lg-4 col-md-12">
                                        <div className="form-group">
                                            <input type="hidden" name="id" value={edit ? edit : ''} />
                                            <label style={{color:'#17C2D7'}}>Category Name</label>
                                            <select className="form-control" name="category_id" value={state.category_id} onChange={handleInputs}>
                                                <option value="">-- Select Category --</option>
                                                {getAllCategory ? getAllCategory.map((agn) => (
                                                <option value={agn._id} key={agn._id} selected={state.category_id?"selected":""}>{agn.category_name}</option>
                                                )) : 'No Record found!'
							                }
                                            </select>
                                            <span style={{color: 'red'}}>{errors && errors.category_id ? errors.category_id.msg : ''}</span>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-12">
                                        <div className="form-group">                                            
                                            <label style={{color:'#17C2D7'}}>Product Name</label>
                                            <input type="text" name="title" value={state.title} onChange={handleInputs}  className="form-control" placeholder="Product title" />
                                            <span style={{color: 'red'}}>{errors && errors.title ? errors.title.msg : ''}</span>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-12">
                                        <div className="form-group">                                        
                                            <label style={{color:'#17C2D7'}}>Description</label>
                                            <input type="text" name="description" value={state.description} onChange={handleInputs}  className="form-control" placeholder="Description" />                                                                                        
                                        </div>
                                    </div>
                                    
                                   
                                </div>

                                <div className="row clearfix">


                                    {!productEdit ? 
                                     <div className=" col-lg-4 col-md-12" style={{marginLeft:15}}>                                     
                                            <div className="form-group">                                                    
                                                <input type="file" multiple  name="product_images" onChange={handleInputsImage} className="form-control" id="inputGroupFile01" />                                                
                                                <label className="custom-file-label" htmlFor="inputGroupFile01">Upload Product Images</label>
                                            </div>
                                     </div>
                                     : '' 
                                    }

                                    {/* <div className="col-lg-12 col-md-12">
                                        <Dropzone onChange={handleInputsImage} name="product_images[]" />                                 
                                    </div> */}
                                </div>

                                {/* <div className="row clearfix">
                                   <button type="button" onClick={addFeaturesClick}  className="btn btn-round btn-primary mr-1">Add Feature</button>
                                </div> */}
                              
                                

                                    <button type="submit"  className="btn btn-round btn-primary mr-1" style={{marginTop:20}}>Save</button>
                             
                            
                            </div>                            
                        </div>                          
                        </form>           
                        </div>                       
                     </div>
                     </div>
                   
	</>



}
export default AddProduct
