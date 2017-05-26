import React from 'react'

export default (props) => {
  console.log(props);
  const {test, isVisible} = props
  const hide = () => props.hideDetails()
  const classes = "test-details " + isVisible ? 'visible' : 'hidden'
  return (
    <div className={classes}>
      <h2>Details</h2>
      <p>Name: {test.test_name}</p>
      <p>Installation: {test.installation}</p>
      <p>Description: {test.description}</p>
      <div><img src={test.img_url} /></div>
      <a href="#" onClick={hide}>Close</a>
    </div>
  )
}
