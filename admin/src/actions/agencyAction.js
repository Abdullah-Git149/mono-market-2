import axios from 'axios';
import instance from "../components/Config/axios";
import{ERROR_AGENCY,ALL_AGENCY,ADD_AGENCY,AGENCY_BY_ID,ALL_BRANCHES,PP,TC,UPDATE_PP,UPDATE_TC,DASHBAORD_DATA,
    ADD_BRANCH,AGENCY_EDIT,BRANCH_EDIT,DELETE_BRANCH,DELETE_AGENCY} from '../constents/constents';

// here to get All AGENCY
export const allAgency = () => async(dispatch) => {    
    try{
        const {data: {agencyList}} = await axios.get('/api/agencyList');
        dispatch({type: ALL_AGENCY, payload: agencyList});
        
    }catch(error){
        dispatch({type: ERROR_AGENCY, payload: error.response.data.error});
    }
}

export const AgencyAdd = (state) => {
    return async (dispatch) => {
        const config = {
            headers: {
                'Content-Type': 'application/json',
            }
        }       
         try {            
             const{data} = await axios.post('/api/AddAgency', state, config);
             dispatch({type: ADD_AGENCY, payload: data});
             
         } catch (error) {
            dispatch({type: ERROR_AGENCY, payload: error.response.data.error});
          
         }
    }
} 

// Here to get AGENCY by id
export const AGENCYByID = (agency_id) => {   
    return async (dispatch) => {     
        try {                                  
            const{data} = await axios.get(`/api/getAGENCYByID/${agency_id}`);             
            dispatch({type: AGENCY_BY_ID, payload: data});
            
        } catch (error) {
            dispatch({type: ERROR_AGENCY, payload: error.response.data.error});          
        }
    }
}

// Here edit AGENCY
export const agencyEditID = (agency_id) => {   
    return async (dispatch) => {     
        try {                                  
            const{data: {agencyEdit}} = await axios.get(`/api/agencyEdit/${agency_id}`);             
            dispatch({type: AGENCY_EDIT, payload: agencyEdit});
            
        } catch (error) {
            dispatch({type: ERROR_AGENCY, payload: error.response.data.error});          
        }
    }
}


// here to get All Branches
export const allbranches = () => async(dispatch) => {    
    try{
        const {data: {branchesList}} = await axios.get('/api/getAllBranches');
        dispatch({type: ALL_BRANCHES, payload: branchesList});
        
    }catch(error){
        dispatch({type: ERROR_AGENCY, payload: error.response.data.error});
    }
}

// Add Branch
export const BranchAdd = (state) => {
    return async (dispatch) => {
        const config = {
            headers: {
                'Content-Type': 'application/json',
            }
        }       
         try {            
             const{data} = await axios.post('/api/BranchAgency', state, config);
             dispatch({type: ADD_BRANCH, payload: data});
             
         } catch (error) {
            dispatch({type: ERROR_AGENCY, payload: error.response.data.error});
          
         }
    }
} 

// Here edit Branch
export const branchEditID = (branch_id) => {      
    return async (dispatch) => {     
        try {                       
            const{data: {branchEdit}} = await axios.get(`/api/branchEditData/${branch_id}`);             
            dispatch({type: BRANCH_EDIT, payload: branchEdit});
            
        } catch (error) {
            dispatch({type: ERROR_AGENCY, payload: error.response.data.error});          
        }
    }
}


// Here Delete Branch
export const branchDeleteID = (branch_id) => {      
    return async (dispatch) => {     
        try {                                   
            const{data} = await axios.post(`/api/deletBranche/${branch_id}`);             
            dispatch({type: DELETE_BRANCH, payload: data});
            
        } catch (error) {
            dispatch({type: ERROR_AGENCY, payload: error.response.data.error});          
        }
    }
}

// Here Delete Agency
export const agencyDeleteID = (agency_id) => {      
    return async (dispatch) => {     
        try {                                   
            const{data} = await axios.post(`/api/deletAgency/${agency_id}`);             
            dispatch({type: DELETE_AGENCY, payload: data});
            
        } catch (error) {
            dispatch({type: ERROR_AGENCY, payload: error.response.data.error});          
        }
    }
}

// Here to Get Datshboar Data
export const dashbaordData = () => {
    return async (dispatch) => {
        try {                                  
            const {data} = await axios.get('/api/dashboard');
            dispatch({type: DASHBAORD_DATA, payload: data});
            
        } catch (error) {
            dispatch({type: ERROR_AGENCY, payload: error.response.data.error});          
        }
    }
}


// get pp
export const privacyPo = (content_type) => {
    return async(dispatch) => {    
        try{            
            const {data:{data}} = await axios.get(`/api/content?content_type=${content_type}`);            
            dispatch({type: PP, payload: data});
            
        }catch(error){
            dispatch({type: ERROR_AGENCY, payload: error.response.data.error}); 
        }
    }
}

// For upated pp
export const updatedPP = (state) => {
    return async (dispatch) => {
        const config = {
            headers: {
                'Content-Type': 'application/json',
            }
        }       
         try {            
             const{data} = await axios.post('/api/updateContent', state, config);
             dispatch({type: UPDATE_PP, payload: data});
             
         } catch (error) {
            dispatch({type: ERROR_AGENCY, payload: error.response.data.error});
          
         }
    }
} 

// For upated tc
export const updatedTC = (state) => {
    return async (dispatch) => {
        const config = {
            headers: {
                'Content-Type': 'application/json',
            }
        }       
         try {            
             const{data} = await axios.post('/api/updateContentTc', state, config);
             dispatch({type: UPDATE_TC, payload: data});
             
         } catch (error) {
            dispatch({type: ERROR_AGENCY, payload: error.response.data.error});
          
         }
    }
} 

// get pp
export const privacyTc = (content_type) => {
    return async(dispatch) => {    
        try{                         
            const {data:{data}} = await axios.get(`/api/content?content_type=${content_type}`);                        
            dispatch({type: TC, payload: data});
            
        }catch(error){
            dispatch({type: ERROR_AGENCY, payload: error.response.data.error}); 
        }
    }
}