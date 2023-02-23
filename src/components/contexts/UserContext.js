import { createContext } from "react";
const UserContext = createContext({
    cart: {},
    displayUser:()=>{}
})
export default UserContext;