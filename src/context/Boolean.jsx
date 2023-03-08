import { useMediaQuery } from "@chakra-ui/react";
import { Children, useState } from "react";
import { createContext } from "react";



 export const booleanContext=createContext()


export default function BooleanState({children}) {
    const [Than800] = useMediaQuery("(min-width: 900px)");
const [state,setState]=useState(true)

const toggle=()=>{
    setState((prev)=>!prev)
}

const value={state,toggle,Than800}

return <booleanContext.Provider  value={value} >{children}</booleanContext.Provider>


}