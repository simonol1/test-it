import React from 'react'

export default ({test, showDetails}) => {
  return (
    <div className="test-list-item">
      {`${test.name} `}
      <a href="#" onClick={() => showDetails(test)}>details</a>
    </div>
  )
}
