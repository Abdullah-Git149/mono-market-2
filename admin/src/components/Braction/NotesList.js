import React, {useEffect, useState} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import { Link } from 'react-router-dom';
import { MDBDataTable } from 'mdbreact';
import toast, { Toaster } from 'react-hot-toast';
import { allNotes, deleteNotes } from '../../actions/bractionAction';



const NotesList = (props) => {	
	const dispatch  = useDispatch();
    const{getNotesList,notesDle} = useSelector((state) => state.bractionReducer);
	let count = 0;
    
	const [noteList, setNoteList] = useState([]);

	
	const delNotes = (e, noteID) => {
		e.preventDefault();
        dispatch(deleteNotes(noteID));
	}

	useEffect(() => {
		if(notesDle){
		   toast.success(notesDle.msg);
		}
	},[notesDle])

	useEffect(() => {
          dispatch(allNotes());			  		   
	},[notesDle])

	return <> 
	<div className="container-fluid">
				<div className="block-header">
					<div className="row clearfix">
						<div className="col-md-6 col-sm-12">
							<h1>Add New Notes</h1>							
						</div>	
						<div className="col-md-6 col-sm-12 text-right hidden-xs">
                            <Link to="/addNote" className="btn btn-sm btn-primary mr-1" title="">Add New Notes</Link>
                            
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
										<th>Note</th>										
										<th>Action</th>
									</tr>
								</thead>
								<tbody>									
									{getNotesList? getNotesList.map((nt) => (
									  
									<tr key={nt._id}>										
										<td>{count = count + 1}</td>																				
										<td>{nt.title}</td>
										<td>{nt.note}</td>
										
										<td>
										  <i className="fa fa-trash-o" onClick={(e) => delNotes(e, nt._id)}  style={{cursor:'pointer'}}></i>  																								
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
export default NotesList
