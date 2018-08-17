import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'

import Sidebar from './SimpleSidebar'

const mapStateToProps = (state) => ({
    sidebarDocked: true,
    sidebarOpen: false
})

function mapDispatchToProps(dispatch) {

    return bindActionCreators({
        toggleSidebar: () => null
    }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Sidebar))
