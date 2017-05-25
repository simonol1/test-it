import React from 'react'
import TestListItem from './TestListItem'

export default (props) => {
  return (
    <div className="test-list">
    <h2>TESTING LIBRARIES</h2>
    {props.tests.map((test) => {
      return <TestListItem
        key={test.id}
        test={test}
        hideDetails={props.hideDetails}
        showDetails={props.showDetails} />
    })}
    </div>
  )
}
