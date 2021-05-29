const initialState = {
    items : [],
    loading : false,
    error: null
}
 function postReducer( state= initialState,action){
  switch (action.type){
   case 'FETCH_POSTS_REQUEST' :
      return {...state,
            loading: true,
            error: null
      }
  case 'FETCH_POSTS_SUCCESS' :
      return {...state,
          loading: false,
          items : action.payload,
          error: null
  }
  case 'FETCH_POSTS_ERROR' :
      return {...state,
          loading: false,
          items : [],
          error: action.error
      }
   default :  return state
  }
 }
export default postReducer;