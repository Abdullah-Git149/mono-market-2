const initState = {
    loading: false,
    createErrors: [],
    redirect: false,
    message: ""
}

const PostReducer = (state = initState, action) => {

    if (action.type === 'SET_LOADER') {
        return { ...state, loading: true }
    } else if (action.type === 'CLOSE_LOADER') {
        return { ...state, loading: false }
    } else if (action.type === 'CREATE_ERROR') {
        return { ...state, createErrors: action.payload }
    } else if (action.type === 'REDIRECT_TRUE') {
        return { ...state, redirect: true }
    } else if (action.type === 'SET_MESSAGE') {
        return { ...state, message: action.payload }
    } else if (action.type === 'REMOVE_ERRORS') {
        return { ...state, createErrors: [] }
    } else if (action.type === 'REDIRECT_TRUE') {
        return { ...state, redirect: true }
    } else if (action.type === 'REDIRECT_FALSE') {
        return { ...state, redirect: false }
    } else if (action.type === 'REMOVE_MESSAGE') {
        return { ...state, message: "" }
    } else {

        return state
    }
}

export default PostReducer