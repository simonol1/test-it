import React from 'react'

export default (props) => {
  const {language, isVisible} = props
  const hide = () => props.hideDetails()
  const classes = "language-details " + isVisble ? 'visible' : 'hidden'
  return (
    <div className={classes}>
      <h2>Details</h2>
      <p>Name: {language.name}</p>
      <p>Price: {language.price}</p>
      <p>Mfg: {language.mfg}</p>
      <p>In stock: {language.inStock}</p>
      <a href="#" onClick={hide}>Close</a>
    </div>
  )
}
