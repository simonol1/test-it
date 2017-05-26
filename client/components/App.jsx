import React from 'react'

import * as api from '../api'
import AddTest from './AddTest'
import TestList from './TestList'
import TestDetails from './TestDetails'
import AddLanguage from './AddLanguage'
import LanguageList from './LanguageList'
import LanguageDetails from './LanguageDetails'
import ErrorMessage from './ErrorMessage'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      error: null,
      tests: [],
      languages: [],
      activeTest: null,
      activeLanguage: null,
      detailsVisible: false,
      addTestVisible: false,
      addLanguageVisible: false
    }
  }

  componentDidMount () {
    api.getTestLib((err, tests) => this.renderTests(err, tests))
    api.getLanguages((err, languages) => this.renderLanguages(err, languages))
  }

  renderTests (err, tests) {
    this.setState({
      error: err,
      tests: tests || []
    })
  }

  renderLanguages (err, languages) {
    this.setState({
      error: err,
      languages: languages || []
    })
  }

  refreshList (err) {
    this.setState({
      error: err,
      addTestVisible: false,
      addLanguageVisible: false

    })
    api.getTests(this.renderTests.bind(this))
    api.getLanguages(this.renderLanguages.bind(this))
  }

  showAddTest () {
    this.setState({
      addTestVisible: true
    })
  }

  showAddLanguage () {
    this.setState({
      addLanguageVisible: true
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
        <h1>Languages!</h1>
        <LanguageList
          showLanguageDetails={(language) => this.showLanguageDetails(language)}
          languages={this.state.languages} />
        <p><a href='#' onClick={(e) => this.showAddLanguage(e)}>Add language</a></p>
        {this.state.addLanguageVisible && <AddLanguage
          finishAdd={(err) => this.refreshList(err)} />}
        {this.state.detailsVisible && <LanguageDetails
          isVisible={this.state.detailsVisible}
          hideDetails={() => this.hideDetails()}
          language={this.state.activeLanguage} />}
      </div>
    </div>
    )
  }

  showTestDetails (test) {
    this.setState({
      activeTest: test,
      detailsVisible: true
    })
  }

  showLanguageDetails (language) {
    this.setState({
      activeLanguage: language,
      detailsVisible: true
    })
  }

  hideDetails () {
    this.setState({
      detailsVisible: false
    })
  }
}
