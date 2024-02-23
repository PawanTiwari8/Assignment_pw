import React from 'react'

function Person({name,age}) {
  return (
    <div className="container">
        <p>Person name is: {name} and person age is : {age}</p>
    </div>
  )
}

export default Person