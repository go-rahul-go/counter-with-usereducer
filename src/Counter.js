import React,{useReducer} from "react";
import "./style.css";

const initialValue=0;
const reducerFunction = (state,action)=>{
    switch(action.type)
    {
        case 'increase':
              return state+1;
        case "decrease":
            if(state>0)
                return state-1;     
        default:
            return 0;

    }
        
}

const Counter = ()=>{

    const [state,dispatch] = useReducer(reducerFunction,initialValue)

    return(
        <div className="container">
            <p>{state}</p>
            <i class="fa-solid fa-plus" onClick={()=>dispatch({type:"increase"})}></i>
            <i class="fa-solid fa-minus" onClick={()=>dispatch({type:"decrease"})}></i>
        </div>
    )

}

export default Counter;