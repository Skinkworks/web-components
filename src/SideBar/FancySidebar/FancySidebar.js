import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ReactSidebar from 'react-sidebar'
import {NavLink} from 'react-router-dom'
import {map} from 'lodash'

import {SimpleMenuItems} from './SidebarSchema'
import '../common/SideBar.css'

export default class SimpleSidebar extends Component {

    static propTypes = {
        menuItems: SimpleMenuItems,
        sidebarDocked: PropTypes.bool.isRequired,
        sidebarOpen: PropTypes.bool.isRequired,
        title: PropTypes.string,
        toggleSidebar: PropTypes.func.isRequired,
        children: PropTypes.node,
        styles: PropTypes.object
    }

    static defaultProps = {
        menuItems: [],
        sidebarDocked: false,
        sidebarOpen: true
    }

    render() {
        const {
            menuItems,
            sidebarOpen,
            sidebarDocked,
            sidebarCollapsed,
            toggleSidebar,
            title,
            children,
            styles
        } = this.props

        return (
            <ReactSidebar
                sidebar={this.renderMenu(menuItems, title)}
                open={sidebarOpen}
                docked={sidebarDocked}
                onSetOpen={toggleSidebar}
                styles={styles}>
                {children}
            </ReactSidebar>
        )
    }

    renderMenu = (menuItems, title) => {
        return (
            <div className={this.getSideBarClassNames(sidebarOpen, sidebarDocked, sidebarCollapsed)}>
                <ul className='nav nav-pills nav-stacked'>
                    { title
                        ? (<li className='sidebar-menu-item' role='presentation'>
                            <div className='sidebar-menu-title-text sidebar-menu-title'>{title}</div>
                        </li>)
                        : null }
                    {
                        map(menuItems, (item, index) => {
                            return this.renderItem(item)
                        })
                    }
                </ul>
            </div>
        )
    }

    renderItem = (menuItem, index) => {
        return (
            <li className='sidebar-menu-item' role='presentation'>
                <NavLink
                    to={menuItem.routeUrl}
                    exact={false}
                    activeClassName='active-sidebar-link'
                    key={`menuItem${index}`}>
                    <div>
                        <i className={`fa ${menuItem.faIcon}`} />
                        <div className='menu-item-text'>{menuItem.displayName}</div>
                    </div>
                </NavLink>
            </li>
        )
    }

    getSideBarClassNames = (sidebarOpen, sidebarDocked, sidebarCollapsed) => {
        return(
            `sidebar-container ${sidebarOpen && 'open'} ${sidebarDocked && 'docked'} ${sidebarCollapsed && 'collapsed'}`
        )
    }
}
