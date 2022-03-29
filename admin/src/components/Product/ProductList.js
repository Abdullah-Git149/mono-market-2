import React, { useEffect, useState } from 'react';
import { MDBDataTableV5 } from 'mdbreact';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { allProduct, productDeleteID, getAllAdAction } from '../../actions/productAction';


const ProductList = (props) => {

	const dispatch = useDispatch();
	const { getAllProduct, deleteProduct, allAds } = useSelector((state) => state.productReducer);
	const [tablebody, setTableBody] = useState([]);

	useEffect(() => {
		dispatch(allProduct());
	}, [])
	useEffect(() => {
		dispatch(getAllAdAction());

	}, [])

	const DeleteProduct = (product_id) => {
		dispatch(productDeleteID(product_id));
	}

	useEffect(() => {
		if (deleteProduct) {
			toast.error(deleteProduct.msg);
		}
		dispatch(allProduct());
	}, [deleteProduct])

	useEffect(() => {
		const userDataFiltered = allAds?.map((x) => {
			let jsx = (<>
				<Link to={`product-add/${x._id}`}><button type="button" className="btn btn-sm btn-default" title="Edit" data-for="send" data-tip="true" currentitem="false"><i className="icon-pencil"></i></button></Link>
				<button type="button" onClick={(e) => DeleteProduct(x._id)} className="btn btn-sm btn-default" title="Delete" data-for="send" data-tip="true" currentitem="false"><i className="icon-trash"></i></button>
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
					label: 'User name',
					field: 'user_fullname',
					width: 70,
				},
				{
					label: 'Amount',
					field: 'amount',
					width: 50,
				},
				{
					label: 'Calculated Amount',
					field: 'calcValue',
					width: 50,
				},
				{
					label: 'Currency',
					field: 'post_currency',
					width: 50,
				},
				{
					label: 'Ratio',
					field: 'ratio',
					width: 50,
				},
				{
					label: 'Action',
					field: 'action',
					width: 10
				}

			],

			rows: userDataFiltered ? userDataFiltered : []

		})
	}, [allAds])

	return <>
		<div className="row clearfix">
			<div className="col-lg-12">
				<div className="card">
					<div className="header" style={{ marginTop: 20 }}>
						<h4>AD List </h4>
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
							{allAds?.length && (
								<MDBDataTableV5
									noBottomColumns
									className="table table-hover js-basic-example dataTable table-custom spacing5"
									entriesOptions={[5, 10, 20, 25]}
									entries={5}
									paging
									pagesAmount={15}
									data={tablebody}

									// searchTop
									sortRows={['user_fullname']}
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
