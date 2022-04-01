import { createStore, applyMiddleware, combineReducers } from "redux"
import thunkMiddleware from "redux-thunk"
import AuthReducer from "./reducers/AuthReducer"
import { PostReducer, FetchPosts, FetchPost, UpdatePost, AllPosts, PurchaseAD } from "./reducers/PostReducer"
import { composeWithDevTools } from "redux-devtools-extension"
const rootReducers = combineReducers({
  AuthReducer,
  PostReducer,
  FetchPosts,
  FetchPost,
  UpdatePost,
  AllPosts,
  PurchaseAD
})

const middleWares = [thunkMiddleware]
const Store = createStore(
  rootReducers,
  composeWithDevTools(applyMiddleware(...middleWares))
);

export default Store