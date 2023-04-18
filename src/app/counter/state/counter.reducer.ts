import { changeUserName, customIncrement, decrement, increment,reset} from "./counter.actions";
import { initialState } from "./counter.state";
import {createReducer,on} from "@ngrx/store"

const _counterReducer=createReducer(initialState,
    on(increment,(state)=>{
        return{
            ...state,
            counter:state.counter +1,
        };
    }),
    on(decrement,(state)=>{
        return{
            ...state,
            counter:state.counter-1,
        };
    }),
    on(reset,(state)=>{
        return{
            ...state,
            counter:0,
        }
    }),
    on(customIncrement,(state,action)=>{
        console.log(action);
        return{
            ...state,
            counter:state.counter + action.count
        }
    }),
    on(changeUserName,(state)=>{
        return{
            ...state,
            userName:"Ousama FakherEldine web development",
        }
    })
    
    );

export function counterReducer(state:any,action:any){
    return _counterReducer(state,action);
}