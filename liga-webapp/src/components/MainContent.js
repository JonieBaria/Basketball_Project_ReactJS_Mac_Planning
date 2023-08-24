import React from 'react'
import LeftMainContent from './LeftMainContent'
import RightBar from './RightBar'

function MainContent() {
  return (
    <div className='content-wrapper'>
      <LeftMainContent />
      <RightBar/>
    </div>
  )
}

export default MainContent