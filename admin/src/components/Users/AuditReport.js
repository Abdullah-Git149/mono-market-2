import React, {useEffect, useState} from 'react';
import{useParams,Link} from 'react-router-dom';
import { MDBDataTableV5  } from 'mdbreact';
import {useDispatch,useSelector} from 'react-redux';
import { adminApproval, auditReports, userlist } from '../../actions/userAction';
import toast, { Toaster } from 'react-hot-toast';

const AuditReport = () => {	

	const{getAuditReport} = useSelector((state) => state.userReducer);	
	
    const {user_id} = useParams();  
	 console.log(getAuditReport);
     let count = 0;     
	 
      const dispatch  = useDispatch();
		useEffect(() => {							
			dispatch(auditReports(user_id));							
		},[]);
		
	return <> 
	<div className="container-fluid">
				<div className="block-header">
					<div className="row clearfix">
						<div className="col-md-6 col-sm-12">
							<h1>Audit Report</h1>							
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
										<th>Subject</th>								
										<th>Description</th>
										<th>Date</th>
										<th>View Image</th>
										
									</tr>
								</thead>
								<tbody>						
								 {									
								 getAuditReport && getAuditReport.length  ?
								 getAuditReport.map((ite) => (
									
										<tr key={ite._id}>
											<td>{count = count + 1 }</td>
											<td>{ite.subject}</td>											
											<td>{ite.description}</td>											
											<td>{ite.createdAt}</td>											
											<td>
											<Link to={`/audit-images/${ite._id}`}><button type="button"  className="btn btn-sm btn-default" title="Images" data-for="send" data-tip="true" currentitem="false"><i className="icon-envelope"></i></button></Link>	
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
export default AuditReport
