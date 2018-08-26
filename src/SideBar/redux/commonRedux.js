// actions
export const TOGGLE_SIDEBAR_VISIBILITY = 'TOGGLE_SIDEBAR_VISIBILITY'
export const TOGGLE_SIDEBAR_DOCKED = 'TOGGLE_SIDEBAR_DOCKED'

// action creators
export const ToggleSideBarVisibility = (visible) => ({type: TOGGLE_SIDEBAR_VISIBILITY, visible})
export const ToggleSideBarDocked = (docked) => ({type: TOGGLE_SIDEBAR_DOCKED, docked})

// reducers
export function Visible(state = true, action) {

    switch (action.type) {

        case TOGGLE_SIDEBAR_VISIBILITY:

            return (typeof (action.visible) === typeof (true) ? action.docked : !state)
        default:
            return state
    }
}

export function Docked(state = true, action) {

    switch (action.type) {

        case TOGGLE_SIDEBAR_DOCKED:

            return (typeof (action.docked) === typeof (true) ? action.docked : !state)
        default:
            return state
    }
}
