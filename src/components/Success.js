import React from 'react'

const Success = ({ newMessage }) => {
  const inlineStyles = {
    display: 'inline-block',
    padding: '1rem',
    border: '1px solid green',
    backgroundColor: 'lightgreen',
    fontWeight: 700
  }

  if (newMessage) {
    return (
      <div className='success' style={inlineStyles}>
        {newMessage}
      </div>
    )
  } else return null
}

export default Success