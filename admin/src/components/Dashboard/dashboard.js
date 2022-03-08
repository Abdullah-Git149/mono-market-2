import React,{useEffect, useState} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import { dashbaordData } from '../../actions/userAction';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Dashboard = () => {
     
	 const dispatch = useDispatch();
	 const {getDashbaord} = useSelector((state) => state.userReducer);
	 
	 useEffect(() => {
           dispatch(dashbaordData());
	 },[])


	return (
		<div className="container-fluid">
			<div className="block-header">
				<div className="row clearfix">
					<div className="col-md-6 col-sm-12">
						<h1>Welcome To Alaska Admin</h1>						 
					</div>					
				</div>
			</div>

			<div className="row clearfix">
				<div className="col-lg-3 col-md-6">
					<div className="card">
						<div className="body">
							<div className="d-flex align-items-center">
								<div className="icon-in-bg bg-indigo text-white rounded-circle"><i className="fa fa-users"></i></div>
								<div className="ml-4">
									<span>Total Users</span>
									<h4 className="mb-0 font-weight-medium">{getDashbaord?.nurse}</h4>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-lg-3 col-md-6">
					<div className="card">
						<div className="body">
							<div className="d-flex align-items-center">
								<div className="icon-in-bg bg-azura text-white rounded-circle"><i className="fa fa-users"></i></div>
								<div className="ml-4">
									<span>Total Coupons</span>
									<h4 className="mb-0 font-weight-medium">{getDashbaord?.product}</h4>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-lg-3 col-md-6">
					<div className="card">
						<div className="body">
							<div className="d-flex align-items-center">
								<div className="icon-in-bg bg-orange text-white rounded-circle"><i className="fa fa-briefcase"></i></div>
								<div className="ml-4">
									<span>Android Users</span>
									<h4 className="mb-0 font-weight-medium">{getDashbaord?.android}</h4>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-lg-3 col-md-6">
					<div className="card">
						<div className="body">
							<div className="d-flex align-items-center">
								<div className="icon-in-bg bg-orange text-white rounded-circle"><i className="fa fa-briefcase"></i></div>
								<div className="ml-4">
									<span>IOS Users</span>
									<h4 className="mb-0 font-weight-medium">{getDashbaord?.ios}</h4>
								</div>
							</div>
						</div>
					</div>
				</div>
				
			</div>

			
		</div>
	);

}
export default Dashboard
