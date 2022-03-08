import{USER_SIGNIN_SUCCESS,COMPANY_LIST,AUDIT_IMAGES,AUDIT_REPORT,SURVEY_DETAIL,SURVEY_LIST,EDIT_COMPANY,ADD_COMPANY,USER_SIGNIN_FAIL,USER_SIGNOUT,USER_LIST,DASHBAORD_DATA,USER_CHANGE_PASSWORD,USER_APPROVAL
    } from '../constents/constents';
import jwt_decode from "jwt-decode";
const initState = {
    loading: false,
    regeisterErrors: [],
    errors:[], 
    loginErrors: [],
    token: '',
    user: ''
};

const verifyToken = token => {
    const decodedToken = jwt_decode(token);
    const expiresIn = new Date(decodedToken.exp * 1000);
     if(new Date() > expiresIn){
         localStorage.removeItem('myToken');
     }
     else{
         return decodedToken;
     }
    
}
const token = localStorage.getItem('myToken');

if(token){
     const decoded = verifyToken(token);
          initState.token = token;
          const{user} = decoded;
          initState.user = user;
}

const userReducer = (state = initState, action) => {
        switch(action.type){
         
                case USER_SIGNIN_SUCCESS:
                    const decoded = verifyToken(action.payload);                    
                        const{user} = decoded;                          
                        return{...state, token: action.payload, user: user}
                    case USER_SIGNIN_FAIL:
                        return {loading: false, loginErrors: action.payload};
                     case USER_SIGNOUT:                      
                     return{...state, token: '', user: ''}

                     case USER_CHANGE_PASSWORD:
                        return {loading: false, passwordUpdate: action.payload, loginErrors: ''};
                     
                     case DASHBAORD_DATA:              
                     return{...state, getDashbaord: action.payload}
                     
                     case USER_APPROVAL:              
                     return{...state, adminApprovalStatus: action.payload}
                     
                     case USER_LIST:                         
                        return {...state, loading: true, users: action.payload };  
                        
                     case COMPANY_LIST:                         
                        return {...state, loading: true, companies: action.payload,companyEdit:'' }; 
                     
                     case ADD_COMPANY:                         
                        return {...state, loading: true, addCompany: action.payload,companyEdit:'' }; 
                     
                     case EDIT_COMPANY:                         
                        return {...state, loading: true, companyEdit: action.payload}; 

                     case SURVEY_LIST:                         
                        return {...state, loading: true, surveyList: action.payload}; 
                     
                     case SURVEY_DETAIL:                         
                        return {...state, loading: true, getSurveyDetail: action.payload}; 
                     
                     case AUDIT_REPORT:                         
                        return {...state, loading: true, getAuditReport: action.payload}; 
                        
                     case AUDIT_IMAGES:                         
                        return {...state, loading: true, getAuditImages: action.payload}; 
                   
                default:
                return state;
           
            }
     
}

export default userReducer;