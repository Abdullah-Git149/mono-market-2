import React, {useEffect, useState} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import { Link } from 'react-router-dom';
import { MDBDataTable } from 'mdbreact';
import toast, { Toaster } from 'react-hot-toast';
import { allBraction, deleteBraction } from '../../actions/bractionAction';


const Braction = (props) => {	
	const dispatch  = useDispatch();
    const{bractionList,bractionDle} = useSelector((state) => state.bractionReducer);
	let count = 0;
	
	
	const delBraction = (e, bractionID) => {
		e.preventDefault();
        dispatch(deleteBraction(bractionID));
	}

	useEffect(() => {
		if(bractionDle){
		   toast.success(bractionDle.msg);
		}
	},[bractionDle])

	useEffect(() => {
          dispatch(allBraction())
	},[bractionDle])

	return <> 
	<div className="container-fluid">
				<div className="block-header">
					<div className="row clearfix">
						<div className="col-md-6 col-sm-12">
							<h1>Add New Braction</h1>							
						</div>	
						<div className="col-md-6 col-sm-12 text-right hidden-xs">
                            <Link to="/addBraction" className="btn btn-sm btn-primary mr-1" title="">Add New Braction</Link>
                            
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
				
                
				<div className="col-12">
						<div className="table-responsive">
							<table className="table table-hover table-custom spacing8">
								<thead>
									<tr>
										<th>#SNO</th>
										<th>Title</th>
										<th>Image</th>										
										<th>Action</th>
									</tr>
								</thead>
								<tbody>
									{ bractionList? bractionList.map((brac) => (
									
									<tr key={brac._id}>
										<td>{count = count + 1}</td>										
										
										<td>{brac.title}</td>
										<td className="w60">
											<img src={brac.braction_image} data-toggle="tooltip" data-placement="top" title="Avatar Name" alt="Avatar" className="w35 rounded" />
										</td>
										
										
										<td>
										  <i className="fa fa-trash-o" onClick={(e) => delBraction(e, brac._id)}  style={{cursor:'pointer'}}></i>  																								
										</td>	
									</tr>
									
										)) : <tr><td>No Record found!</td></tr> 
									}
									
							
								</tbody>
							</table>
						</div>
					</div>
		</div>
	  </div>	
	</>



}
export default Braction
