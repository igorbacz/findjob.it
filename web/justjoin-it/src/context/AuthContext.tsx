import { createContext, useReducer } from "react";

export const UserContext = createContext({ email: "", token: "" });

// export const authReducer = (state: any, action: { type: any; payload: any }) => {
//   switch (action.type) {
//     case "LOGIN":
//       return { user: action.payload };
//     case "LOGOUT":
//       return { user: null };
//     default:
//       return state;
//   }
// };

// export const UserContextProvider = ({ children }: any) => {
//   const [state, dispatch] = useReducer(authReducer, {
//     user: null,
//   });

//   console.log("AuthContext state:", state);

//   return <UserContext.Provider value={{ ...state, dispatch }}>{children}</UserContext.Provider>;
// };
