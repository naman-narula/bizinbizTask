import React,{useContext, useReducer} from 'react';
import reducer from './reducer';
const AppContext=React.createContext();

function AppProvider({children})
{   
    const intialState={
        aggregate:[],
        searchTerm:'',
        filterList:[],
        primaryView:true,
        searchMode:false,

    }
    const [state,dispatch]=useReducer(reducer,intialState)

    return <AppContext.Provider value={{dispatch,state}}>{children}</AppContext.Provider>
}
export {AppProvider};

export function useGlobalContext(){
return useContext(AppContext);
}
