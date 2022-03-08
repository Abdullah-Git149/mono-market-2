import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';
import { passwordSave } from '../../actions/userAction';

const  ForgotPassword = () => {
          
	 const dispatch = useDispatch();
	 const{passwordUpdate,loginErrors} = useSelector((state) => state.userReducer);

		const [state, setState] = useState({
			user_email : ''
		});
          
		const handleInput = (e) => {                  
				  setState({
					...state,
					  [e.target.name] : e.target.value
				  })
		  }

      const postData = (e) => {
		e.preventDefault();  
		  dispatch(passwordSave(state));
	  }

	  useEffect(() => {
		if(passwordUpdate){
			toast.success(passwordUpdate.msg);
			setState({
				user_email:''                    
			})
		}            
	  },[passwordUpdate])

			// for errors
			useEffect(() => {                       
				if(loginErrors && loginErrors.length > 0){
					loginErrors.map(error => (
					toast.error(error.msg)
					))
				}
			},[loginErrors])

		return (
			<>
				{/* <div class="pattern">
					<span class="red"></span>
					<span class="indigo"></span>
					<span class="blue"></span>
					<span class="green"></span>
					<span class="orange"></span>
				</div> */}
				<div className="auth-main particles_js">
					<div className="auth_div vivify popIn">
						<div className="auth_brand">
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
						<img src="../assets/images/redrocklogo.png" style={{width:240, height:100}} className="d-inline-block align-top mr-2" alt="Brappy" />
						</div>
						<div className="card forgot-pass">
							<div className="body">
								<p className="lead mb-3"><strong>Oops</strong>,<br /> forgot something?</p>
								<p>Type email to recover password.</p>
								<form className="form-auth-small" onSubmit={postData}>
									<div className="form-group">
										<input type="text" name="user_email" className="form-control round" onChange={handleInput} value={state.user_email}  placeholder="Email" />
									</div>
									<button type="submit" className="btn btn-round btn-primary btn-lg btn-block">RESET PASSWORD</button>
									<div className="bottom">
										<span className="helper-text">Know your password? <Link to="/login">Login</Link></span>
									</div>
								</form>
							</div>
						</div>
					</div>
					<div id="particles-js"></div>
				</div>
			</>
			);
		}

export default ForgotPassword
