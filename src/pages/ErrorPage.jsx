import React from 'react'

const ErrorPage = (prop) => {
  return (
    <div>
        <h2>Something went wrong! please try again later!</h2>
        <p>{prop.error}</p>
    </div>
  )
}

export default ErrorPage