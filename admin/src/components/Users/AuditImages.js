import React, {useEffect, useState} from 'react';
import { SRLWrapper } from "simple-react-lightbox";
import SimpleReactLightbox from 'simple-react-lightbox'
import{useParams,Link} from 'react-router-dom';
import { MDBDataTableV5  } from 'mdbreact';
import {useDispatch,useSelector} from 'react-redux';
import {auditImagesGet} from '../../actions/userAction';
import toast, { Toaster } from 'react-hot-toast';


const AuditImages = () => {	

	const{getAuditImages} = useSelector((state) => state.userReducer);	
    console.log(getAuditImages);
	
    const {hf_id} = useParams();  
	      console.log(hf_id);
     let count = 0;     
	 
      const dispatch  = useDispatch();
		useEffect(() => {							
			dispatch(auditImagesGet(hf_id));							
		},[]);
		
	return <> 
	<div className="container-fluid">
				<div className="block-header">
					<div className="row clearfix">
						<div className="col-md-6 col-sm-12">
							<h1>Audit Report Images</h1>							
						</div>
						<div className="col-md-6 col-sm-12 text-right">
							
							
						</div>
						
					</div>
				</div>
				
				<div className="row clearfix">
				<div className="col-12">
						<div className="col-6"></div>
					</div>

                    {									
                        getAuditImages && getAuditImages.length  ?
                        getAuditImages.map((ite) => (
							<SimpleReactLightbox>
								<div className="col-6">
									<SRLWrapper>
								<a href={`../${ite.hf_images}`}>
									<img src={`../${ite.hf_images}`} width={300} height={200}  /> 
									</a>
									</SRLWrapper>
								</div>
							</SimpleReactLightbox>
						
                        
                        )) 
                    : <div>No Record found!</div> 
                    }
        
				</div>
		</div>
		
	</>



}
export default AuditImages
