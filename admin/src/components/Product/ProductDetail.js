import React, {useEffect, useState} from 'react';
import{useParams, useHistory, Link} from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';
import Tooltip from '../common/toolTip';
import { productDetailsID } from '../../actions/productAction';



const ProductDetail = (props) => {	

    const dispatch  = useDispatch();
    const{productDetail} = useSelector((state) => state.productReducer);		   	
	
    const {product_id} = useParams();
      
      // for Get Order By ID
         useEffect(() => {                       
            dispatch(productDetailsID(product_id));
         },[])

	return <>         

		<div className="container-fluid">
			<div className="block-header">
				<div className="row clearfix">
					<div className="col-md-6 col-sm-12">
						<h1>Product Details</h1>						
					</div>					
				</div>
			</div>

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
			<div className="row clearfix">

            <div className="col-lg-4 col-md-12">
					<div className="card">
						<div className="header">
							{/* <h2>Users</h2> */}
						</div>
						<div className="body">
							<div className="row text-center">
								<div className="col-6 border-right pb-4 pt-4">
									<label className="mb-0">Coupons Name</label>
									<h4 className="font-30 font-weight-bold text-col-blue">{productDetail?.title}</h4>
								</div>
								<div className="col-6 pb-4 pt-4">
									<label className="mb-0">Coupons Price</label>
									<h4 className="font-30 font-weight-bold text-col-blue">{productDetail?.price}</h4>
								</div>
							</div>
						</div>
						<div className="body">
							<div className="form-group">
								<label className="d-block">Category Name <span className="float-right">{productDetail?.category_id.category_name}</span></label>
								<div className="progress progress-xxs">
									<div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{ width: "50%" }}></div>
								</div>
							</div>
							

						</div>
					</div>
				</div>

                <div className="col-lg-6 col-md-12">     
                <h4>Product Rating</h4>           
					<div className="table-responsive">
						<table className="table table-hover table-custom spacing5">
							<thead>
								<tr>								
									<th style={{ width: "50px" }}>Product Rate</th>
									<th style={{ width: "50px" }}>User Name</th>
									<th style={{ width: "50px" }}>Details</th>
									
								</tr>
							</thead>
							<tbody>
                                {productDetail?.rating.map((ite, index) => (
								<tr key={ite._id}>
									<td>{ite.rate}</td>									
									<td>{ite.user_id.user_fname}</td>									
									<td>{ite.comments}</td>
									
								</tr>
								
                                    ))}
                                
								
							</tbody>
						</table>
					</div>
				</div>

				
			</div>
		</div>
	

	</>



}
export default ProductDetail
