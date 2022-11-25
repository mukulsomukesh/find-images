import * as types from "./actionTypes"

const initialState = {
  name: "",
  isLogin: false,
  isLoginError: false,
  isLoginErrorMessage: "",
  isSingup: false,
  isSingupError: false,
  isSingupErrorMessage: "",

};

export const reducer = (state = initialState , action) => {
    const {type,payload} = action;

    
    switch(type){
      case types.USER_SINGUP_REQUEST:
        return {
        //   ...state,
        //   isLoading:true
        }
      case types.USER_SINGUP_SUCCESS:
        return {
          ...state,
          isSingup:true,
        }
      case types.USER_SINGUP_FAILURE:
        return {
        //   ...state,
        //   isLoading:false,
        //   images:[],
        //   isError:true
        }
        case types.USER_LOGIN_REQUEST:
            return {
            //   ...state,
            //   isLoading:true
            }
          case types.USER_LOGIN_SUCCESS:
            return {
              ...state,
              isLogin:true,
              name:payload,
              // isError:false
            }
          case types.USER_LOGIN_FAILURE:
            return {
            //   ...state,
            //   isLoading:false,
            //   images:[],
            //   isError:true
            }
    }
    return state;
  };
  