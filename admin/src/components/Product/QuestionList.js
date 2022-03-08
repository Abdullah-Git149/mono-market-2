import React, {useEffect, useState} from 'react';
import { MDBDataTableV5  } from 'mdbreact';
import { Link } from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';
import { allQuestion, questionDeleteID } from '../../actions/productAction';

const QuestionList = () => {	

	const{allQuestionList,deleteQuestions} = useSelector((state) => state.productReducer);	
	//console.log('login user data',user._id);		
	const[tablebody, setTableBody] = useState([]);
	 
      const dispatch  = useDispatch();

		useEffect(() => {				
			dispatch(allQuestion());	
		
		},[]);

        const DeleteQuestion = (question_id) => {		
            dispatch(questionDeleteID(question_id));
        }

        useEffect(() => {
            if(deleteQuestions){
                toast.error(deleteQuestions.msg);			
            }
            dispatch(allQuestion());
         },[deleteQuestions])
		

		// Data Table work
		useEffect(() => {
			const userDataFiltered = allQuestionList?.map((x) => {
				let jsx  = (<>						
						<button type="button" onClick={(e) => DeleteQuestion(x._id)}  className="btn btn-sm btn-default" title="Delete" data-for="send" data-tip="true" currentitem="false"><i className="icon-trash"></i></button>
					</>
					)					

				for (const [key, value] of Object.entries(x)) {
					if(value === null) {
						x[key] = undefined
					}					
				}
				x.action = jsx;				
				return x
				
			})
			
	
			setTableBody({
	
				columns: [
					
					{
						label: 'Question',
						field: 'question',
						width: 150,					
					},										
					{
						label: 'Action',
						field: 'action',
						width: 10
					}
					
				],
			
				rows : userDataFiltered ? userDataFiltered : [],	
			  })
		  },[allQuestionList])


	return <> 
	<div className="row clearfix">
					<div className="col-lg-12">
						<div className="card">
							<div className="header" style={{marginTop:20}}>
								<h4>Question List </h4>
                                <Link to="/question-add" className="btn btn-sm btn-primary mr-1" title="">Add New Question</Link>
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
							</div>
							<div className="body">
								<div className="table-responsive">
									{allQuestionList?.length && (
									<MDBDataTableV5
										noBottomColumns
										className="table table-hover js-basic-example dataTable table-custom spacing5"
										entriesOptions={[5, 10, 20, 25]}
										entries={10}
										paging
										pagesAmount={15}
										data={tablebody}                                        
                                        
										// searchTop
										sortRows={['user_email']}
										 //searchBottom={true}
										// onPageChange={()=>{ activePage: 2, pagesAmount: 5 }}
									/>)}
									
								</div>
							</div>
						</div>
					</div>
					
				</div>

		
	</>



}
export default QuestionList
