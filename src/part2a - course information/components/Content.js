import React from 'react'
import Part from './Part'
import Total from './Total'

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map((part, index) => 
        <Part part={part} key={index} />  
      )}
      <Total parts={parts} />
    </div>
  )
}

export default Content