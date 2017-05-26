import React from 'react'

import * as api from '../api'
import AddTest from './AddTest'
import TestList from './TestList'
import TestDetails from './TestDetails'
import AddTechnology from './AddTechnology'
import TechnologyList from './TechnologyList'
import TechnologyDetails from './TechnologyDetails'
import ErrorMessage from './ErrorMessage'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      error: null,
      tests: [],
      technologies: [],
      activeTest: null,
      activeTechnology: null,
      detailsVisible: false,
      addTestVisible: false,
      addTechnologyVisible: false
    }
  }

  componentDidMount () {
    api.getTestLib((err, tests) => this.renderTests(err, tests))
    api.getTechnologies((err, technologies) => this.renderTechnologies(err, technologies))
  }

  renderTests (err, tests) {
    this.setState({
      error: err,
      tests: tests || []
    })
  }

  renderTechnologies (err, technologies) {
    this.setState({
      error: err,
      technologies: technologies || []
    })
  }

  refreshList (err) {
    this.setState({
      error: err,
      addTestVisible: false,
      addTechnologyVisible: false

    })
    api.getTestLib(this.renderTests.bind(this))
    api.getTechnologies(this.renderTechnologies.bind(this))
  }

  showAddTest () {
    this.setState({
      addTestVisible: true
    })
  }

  showAddTechnology () {
    this.setState({
      addTechnologyVisible: true
    })
  }
  showTestDetails (test) {
    this.setState({
      activeTest: test,
      detailsVisible: true
    })
  }

  showTechnologyDetails (technology) {
    this.setState({
      activeTechnology: technology,
      technologyDetailsVisible: true
    })
  }

  hideDetails () {
    this.setState({
      detailsVisible: false
    })
  }

  render () {
    return (
    <div className="app">
      <div>
        <ErrorMessage error={this.state.error} />
        <h1>Test-it</h1>
        <TestList
          showTestDetails={(test) => this.showTestDetails(test)}
          tests={this.state.tests} />
        <p><a href='#' onClick={(e) => this.showAddTest(e)}>Add test</a></p>
        {this.state.addTestVisible && <AddTest
          finishAdd={(err) => this.refreshList(err)} />}
        {this.state.detailsVisible && <TestDetails
          isVisible={this.state.detailsVisible}
          hideDetails={() => this.hideDetails()}
          test={this.state.activeTest} />}
      </div>

      <div>
        <ErrorMessage error={this.state.error} />
        <h1>Technologies!</h1>
        <TechnologyList
          showTechnologyDetails={(technology) => this.showTechnologyDetails(technology)}
          technologies={this.state.technologies} />
        <p><a href='#' onClick={(e) => this.showAddTechnology(e)}>Add technology</a></p>
        {this.state.addTechnologyVisible && <AddTechnology
          finishAdd={(err) => this.refreshList(err)} />}
        {this.state.technologyDetailsVisible && <TechnologyDetails
          isVisible={this.state.technologyDetailsVisible}
          hideDetails={() => this.hideDetails()}
          technology={this.state.activeTechnology} />}
      </div>
    </div>
    )
  }

}
