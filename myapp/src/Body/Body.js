import './Body.css'
import React from 'react'
import TextForm from './../TextForm/TextForm'
import Bootstrap from 'bootstrap/dist/css/bootstrap.css'

export default function Body() {
  return (
    <>
        <div className="container">
            <TextForm heading="Enter the Text"></TextForm>
        </div>
    </>
    
  )
}
