const initState = {
    loading: false,
    createErrors: [],
    redirect: false,
    message: "",
    posts: [],
    post: {},
    postStatus: false,
    postEditErrors: [],
    allPosts: [],
    count: 0,
    perPage: 0,
    postDetail: {}
}

export const PostReducer = (state = initState, action) => {

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
    } else if (action.type === 'SET_DETAIL') {
        return { ...state, postDetail: action.payload }
    } else {
        return state
    }
}

export const FetchPosts = (state = initState, action) => {
    if (action.type === "SET_POSTS") {
        return { ...state, posts: action.payload }
    } else {
        return state
    }

}

export const FetchPost = (state = initState, action) => {
    if (action.type === "SET_SINGLE_POST") {
        return { ...state, post: action.payload }
    } else if (action.type === "POST_REQUEST") {
        return { ...state, postStatus: true }
    } else if (action.type === "POST_RESET") {
        return { ...state, postStatus: false }
    } else {
        return state
    }

}

export const UpdatePost = (state = initState, action) => {
    if (action.type === "SET_EDIT_ERROR") {
        return { ...state, postEditErrors: action.payload }
    } else if (action.type === "RESET_EDIT_ERRORS") {
        return { ...state, postEditErrors: [] }
    } else {
        return state
    }

}
export const AllPosts = (state = initState, action) => {
    if (action.type === "SHOW_ALLPOSTS") {
        return { ...state, allPosts: action.payload.posts, count: action.payload.count, perPage: action.payload.perPage }
    } else {
        return state
    }
}

export const PurchaseAD = (state = initState, action) => {
    if (action.type === "PURCHASE_AD") {
        return { ...state, message: action.payload }
    } else {
        return state
    }
}