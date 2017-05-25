import React from 'react'

import * as api from '../api'
import AddTest from './AddTest'
import TestList from './TestList'
import TestDetails from './TestDetails'
import ErrorMessage from './ErrorMessage'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      error: null,
      tests: [],
      activeTest: null,
      detailsVisible: false,
      addTestVisible: false
    }
  }

  componentDidMount () {
    api.getTestLib((err, tests) => this.renderTests(err, tests))
  }

  renderTests (err, tests) {
    this.setState({
      error: err,
      tests: tests || []
    })
  }

  refreshList (err) {
    this.setState({
      error: err,
      addTestVisible: false
    })
    api.getTests(this.renderTests.bind(this))
  }

  showAddTest () {
    this.setState({
      addTestVisible: true
    })
  }

  render () {
    return (
      <div>
        <ErrorMessage error={this.state.error} />
        <h1>Test-it</h1>
        <TestList
          showDetails={(test) => this.showDetails(test)}
          tests={this.state.tests} />
        <p><a href='#' onClick={(e) => this.showAddTest(e)}>Add test</a></p>
        {this.state.addTestVisible && <AddTest
          finishAdd={(err) => this.refreshList(err)} />}
        {this.state.detailsVisible && <TestDetails
          isVisible={this.state.detailsVisible}
          hideDetails={() => this.hideDetails()}
          test={this.state.activeTest} />}
      </div>
    )
  }

  showDetails (test) {
    this.setState({
      activeTest: test,
      detailsVisible: true
    })
  }

  hideDetails () {
    this.setState({
      detailsVisible: false
    })
  }
}
