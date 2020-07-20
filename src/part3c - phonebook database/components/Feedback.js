import React from 'react'

const Feedback = ({ newFeedback }) => {
  const inlineStyles = {
    display: 'inline-block',
    padding: '1rem',
    fontWeight: 700,
    border: '1px solid',
    borderColor: newFeedback.success ? 'green' : 'red',
    backgroundColor: newFeedback.success ? 'lightgreen' : 'orange',
  }

  if (newFeedback) {
    return (
      <div style={inlineStyles}>
        {newFeedback.message}
      </div>
    )
  } else return null
}

export default Feedback