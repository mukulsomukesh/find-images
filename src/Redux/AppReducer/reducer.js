import * as types from "./actionTypes"

const initialState = {
  images: [],
  totalPage:0,
  isLoading: false,
  isError: false,
};

export const reducer = (state = initialState , action) => {
  const {type,payload} = action;

  switch(type){
    case types.GET_IMAGE_DATA_REQUEST:
      return {
        ...state,
        isLoading:true
      }
    case types.GET_IMAGE_DATA_SUCCESS:
      return {
        ...state,
        isLoading:false,
        images:payload,
        isError:false
      }
    case types.GET_IMAGE_DATA_FAILURE:
      return {
        ...state,
        isLoading:false,
        images:[],
        isError:true
      }
      
  }
  return state;
};
