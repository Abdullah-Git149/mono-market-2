import axios from "axios"
// const token = localStorage.getItem('mytoken')
export const createPostAction = (formData) => {
    return async (dispatch, getState) => {
        dispatch({ type: "SET_LOADER" })
        const { AuthReducer: { token } } = getState()
        console.log("your data", token);
        try {
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
            await axios.post("http://localhost:5000/api/addPost", formData, config).then((res) => {
                console.log("Db data", res)

                dispatch({ type: "CLOSE_LOADER" })
                dispatch({ type: "REDIRECT_TRUE" })
                // dispatch({ type: "REMOVE_ERRORS" })
                dispatch({ type: "SET_MESSAGE", payload: res.data.msg })

            }).catch((error) => {
                // console.log("mainnnn error", e)
                dispatch({ type: "CLOSE_LOADER" })
                const errors = error.response.data
                console.log(errors)
                dispatch({ type: "CREATE_ERROR", payload: errors })
                console.log(error.response.data);
                console.log(error.message)
            })


        } catch (error) {

        }
    }
}

export const fetchPosts = (id) => {
    return async (dispatch, getState) => {
        const { AuthReducer: { token } } = getState()
        dispatch({ type: "SET_LOADER" })
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        await axios.get(`http://localhost:5000/api/fetchPosts/${id}`, config).then((res) => {
            dispatch({ type: "CLOSE_LOADER" })
            const myPosts = res.data.response
            dispatch({ type: "SET_POSTS", payload: myPosts })
            console.log(myPosts)
        }).catch((err) => {

            dispatch({ type: "CLOSE_LOADER" })
            console.log(err);

        })
    }
}