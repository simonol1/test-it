import React from 'react'

export default (props) => {
  const {technology, isVisible} = props
  const hide = () => props.hideDetails()
  const classes = "technology-details " + isVisble ? 'visible' : 'hidden'
  return (
    <div className={classes}>
      <h2>Tests</h2>
      <p>Technology Name: {technologies.technologies_name}</p>
      <p>Tests: {technologies.tests}</p>
      <a href="#" onClick={hide}>Close</a>
    </div>
  )
}
