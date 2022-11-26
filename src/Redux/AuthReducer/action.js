import axios from "axios";
import * as types from "./actionTypes";
import { createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth'
import { auth } from "../../firebase/firebase"


const SingupFun = (email, pass, name) => (dispatch) => {
    dispatch({type:types.USER_SINGUP_REQUEST})
    createUserWithEmailAndPassword(auth, email, pass)
      .then((res) => {
        console.log(res)
        const user = res.user;
        updateProfile(user, {
          displayName: name,
        });
      })
      .catch((err) => {
        console.log("singup error => ", err)
      })
}

const ForgotPasswordFun = (email) => (dispatch) =>  {
  sendPasswordResetEmail(auth, email)
  .then(() => {
    dispatch({type:types.USER_FORGOT_PASSWORD_SUCCESS})
  })
  .catch((err)=>{
    dispatch({type:types.USER_FORGOT_PASSWORD_FAILURE})
  })
}

const LoginFun = (email, pass) => (dispatch) => {
    dispatch({type:types.USER_LOGIN_REQUEST})
    signInWithEmailAndPassword(auth, email, pass)
      .then( async  (res) => {
         dispatch({type:types.USER_LOGIN_SUCCESS,payload:res.user.displayName})
      })
      .catch((err) => {
        console.log(err.message);
      });

}

export {SingupFun, LoginFun, ForgotPasswordFun}