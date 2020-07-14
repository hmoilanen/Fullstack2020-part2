import React from 'react'

const Total = ({ parts }) => {
  const total = parts.reduce((a, b) => {
    const accumulator = typeof a === 'number'
      ? a
      : a.exercises
    
    return accumulator + b.exercises
  })

  console.log('total', total);

  return (
    <p>
      <strong>Number of exercises: {total}</strong>
    </p>
  )
}

export default Total