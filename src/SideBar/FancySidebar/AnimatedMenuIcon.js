import React from 'react'

export default ({faIcon, barColor}) => {
  return (
      <div style={{display: 'inline-block'}}>
          <div className='menu-icon-bar' style={{backgroundColor: barColor}} />
          <i className={`menu-icon fa ${faIcon}`} />
      </div>
  )
}
