// Reducer for all variables useful inside the method management form

const initialState = {
    championshipIsDefine: false,
    modal: { active: false, for: "", value: [] },
    teams: [],
    drawIsSelected: false,
    displaySimulation: false,
    simulatedMethod: null
}


export const initializeExceptTeams = () => {
    return { type: 'INITIALIZE_EXCEPT_TEAMS'}
}

export const initializeTeams = (teams) => {
    return { type: 'INIT_TEAMS', data: teams }
}

export const initializeModal = () => {
    return { type: 'INIT_MODAL' }
}

export const setChampionshipIsDefine = () => {
    return { type: 'CHAMPIONSHIP_DEFINED' }
}

export const setDrawIsSelected = () => {
    return { type: 'DRAW_SELECTED' }
}
export const setDrawIsNotSelected = () => {
    return { type: 'DRAW_NOT_SELECTED' }
}

export const setModalFor = (forWhat) => {
    return { type: 'SET_MODAL_FOR', data: { forWhat: forWhat} }
}

export const setModalValue = (value) => {
    return { type: 'SET_MODAL_VALUE', data: { value: value} }
}

export const addTeamToModal = (teamName) => {
    return { type: 'ADD_TEAM', data: teamName }
}

export const removeTeamToModal = (teamName) => {
    return { type: 'REMOVE_TEAM', data: teamName }
}

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

        case 'INIT_MODAL' :
            newState.modal = { active: false, for: "", value: [] }
            return newState

        case 'CHAMPIONSHIP_DEFINED' :
            newState.championshipIsDefine = true
            return newState 
            
        case 'DRAW_SELECTED' :
            newState.drawIsSelected = true
            return newState 

        case 'DRAW_NOT_SELECTED' :
            newState.drawIsSelected = false
            return newState 

        case 'SET_MODAL_FOR' :
            newState.modal = { active: true, for: action.data.forWhat, value: [] }
            return newState

        case 'SET_MODAL_VALUE' :
            newState.modal = { active: true, for: newState.modal.for, value: action.data.value }
            return newState

        case 'ADD_TEAM' :
            newState.modal.value.push(action.data)
            console.log(state.modal.value)
            return newState
    
        case 'REMOVE_TEAM' :
            newState.modal.value.splice( newState.modal.value.indexOf(action.data), 1 )
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