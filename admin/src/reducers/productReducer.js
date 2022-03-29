import { ERROR_PRODUCT, ALL_PRODUCT, ADD_QUESTION, ALL_QUESTION, DELETE_QUESTION, ADD_PRODUCT, DELETE_PRODUCT, EDIT_PRODUCT, ALL_CATEGORY, ADD_CATEGORY, CATEGORY_EDIT, EMPTY_CATEGORY, PRODUCT_DETAILS, DELETE_CATEGORY } from '../constents/constents';

const initState = {
    errors: [],
    allAds: []
};

const productReducer = (state = initState, action) => {
    switch (action.type) {

        case ALL_CATEGORY:
            return { ...state, getAllCategory: action.payload }

        case ADD_CATEGORY:
            return { ...state, categorySaved: action.payload, categoryEditUpdate: '' }

        case EMPTY_CATEGORY:
            return { ...state, categorySaved: '', categoryEditUpdate: '' }

        case CATEGORY_EDIT:
            return { ...state, categoryEditUpdate: action.payload, categorySaved: '' }

        case DELETE_CATEGORY:
            return { ...state, deleteCategory: action.payload, errors: '' }
        // Product work 
        case ALL_PRODUCT:
            return { ...state, getAllProduct: action.payload }

        case ADD_PRODUCT:
            return { ...state, saveProduct: action.payload, errors: '' }
        case "SETTING_ALL_ADS":
            return { ...state, allAds: action.payload }

        case DELETE_PRODUCT:
            return { ...state, deleteProduct: action.payload, errors: '' }

        case EDIT_PRODUCT:
            return { ...state, productEdit: action.payload, errors: '' }

        case PRODUCT_DETAILS:
            return { ...state, productDetail: action.payload, errors: '' }

        case ADD_QUESTION:
            return { ...state, saveQuestion: action.payload, errors: '' }

        case ALL_QUESTION:
            return { ...state, allQuestionList: action.payload, errors: '', deleteQuestions: '' }

        case DELETE_QUESTION:
            return { ...state, deleteQuestions: action.payload, errors: '' }

        case ERROR_PRODUCT:
            return { ...state, errors: action.payload };

        default:
            return state;

    }

}

export default productReducer;