import React from 'react'

export default (props) => {
  const {technology, isVisible} = props
  const hide = () => props.hideDetails()
  const classes = "technology-details " + isVisible ? 'visible' : 'hidden'
  return (
    <div className={classes}>
      <h2>Tests</h2>
      <p>Technology Name: {technology.technologies_name}</p>
      <p>Tests: {technology.tests}</p>
      <a href="#" onClick={hide}>Close</a>
    </div>
  )
}
