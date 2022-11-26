import * as types from "./actionTypes"

const initialState = {
  name: "",
  isLogin: false,
  isLoginError: false,
  isLoginErrorMessage: "",
  isSingup: false,
  isSingupError: false,
  isSingupErrorMessage: "",
  ForgotPasswordSuccess:false,
  ForgotPasswordFail:"",

};

export const reducer = (state = initialState, action) => {

  const { type, payload } = action;

  switch (type) {
    case types.USER_SINGUP_REQUEST:
      return {
        //   ...state,
      }
    case types.USER_SINGUP_SUCCESS:
      return {
        ...state,
        isSingup: true,
        isLogin: false,
        ForgotPasswordSuccess:false,
        ForgotPasswordFail:"",
      }
    case types.USER_SINGUP_FAILURE:
      return {
        //   ...state,
      }
    case types.USER_LOGIN_REQUEST:
      return {
        //   ...state,
        //   isLoading:true
      }
    case types.USER_LOGIN_SUCCESS:
      return {
        ...state,
        isLogin: true,
        name: payload,
        isSingup: false,
        ForgotPasswordSuccess:false,
        ForgotPasswordFail:"",
      }
    case types.USER_LOGIN_FAILURE:
      return {
        //   ...state,
        //   isLoading:false,
        //   images:[],
        //   isError:true
      }
    case types.USER_FORGOT_PASSWORD_REQUEST:
      return {
        //   ...state,
        //   isLoading:false,
        //   images:[],
        //   isError:true
      }
    case types.USER_FORGOT_PASSWORD_SUCCESS:
      return {
          ...state,
          ForgotPasswordSuccess:true,
          name: "",
          isLogin: false,
          isLoginError: false,
          isLoginErrorMessage: "",
          isSingup: false,
          isSingupError: false,
          isSingupErrorMessage: "",
          ForgotPasswordFail:"",
        //   isLoading:false,
        //   images:[],
        //   isError:true
      }
    case types.USER_FORGOT_PASSWORD_FAILURE:
      return {
          ...state,
          ForgotPasswordFail:"User Not Found",
          name: "",
          isLogin: false,
          isLoginError: false,
          isLoginErrorMessage: "",
          isSingup: false,
          isSingupError: false,
          isSingupErrorMessage: "",
          ForgotPasswordSuccess:false,
        //   isLoading:false,
        //   images:[],
        //   isError:true
      }
  }
  return state;
};
