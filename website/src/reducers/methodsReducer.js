// 'methods' (with a 's') variable represent all methods existing

import {methodsFromDb} from '../fakeDb'

const initialState = []


export const initializeMethods = () => {
    return { type: 'INITIALIZE'}
}

export const deleteOne = (id) => {
    return { type: 'DELETE_ONE', data: { id: id } }
}

export const saveMethod = (method) => {
    return { type: 'SAVE_METHOD', data: method }
}


//---------------------------------------------------------------------------------
//---------------------------------------------------------------------------------
const methodsReducer = (state = initialState, action) => {
    //console.log('state now: ', state)
    //console.log('action', action)

    let newMethods

    switch (action.type) {
        case 'INITIALIZE' :
            return methodsFromDb
        
        case 'DELETE_ONE' :
            newMethods = [...state]
            return ( newMethods.filter( (method) => method.id !== Number(action.data.id) ) )

        case 'SAVE_METHOD' :
            newMethods = [...state]
            return newMethods.concat(action.data)           
                
      default: return state
    }
}
  
export default methodsReducer