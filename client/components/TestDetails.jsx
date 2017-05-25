import React from 'react'

export default (props) => {
  const {test, isVisible} = props
  const hide = () => props.hideDetails()
  const classes = "test-details " + isVisble ? 'visible' : 'hidden'
  return (
    <div className={classes}>
      <h2>Details</h2>
      <p>Name: {test.name}</p>
      <p>Installation: {test.installation}</p>
      <p>Description: {test.description}</p>
      <div><p>IMG GOES HERE</p></div>
      <a href="#" onClick={hide}>Close</a>
    </div>
  )
}
