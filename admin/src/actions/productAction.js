import axios from 'axios';
import { ERROR_PRODUCT, ALL_PRODUCT, ALL_QUESTION, DELETE_QUESTION, ADD_QUESTION, ADD_PRODUCT, DELETE_PRODUCT, EDIT_PRODUCT, ALL_CATEGORY, ADD_CATEGORY, CATEGORY_EDIT, DELETE_CATEGORY, PRODUCT_DETAILS } from '../constents/constents';


// here to get All Category
export const allCategory = () => async (dispatch) => {
    try {
        const { data: { categoryList } } = await axios.get('/api/getAllCategory');
        dispatch({ type: ALL_CATEGORY, payload: categoryList });

    } catch (error) {
        dispatch({ type: ERROR_PRODUCT, payload: error.response.data.error });
    }
}

// Add Category
export const CategoryAdd = (state) => {
    return async (dispatch) => {

        let formData = new FormData();

        formData.append("id", state.id);
        formData.append("category_name", state.category_name);
        formData.append("category_image", state.category_image);
        console.log(state);
        //  formData.append("product_images", state.product_images)

        //     if(state.product_images){
        //     [...state.product_images].forEach((image, index) => {
        //      formData.append(`product_images[]`, image);
        //    });
        //  }      
        const config = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'multipart/form-data',
            }
        }
        try {
            const { data } = await axios.post('/api/AddCategory', formData, state, config);
            dispatch({ type: ADD_CATEGORY, payload: data });

        } catch (error) {
            dispatch({ type: ERROR_PRODUCT, payload: error.response.data.error });
        }
    }
}

// Here edit category
export const categoryEditID = (category_id) => {
    return async (dispatch) => {
        try {
            const { data: { categoryEdit } } = await axios.get(`/api/categoryEdit/${category_id}`);
            dispatch({ type: CATEGORY_EDIT, payload: categoryEdit });

        } catch (error) {
            dispatch({ type: ERROR_PRODUCT, payload: error.response.data.error });
        }
    }
}

// Here Delete Category
export const categoryDeleteID = (category_id) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.post(`/api/deletCategory/${category_id}`);
            dispatch({ type: DELETE_CATEGORY, payload: data });

        } catch (error) {
            dispatch({ type: ERROR_PRODUCT, payload: error.response.data.error });
        }
    }
}

// here to get All Product
export const allProduct = () => async (dispatch) => {
    try {
        const { data: { getAllProduct } } = await axios.get('/api/getAllProduct');
        dispatch({ type: ALL_PRODUCT, payload: getAllProduct });

    } catch (error) {
        dispatch({ type: ERROR_PRODUCT, payload: error.response.data.error });
    }
}
// GET ALL ADS
export const getAllAdAction = () => {
    return async (dispatch, getState) => {
        await axios.get("http://localhost:5000/api/allposts").then((res) => {
            console.log("mymy", res)
            const data = res.data.posts

            dispatch({ type: "SETTING_ALL_ADS", payload: data })
        }).catch((error) => {
            dispatch({ type: ERROR_PRODUCT, payload: error.response.data.error });

        })

    }
}


// Here save product
export const productSave = (state) => {
    return async (dispatch) => {

        let formData = new FormData();

        formData.append("id", state.id);
        formData.append("title", state.title);
        formData.append("description", state.description);
        formData.append("category_id", state.category_id);

        if (state.product_images) {
            formData.append("product_images", state.product_images[0]);

        }

        //    if(state.product_images){
        //    [...state.product_images].forEach((image, index) => {
        //     formData.append(`product_images[]`, image);
        //   });
        // }      
        const config = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'multipart/form-data',
            }
        }
        try {
            const { data } = await axios.post('/api/addPrdocut', formData, state, config);
            dispatch({ type: ADD_PRODUCT, payload: data });

        } catch (error) {
            dispatch({ type: ERROR_PRODUCT, payload: error.response.data.error });
        }
    }
}


// Here Delete Product
export const productDeleteID = (product_id) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.post(`/api/deleteProduct/${product_id}`);
            dispatch({ type: DELETE_PRODUCT, payload: data });

        } catch (error) {
            dispatch({ type: ERROR_PRODUCT, payload: error.response.data.error });
        }
    }
}

// Here edit Product
export const productEditID = (product_id) => {
    return async (dispatch) => {
        try {
            const { data: { productEdit } } = await axios.get(`/api/productEdit/${product_id}`);
            dispatch({ type: EDIT_PRODUCT, payload: productEdit });

        } catch (error) {
            dispatch({ type: ERROR_PRODUCT, payload: error.response.data.error });
        }
    }
}

// Here Product Details
export const productDetailsID = (product_id) => {
    return async (dispatch) => {
        try {
            const { data: { productDetail } } = await axios.get(`/api/productDetail/${product_id}`);
            dispatch({ type: PRODUCT_DETAILS, payload: productDetail });

        } catch (error) {
            dispatch({ type: ERROR_PRODUCT, payload: error.response.data.error });
        }
    }
}

// here to get All Product
export const allQuestion = () => async (dispatch) => {
    try {
        const { data } = await axios.get('/api/getQustionList');
        dispatch({ type: ALL_QUESTION, payload: data.data });

    } catch (error) {
        dispatch({ type: ERROR_PRODUCT, payload: error.response.data.error });
    }
}

export const QuestionAdd = (state) => {
    return async (dispatch) => {
        const config = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
            }
        }
        try {
            const { data } = await axios.post('/api/AddNewQuestion', state, config);
            dispatch({ type: ADD_QUESTION, payload: data });

        } catch (error) {
            dispatch({ type: ERROR_PRODUCT, payload: error.response.data.error });
        }
    }
}

// Here Delete Question
export const questionDeleteID = (question_id) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.post(`/api/deleteQuestionById/${question_id}`);
            dispatch({ type: DELETE_QUESTION, payload: data });

        } catch (error) {
            dispatch({ type: ERROR_PRODUCT, payload: error.response.data.error });
        }
    }
}