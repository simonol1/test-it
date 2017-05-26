import React from 'react'

export default ({test, showTestDetails}) => {
  return (
    <div className="test-list-item">
      {`${test.name} `}
      <a href="#" onClick={() => showTestDetails(test)}>details</a>
    </div>
  )
}
