import React from 'react'
import TestListItem from './TestListItem'

export default (props) => {
  return (
    <div className="test-list">
    <h2 className = "library-header">Testing Libraries</h2>
    <div className="libraryList">
      {props.tests.map((test) => {
        return <TestListItem
          key={test.id}
          test={test}
          hideDetails={props.hideDetails}
          showTestDetails={props.showTestDetails} />
      })}
      </div>
    </div>
  )
}
