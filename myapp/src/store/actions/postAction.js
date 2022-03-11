import axios from "axios"
const token = localStorage.getItem('mytoken')
export const createPostAction = (formData) => {
    return async (dispatch) => {
        dispatch({ type: "SET_LOADER" })
        try {
            const config = {
                hearers: {
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