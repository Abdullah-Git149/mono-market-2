import React, {useEffect, useState} from 'react';
import{useParams} from 'react-router-dom';
import { MDBDataTableV5  } from 'mdbreact';
import {useDispatch,useSelector} from 'react-redux';
import { adminApproval, surveyDetail, surveylist, userlist } from '../../actions/userAction';
import toast, { Toaster } from 'react-hot-toast';

const SurveyDetail = () => {	

	const{getSurveyDetail, adminApprovalStatus} = useSelector((state) => state.userReducer);	
	
    const {product_id} = useParams(); 
    console.log(getSurveyDetail); 
	 
     let count = 0;     
	const[tablebody, setTableBody] = useState([]);
	 
      const dispatch  = useDispatch();
		useEffect(() => {	
						
			dispatch(surveyDetail(product_id));				
			
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
							 <h2>{getSurveyDetail? getSurveyDetail[0].title.toUpperCase() : ''}</h2> 							
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
										<th>User</th>
										<th>Question</th>
										<th>Answer</th>
										
									</tr>
								</thead>
								<tbody>						
								 {									
								 getSurveyDetail && getSurveyDetail.length  ?
								 getSurveyDetail[0].product_answers.map((ite) => (
									
										<tr key={ite._id}>
											<td>{count = count + 1 }</td>											
											<td>{ite.user_id.user_fname}</td>											
											<td>{ite.question_id.question}</td>											
											<td>{ite.answer}</td>											
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
export default SurveyDetail
