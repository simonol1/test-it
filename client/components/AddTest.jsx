import React from 'react'

import api from '../api'

export default class AddTest extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      installation: '',
      description: '',
      image: ''
    }
  }

  fieldChanged (e) {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    })
  }

  addTest (e) {
    e.preventDefault()
    const test = this.state
    api.appendTest(test, this.props.finishAdd)
  }

  render () {
    return (
      <div className="add-test">
        <form>
          <p><input placeholder="Name" name='name'
            onChange={e => this.fieldChanged(e)}
            value={this.state.name}
            /></p>
          <p><input placeholder="Installation" name='installation'
            onChange={e => this.fieldChanged(e)}
            value={this.state.price}
            /></p>
          <p><input placeholder="Description" name='description'
            onChange={e => this.fieldChanged(e)}
            value={this.state.mfg}
            /></p>
          <p><input placeholder="Image" name='image'
            onChange={e => this.fieldChanged(e)}
            value={this.state.inStock}
            /></p>
          <button onClick={e => this.addTest(e)}>Add test</button> {' '}
          <a href="#" onClick={this.props.finishAdd}>Cancel</a>
        </form>
      </div>
    )
  }
}
