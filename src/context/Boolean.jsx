import { Children, useState } from "react";
import { createContext } from "react";



 export const booleanContext=createContext()


export default function BooleanState({children}) {

const [state,setState]=useState(true)

const toggle=()=>{
    setState((prev)=>!prev)
}

const value={state,toggle}

return <booleanContext.Provider  value={value} >{children}</booleanContext.Provider>


}