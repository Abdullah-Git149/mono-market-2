import React, {useState, useEffect} from 'react';
import { Link, useHistory } from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import { signin } from '../../actions/userAction';
import toast, { Toaster } from 'react-hot-toast';


const  Login = () => {

	  const dispatch = useDispatch();
	
	  const {user,loginErrors} = useSelector((state) => state.userReducer);		    
	  const history = useHistory();
	  
	  const[state, setState] = useState({
			email:'',
			password: ''
		});
		const handleInputs = (e) => {
			setState({
			   ...state,
				[e.target.name] : e.target.value
			})
	   }

	 
	   const userLogin =  async (e) => {
		e.preventDefault();						 
		dispatch(signin(state));
	  }

	  useEffect(() => {
           
			if(loginErrors.length > 0){
			loginErrors.map(error => (
			toast.error(error.msg)
			 ))
			}
			if(user){
				history.push('/dashboard');
			}
 		},[loginErrors,user])

		return (
			<>
				<div className="pattern">
					<span className="red"></span>
					<span className="indigo"></span>
					<span className="blue"></span>
					<span className="green"></span>
					<span className="orange"></span>
				</div>
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
								<img src="../assets/images/slplogo.png" style={{width:240, height:200}} className="d-inline-block align-top mr-2" alt="Brappy" />
				 
						</div>
						<div className="card">
							<div className="body">
								<p className="lead">Login to your account</p>						
						
								<form className="form-auth-small m-t-20" action="/" onSubmit={userLogin}>
									<div className="form-group">
										<label htmlFor="signin-email" className="control-label sr-only">Email</label>
										<input type="email" name="email" className="form-control round" id="signin-email" placeholder="Email" value={state.email} onChange={handleInputs} />
									</div>
									<div className="form-group">
										<label htmlFor="signin-password" className="control-label sr-only">Password</label>
										<input type="password" name="password" className="form-control round" id="signin-password" placeholder="Password" value={state.password} onChange={handleInputs} />
									</div>									
									
									<button type="submit" className="btn btn-primary btn-round btn-block">LOGIN</button>

									<div className="bottom">
										<span className="helper-text m-b-10"><i className="fa fa-lock"></i> <Link to="/forgotpassword">Forgot password?</Link></span>										
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

export default Login
