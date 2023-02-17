import React from 'react'
import { initialState, reducer } from './reducer';
import { useNavigate } from 'react-router-dom';

const {createContext, useReducer, useEffect, useContext} = React;

const DataContext = createContext({});




export const DataProvider = ({children})=>{

    const [state, dispatch] = useReducer(reducer, initialState);
    const navigate = useNavigate();



    useEffect(()=>{
        const localUser = localStorage.getItem('data');

        if(!state.user ){
            if(!localUser) {
                navigate('/auth')
            }else{
                dispatch({type : "login", payLoad : localUser})
            }
        }
    },[state.user])

    return(
        <DataContext.Provider value={{state, dispatch}}>
            {children }
        </DataContext.Provider>
    )
}


export const useStateValue = ()=> useContext(DataContext);