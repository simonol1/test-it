import React from 'react'

export default ({technology, showTechnologyDetails}) => {
  return (
    <div className="technology-list-item">
      {`${technology.technologies_name} `}
      <a href="#" onClick={() => showTechnologyDetails(technology)}>Tests</a>
    </div>
  )
}
