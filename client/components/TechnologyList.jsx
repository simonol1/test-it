import React from 'react'
import TechnologyListItem from './TechnologyListItem'

export default (props) => {
  return (
    <div className="technology-list">
    <h2 className="tech-header">Technology List</h2>
    {props.technologies.map((technology) => {
      return <TechnologyListItem
        key={technology.id}
        technology={technology}
        hideDetails={props.hideDetails}
        showTechnologyDetails={props.showTechnologyDetails} />
    })}
    </div>
  )
}
