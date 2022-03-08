import{ALL_AGENCY,ADD_AGENCY,ERROR_AGENCY,AGENCY_BY_ID,AGENCY_EDIT,ALL_BRANCHES,PP,TC,
        ADD_BRANCH,UPDATE_PP,UPDATE_TC,DASHBAORD_DATA,BRANCH_EDIT,DELETE_BRANCH,DELETE_AGENCY} from '../constents/constents';

const initState = {
    errors:[], 
};

const agencyReducer = (state = initState, action) => {
    switch(action.type){
     
            case ALL_AGENCY:                      
            return{...state, agencyList: action.payload,agencySaved:'', errors:'',agencyDelete:''}                
            
            case ADD_AGENCY:                      
            return{...state, agencySaved: action.payload,agencyList:''}  
            
            case AGENCY_BY_ID:                      
            return{...state, AGENCYData: action.payload}  
            
            case AGENCY_EDIT:                      
            return{...state, agencyEdit: action.payload}  
            
            case DELETE_AGENCY:                      
            return{...state, agencyDelete: action.payload}  

            case ALL_BRANCHES:                      
            return{...state, branchesList: action.payload,agencySaved:'', errors:'',branchDelete:''}   

            case ADD_BRANCH:                      
            return{...state, branchSaved: action.payload,agencyList:'', branchesList: ''} 

            case BRANCH_EDIT:                      
            return{...state, branchEdit: action.payload}  
           
            case DELETE_BRANCH:                      
            return{...state, branchDelete: action.payload}  

            case DASHBAORD_DATA:              
                    return{...state, getDashbaord: action.payload}
           
            case PP:              
                    return{...state, privacyPol: action.payload, errors: '', ppUpdate:'',tcUpdate:''}

            case TC:              
                    return{...state, privacyTCL: action.payload, errors: '', ppUpdate:'',tcUpdate:''}
            
            case UPDATE_PP:              
                    return{...state, ppUpdate: action.payload, errors: '', privacyPol:'',tcUpdate:''}

            case UPDATE_TC:              
                    return{...state, tcUpdate: action.payload, errors: '', privacyPol:'',ppUpdate:''}
            
            case ERROR_AGENCY:                    
                    return {...state, errors: action.payload};

        default:
        return state;
       
        }
 
}

export default agencyReducer;