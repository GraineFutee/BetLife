// Reducer for all others variables useful inside the method management form

const initialState = {
    championshipIsDefine: false,
    teams: [],
    displaySimulation: false,
    simulatedMethod: null
}


export const initializeExceptTeams = () => {
    return { type: 'INITIALIZE_EXCEPT_TEAMS'}
}

export const initializeTeams = (teams) => {
    return { type: 'INIT_TEAMS', data: teams }
}

export const setChampionshipIsDefine = () => {
    return { type: 'CHAMPIONSHIP_DEFINED' }
}

// Can use one for this ?
export const openSimulation = (method) => {
    return { type: 'OPEN_SIMULATION', data: method }
}

export const closeSimulation = () => {
    return { type: 'CLOSE_SIMULATION' }
}


const managementReducer = (state = initialState, action) => {
    //console.log('state now: ', state)
    //console.log('action', action)

    let newState = {...state}

    switch (action.type) {
        case 'INITIALIZE_EXCEPT_TEAMS' :
            return {
                championshipIsDefine: false,
                modal: { active: false, for: "", value: [] },
                teams: state.teams,
                drawIsSelected: false,
                displaySimulation: false,
                simulatedMethod: null
            }
        
        case 'INIT_TEAMS' :
            newState.teams = action.data
            return newState

        case 'CHAMPIONSHIP_DEFINED' :
            newState.championshipIsDefine = true
            return newState 
            
        case 'CLOSE_SIMULATION' :
            newState.displaySimulation = false
            newState.simulatedMethod = null
            return newState

        case 'OPEN_SIMULATION' :
            newState.displaySimulation = true
            newState.simulatedMethod = action.data
            return newState
                
      default: return state
    }
}
  
export default managementReducer