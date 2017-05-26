import React from 'react'

import api from '../api'

export default class AddTechnology extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      technologies_name: '',
      tests: ''
    }
  }

  fieldChanged (e) {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    })
  }

  addTechnology (e) {
    e.preventDefault()
    const technology = this.state
    api.appendTechnology(technology, this.props.finishAdd)
  }

  render () {
    return (
      <div className="add-technology">
        <form>
          <p><input placeholder="Enter technology name" name='technologies_name'
            onChange={e => this.fieldChanged(e)}
            value={this.state.technologies_name}
            /></p>
          <p><input placeholder="Enter tests" name='tests'
            onChange={e => this.fieldChanged(e)}
            value={this.state.tests}
            /></p>
          <button onClick={e => this.addTechnology(e)}>Add technology</button> {' '}
          <a href="#" onClick={this.props.finishAdd}>Cancel</a>
        </form>
      </div>
    )
  }
}
