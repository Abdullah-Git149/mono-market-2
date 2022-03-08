import React, { useEffect, useState } from 'react';
import { MDBDataTableV5  } from 'mdbreact';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import {allCategory, categoryDeleteID } from '../../actions/productAction';


const CategoryList = (props) => {

	const dispatch = useDispatch();
	const { getAllCategory, deleteCategory } = useSelector((state) => state.productReducer);	
	const[tablebody, setTableBody] = useState([]);	
	       

	useEffect(() => {
		dispatch(allCategory());
	}, [])

	const DeleteCategory = (category_id) => {		
		dispatch(categoryDeleteID(category_id));
	}

	useEffect(() => {
		if(deleteCategory){
			toast.error(deleteCategory.msg);			
		}
		dispatch(allCategory());
	 },[deleteCategory])

	useEffect(() => {
        if(getAllCategory && getAllCategory.length) {
            const userDataFiltered = getAllCategory?.map((x) => {
                let jsx  = (<>
                    <Link to={`category-add/${x._id}`}><button type="button"  className="btn btn-sm btn-default" title="Edit" data-for="send" data-tip="true" currentitem="false"><i className="icon-pencil"></i></button></Link>					             				
                    <button type="button" onClick={(e) => DeleteCategory(x._id)}  className="btn btn-sm btn-default" title="Delete" data-for="send" data-tip="true" currentitem="false"><i className="icon-trash"></i></button>
                    </>
                    )
    
                x.action = jsx;			
                return x
            })
            
            setTableBody({
    
                columns: [
                    
                    {
                        label: 'Category Name',
                        field: 'category_name',
                        width: 150,					
                    },			
                    {
                        label: 'Action',
                        field: 'action',
                        width: 10
                    }
                    
                ],
    
                rows : userDataFiltered ? userDataFiltered : []
    
              })
        }
	  },[getAllCategory])

	return <>
		<div className="row clearfix">
					<div className="col-lg-12">
						<div className="card">
							<div className="header" style={{marginTop:20}}>
								<h4>Category List </h4>								
								<Link to="/category-add" className="btn btn-sm btn-primary mr-1" title="">Add New Category</Link>
								
								<Toaster
									position="top-center"
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
							</div>
							<div className="body">
								<div className="table-responsive">
									{getAllCategory?.length && (
									<MDBDataTableV5
										noBottomColumns
										className="table table-hover js-basic-example dataTable table-custom spacing5"
										entriesOptions={[5, 10, 20, 25]}
										entries={5}
										paging
										pagesAmount={15}
										data={tablebody}                                        
                                        
										// searchTop
										sortRows={['user_name']}
										 //searchBottom={true}
										// onPageChange={()=>{ activePage: 2, pagesAmount: 5 }}
									/>)}
									
								</div>
							</div>
						</div>
					</div>
					
				</div>

	</>



}
export default CategoryList
