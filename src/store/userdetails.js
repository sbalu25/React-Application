import { createStore } from "redux"
export const STORE_TOKEN = "STORE_TOKEN"
export const STORE_DETAILS = "STORE_DETAILS"
function userDetailsReducer(state={token:"", user:{}}, action){
    switch(action.type){
        case STORE_TOKEN:
            console.log(action.payload)
            return {...state, token:action.payload}
        case STORE_DETAILS:
            return {...state, user:action.user}
    }
}
const store = createStore(userDetailsReducer)
export default store;