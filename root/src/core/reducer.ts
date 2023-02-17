
interface StateI {
    user : any | null
}

export const initialState : StateI = {
    user : null
}


export const reducer = (state : StateI, action : {type : string, payLoad : any})=>{
    return {
        user : action.payLoad
    }
}