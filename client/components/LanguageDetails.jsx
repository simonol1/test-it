import React from 'react'

export default (props) => {
  const {language, isVisible} = props
  const hide = () => props.hideDetails()
  const classes = "language-details " + isVisble ? 'visible' : 'hidden'
  return (
    <div className={classes}>
      <h2>Tests</h2>
      <p>Language Name: {language.language_name}</p>
      <p>Tests: {language.tests}</p>
      <a href="#" onClick={hide}>Close</a>
    </div>
  )
}
