import axios from "axios";
import * as types from "./actionTypes";
const getImages = (queryParams) => (dispatch) => {
    dispatch({type:types.GET_IMAGE_DATA_REQUEST})
    // return axios.get("https://api.unsplash.com/search/photos?per_page=15&query=baby&orientation=landscape&client_id=KRFOvRm4NohXdmfsevdelfYzvq8WWVp3jfwLDJatWhc",dispatch)
 return axios.get("https://api.unsplash.com/search/photos?client_id=KRFOvRm4NohXdmfsevdelfYzvq8WWVp3jfwLDJatWhc",queryParams)
    .then(r => {
        console.log("res ",r)
        dispatch({type:types.GET_IMAGE_DATA_SUCCESS,payload:r.data})
    })
    .catch((e) => {
        dispatch({type:types.GET_IMAGE_DATA_FAILURE,payload:e})
    })
}

export {getImages}