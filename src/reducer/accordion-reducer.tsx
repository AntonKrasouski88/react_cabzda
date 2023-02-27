
interface ActionType {
    type: string
}


export interface StateType {
    collapsed: boolean
}


export const accordionReducer = (state: StateType, action: ActionType): StateType => {
    switch (action.type) {
        case 'CHANGE_ACCORDION':
            return {...state, collapsed: !state.collapsed}

        default:
            return state
    }
}