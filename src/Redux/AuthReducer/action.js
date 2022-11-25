import axios from "axios";
import * as types from "./actionTypes";
import { createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from "../../firebase/firebase"


const SingupFun = (email, pass, name) => (dispatch) => {
    dispatch({type:types.USER_SINGUP_REQUEST})

    console.log("singup => ", email, pass, name)

    createUserWithEmailAndPassword(auth, email, pass)
      .then((res) => {
        console.log(res)
        const user = res.user;
        updateProfile(user, {
          displayName: name,
        });
        // console.log(user)
        // setSingupBtnDisable(false)
        // setSingup({ name: "", email: "", pass: "" })
      })
      .catch((err) => {
        console.log("singup error => ", err)
        // setSingup({ name: "", email: "", pass: "" })
      })


//     // return axios.get("https://api.unsplash.com/search/photos?per_page=15&query=baby&orientation=landscape&client_id=KRFOvRm4NohXdmfsevdelfYzvq8WWVp3jfwLDJatWhc",dispatch)
//  return axios.get("https://api.unsplash.com/search/photos?client_id=KRFOvRm4NohXdmfsevdelfYzvq8WWVp3jfwLDJatWhc",queryParams)
//     .then(r => {

//         dispatch({type:types.USER_SINGUP_SUCCESS,payload:r.data})
//     })
//     .catch((e) => {
//         dispatch({type:types.USER_SINGUP_FAILURE,payload:e})
//     })
console.log("singup => ", email, pass, name)
}

const LoginFun = (email, pass) => (dispatch) => {
    dispatch({type:types.USER_LOGIN_REQUEST})
    
    console.log("here is ",email, pass)

    signInWithEmailAndPassword(auth, email, pass)
      .then( async  (res) => {
        console.log("login success => ",res)
         dispatch({type:types.USER_LOGIN_SUCCESS,payload:res.user.displayName})
        // setSubmitButtonDisabled(false);

        // navigate("/");
      })
      .catch((err) => {
        // setSubmitButtonDisabled(false);
        // setErrorMsg(err.message);
        console.log(err.message);
      });

    // return axios.get("https://api.unsplash.com/search/photos?per_page=15&query=baby&orientation=landscape&client_id=KRFOvRm4NohXdmfsevdelfYzvq8WWVp3jfwLDJatWhc",dispatch)
//  return axios.get("https://api.unsplash.com/search/photos?client_id=KRFOvRm4NohXdmfsevdelfYzvq8WWVp3jfwLDJatWhc",queryParams)
//     .then(r => {
//         dispatch({type:types.USER_LOGIN_SUCCESS,payload:r.data})
//     })
//     .catch((e) => {
//         dispatch({type:types.USER_LOGIN_FAILURE,payload:e})
//     }) mukulaS@gmail.com
}

export {SingupFun, LoginFun}