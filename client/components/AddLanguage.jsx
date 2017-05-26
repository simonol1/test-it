import React from 'react'

import api from '../api'

export default class AddLanguage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      language_name: '',
      tests: ''
    }
  }

  fieldChanged (e) {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    })
  }

  addLanguage (e) {
    e.preventDefault()
    const language = this.state
    api.appendLanguage(language, this.props.finishAdd)
  }

  render () {
    return (
      <div className="add-language">
        <form>
          <p><input placeholder="Enter language name" name='language_name'
            onChange={e => this.fieldChanged(e)}
            value={this.state.language_name}
            /></p>
          <p><input placeholder="Enter tests" name='tests'
            onChange={e => this.fieldChanged(e)}
            value={this.state.tests}
            /></p>
          <button onClick={e => this.addLanguage(e)}>Add language</button> {' '}
          <a href="#" onClick={this.props.finishAdd}>Cancel</a>
        </form>
      </div>
    )
  }
}
