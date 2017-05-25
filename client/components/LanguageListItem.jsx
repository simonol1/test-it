import React from 'react'

export default ({language, showDetails}) => {
  return (
    <div className="language-list-item">
      {`${language.name} `}
      <a href="#" onClick={() => showDetails(language)}>details</a>
    </div>
  )
}
