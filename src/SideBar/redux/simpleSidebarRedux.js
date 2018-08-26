import { combineReducers } from 'redux'

// actions
const TOGGLE_SIDEBAR_VISIBILITY = 'TOGGLE_SIDEBAR_VISIBILITY'
const TOGGLE_SIDEBAR_DOCKED = 'TOGGLE_SIDEBAR_DOCKED'

// action creators
export const ToggleSideBarVisibility = (visible) => ({type: TOGGLE_SIDEBAR_VISIBILITY, visible})
export const ToggleSideBarDocked = (docked) => ({type: TOGGLE_SIDEBAR_DOCKED, docked})

// selectors
const SelectSidebarVisible = (state) => state.SidebarState.Visible
const SelectSidebarDocked = (state) => state.SidebarState.Docked

export const SidebarSelectors = {
    SelectSidebarVisible,
    SelectSidebarDocked
}

// reducers
function Visible(state = true, action) {

    switch (action.type) {

        case TOGGLE_SIDEBAR_VISIBILITY:

            return (typeof (action.visible) === typeof (true) ? action.docked : !state)
        default:
            return state
    }
}

function Docked(state = true, action) {

    switch (action.type) {

        case TOGGLE_SIDEBAR_DOCKED:

            return (typeof (action.docked) === typeof (true) ? action.docked : !state)
        default:
            return state
    }
}

export const SimpleSidebarReducer = combineReducers({
    Visible,
    Docked
})
