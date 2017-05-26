import React from 'react'

export default ({test, showTestDetails}) => {
  return (
    <div className="test-list-item">
      {`${test.test_name} `}
      <a href="#" onClick={() => showTestDetails(test)}>Technologies</a>
    </div>
  )
}
