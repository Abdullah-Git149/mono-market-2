import React, {useEffect, useState} from 'react';
import{useParams,Link} from 'react-router-dom';
import { MDBDataTableV5  } from 'mdbreact';
import {useDispatch,useSelector} from 'react-redux';
import { adminApproval, surveylist, userlist } from '../../actions/userAction';
import toast, { Toaster } from 'react-hot-toast';

const UserServey = () => {	

	const{users, surveyList, adminApprovalStatus} = useSelector((state) => state.userReducer);	
	
    const {user_id} = useParams();  
	 
     let count = 0;     
	 
      const dispatch  = useDispatch();
		useEffect(() => {	
						
			dispatch(surveylist(user_id));				
			
		},[]);
		
		const changeStatus = (user_id) => {
			 dispatch(adminApproval(user_id));
			 dispatch(userlist());			
		}

		useEffect(() => {                       
			if(adminApprovalStatus){
			   toast.success(adminApprovalStatus.msg);
			}		
		},[adminApprovalStatus])
		// Data Table work
	


	return <> 
	<div className="container-fluid">
				<div className="block-header">
					<div className="row clearfix">
						<div className="col-md-6 col-sm-12">
							<h1>Survey List</h1>							
						</div>
						<div className="col-md-6 col-sm-12 text-right">
							
							
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
										<th>SNO</th>
										<th>Product Name</th>								
										<th>View Details</th>
										
									</tr>
								</thead>
								<tbody>						
								 {									
								 surveyList && surveyList.length  ?
								 surveyList.map((ite) => (
									
										<tr key={ite._id}>
											<td>{count = count + 1 }</td>
											<td>{ite.title}</td>											
											<td>
											<Link to={`/survey-detail/${ite._id}`}><button type="button"  className="btn btn-sm btn-default" title="Details" data-for="send" data-tip="true" currentitem="false"><i className="icon-envelope"></i></button></Link>	
									        </td>											
											</tr>
								  )) 
								: <tr><td>No Record found!</td></tr> 
								}
																	
								</tbody>
							</table>
						</div>
					</div>
					
				</div>
		</div>
		
	</>



}
export default UserServey
