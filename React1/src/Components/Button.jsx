import React from 'react'

function Button({text,onClick}) {
  return (
    <div className="task2">
        <button onClick={onClick}>
      {text}
    </button>

    </div>
  )
}

export default Button