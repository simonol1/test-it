import React from 'react'

import * as api from '../api'
import AddLanguage from './AddLanguage'
import LanguageList from './LanguageList'
import LanguageDetails from './LanguageDetails'
import ErrorMessage from './ErrorMessage'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      error: null,
      languages: [],
      activeLanguage: null,
      detailsVisible: false,
      addLanguageVisible: false
    }
  }

  componentDidMount () {
    api.getLanguages((err, languages) => this.renderLanguages(err, languages))
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
      addLanguageVisible: false
    })
    api.getLanguages(this.renderLanguages.bind(this))
  }

  showAddLanguage () {
    this.setState({
      addLanguageVisible: true
    })
  }

  render () {
    return (
      <div>
        <ErrorMessage error={this.state.error} />
        <h1>Languages!</h1>
        <LanguageList
          showDetails={(language) => this.showDetails(language)}
          languages={this.state.languages} />
        <p><a href='#' onClick={(e) => this.showAddLanguage(e)}>Add language</a></p>
        {this.state.addLanguageVisible && <AddLanguage
          finishAdd={(err) => this.refreshList(err)} />}
        {this.state.detailsVisible && <LanguageDetails
          isVisible={this.state.detailsVisible}
          hideDetails={() => this.hideDetails()}
          language={this.state.activeLanguage} />}
      </div>
    )
  }

  showDetails (language) {
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
