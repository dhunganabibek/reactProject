import './Footer.css'
import React from 'react'

export default function Footer() {
  return (
    <>
        <footer className="bg-dark text-center text-lg-start text-white"> 
            <h1 className="text-center"> Thank you so much for using my application</h1>
            <h2 className="text-center"> Lubbock, Texas</h2>
            <div className="text-center p-3">
                © 2020 Copyright:
                <a className="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
            </div>
            
        </footer>
    </>
  )
}
