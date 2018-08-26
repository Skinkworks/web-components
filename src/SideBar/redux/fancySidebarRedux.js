import { combineReducers } from 'redux'
import {
    SelectSidebarVisible,
    SelectSidebarDocked,
    Visible,
    Docked
} from './commonRedux'

// actions
export const TOGGLE_SIDEBAR_COLLAPSED = 'TOGGLE_SIDEBAR_COLLAPSED'

// action creators
export const ToggleSideBarCollapsed = (collapsed) => ({type: TOGGLE_SIDEBAR_COLLAPSED, collapsed})

// selectors
const SelectSidebarVisible = (state) => state.FancySidebarState.Visible
const SelectSidebarDocked = (state) => state.FancySidebarState.Docked
const SelectSidebarCollapsed = (state) => state.FancySidebarState.Collapsed

export const FancySidebarSelectors = {
    SelectSidebarVisible,
    SelectSidebarDocked,
    SelectSidebarCollapsed
}

// reducers
function Collapsed(state = true, action) {

    switch (action.type) {

        case TOGGLE_SIDEBAR_COLLAPSED:

            return (typeof (action.collapsed) === typeof (true) ? action.collapsed : !state)
        default:
            return state
    }
}

export const FancySidebarState = combineReducers({
    Visible,
    Docked,
    Collapsed
})
