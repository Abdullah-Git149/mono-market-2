import React, { useEffect, useState } from 'react';
import { MDBDataTableV5  } from 'mdbreact';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { allProduct, productDeleteID } from '../../actions/productAction';


const ProductList = (props) => {

	const dispatch = useDispatch();
	const { getAllProduct, deleteProduct } = useSelector((state) => state.productReducer);	
	const[tablebody, setTableBody] = useState([]);	
	
	useEffect(() => {
		dispatch(allProduct());
	}, [])

	const DeleteProduct = (product_id) => {		
		dispatch(productDeleteID(product_id));
	}

	useEffect(() => {
		if(deleteProduct){
			toast.error(deleteProduct.msg);			
		}
		dispatch(allProduct());
	 },[deleteProduct])

	useEffect(() => {
        const userDataFiltered = getAllProduct?.map((x) => {
			let jsx  = (<>
				<Link to={`product-add/${x._id}`}><button type="button"  className="btn btn-sm btn-default" title="Edit" data-for="send" data-tip="true" currentitem="false"><i className="icon-pencil"></i></button></Link>					             				
				<button type="button" onClick={(e) => DeleteProduct(x._id)}  className="btn btn-sm btn-default" title="Delete" data-for="send" data-tip="true" currentitem="false"><i className="icon-trash"></i></button>
				{/* <Link to={`question-add/${x._id}`}><button type="button"  className="btn btn-sm btn-default" title="Rating Details" data-for="send" data-tip="true" currentitem="false"><i className="icon-envelope"></i></button></Link> */}
				</>
				)

			x.action = jsx;			
			return x
		})
		
		setTableBody({

			columns: [
				
				// {
				// 	label: 'Agency Name',
				// 	field: 'order_number',
				// 	width: 150,					
				// },
				{
					label: 'Product Name',
					field: 'title',
					width: 150,					
				},			
				{
					label: 'Brand Name',
					field: 'brand',
					width: 150,					
				},			
				{
					label: 'Price',
					field: 'price',
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
	  },[getAllProduct])

	return <>
		<div className="row clearfix">
					<div className="col-lg-12">
						<div className="card">
							<div className="header" style={{marginTop:20}}>
								<h4>Product List </h4>								
								<Link to="/product-add" className="btn btn-sm btn-primary mr-1" title="">Add New Product</Link>
								
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
									{getAllProduct?.length && (
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
export default ProductList
