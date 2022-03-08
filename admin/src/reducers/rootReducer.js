import { combineReducers } from 'redux';
import settings from './settings';
import userReducer from './userReducer';
import productReducer from './productReducer';
import agencyReducer from './agencyReducer';

// const initialState = {
//     userReducer: {
//         userInfo: localStorage.getItem('userInfo') ? JSON.stringify(localStorage.getItem('userInfo')) : null
//     }
// }

export default combineReducers({
    settings,
    userReducer,        
    productReducer,
    agencyReducer,    
});