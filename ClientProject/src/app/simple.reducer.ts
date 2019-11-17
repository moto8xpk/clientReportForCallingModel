import { Action } from "@ngrx/store";


export function simpleReducer(state: string ="Hello World", action: Action){
    console.log(action.type,state)

    switch (action.type) {
        case "english":
            return state="hello"
        case "vietnam":
            return state="xin chao"
        default:
            return state;
    }
}