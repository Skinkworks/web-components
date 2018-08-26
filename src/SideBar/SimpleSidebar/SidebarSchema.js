import PropTypes from 'prop-types'

const MenuItem = {
    displayName: PropTypes.string.isRequired,
    routeUrl: PropTypes.string.isRequired,
    faIcon: PropTypes.string
}

const ParentItem = {
    displayName: PropTypes.string.isRequired,
    faIcon: PropTypes.string,
    childItems: PropTypes.arrayOf(MenuItem)
}

export const NestedMenuItems = PropTypes.arrayOf(PropTypes.oneOfType(ParentItem, MenuItem)).isRequired
export const SimpleMenuItems = PropTypes.arrayOf(MenuItem).isRequired
