import { combineReducers } from 'redux'
import {
    SelectSidebarVisible,
    SelectSidebarDocked,
    Visible,
    Docked
} from './commonRedux'

// selectors
const SelectSidebarVisible = (state) => state.SimpleSidebarState.Visible
const SelectSidebarDocked = (state) => state.SimpleSidebarState.Docked

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

export const SimpleSidebarState = combineReducers({
    Visible,
    Docked
})
