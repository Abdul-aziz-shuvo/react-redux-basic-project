import axios from 'axios'

export const INCREMENT = () =>  {
    return async (dispatch) => {

        dispatch({
            type: "FETCH_POSTS_REQUEST",
        })
        try{
            const result =await axios.get('https://jsonplaceholder.typicode.com/posts');

            dispatch( {
                type: "FETCH_POSTS_SUCCESS",
                payload:result.data
            })

        }catch (error){
            dispatch({type: "FETECH_POSTS_FAIL",error})
        }
    }
}
