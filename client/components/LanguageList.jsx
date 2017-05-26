import React from 'react'
import LanguageListItem from './LanguageListItem'

export default (props) => {
  return (
    <div className="language-list">
    <h2>Language List</h2>
    {props.languages.map((language) => {
      return <LanguageListItem
        key={language.id}
        language={language}
        hideDetails={props.hideDetails}
        showLanguageDetails={props.showLanguageDetails} />
    })}
    </div>
  )
}
