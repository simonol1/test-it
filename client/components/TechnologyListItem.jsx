import React from 'react'

export default ({technology, showDetails}) => {
  return (
    <div className="technology-list-item">
      {`${technology.name} `}
      <a href="#" onClick={() => showDetails(technology)}>tests</a>
    </div>
  )
}
