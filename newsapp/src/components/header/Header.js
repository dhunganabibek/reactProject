import React, { Component } from 'react'

export class Header extends Component {
  render() {
    return (
      <>
        <nav className='navbar navbar-expand-lg bg-dark'>
          <div className='container-fluid  '>
            <a className="navbar-brand text-white" href="/">NewsApplication</a>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active text-white" aria-current="page " href="/">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="/">About</a>
                </li>

                <li className="nav-item">
                  <a className="nav-link text-white" href="/">Status</a>
                </li>

                <li className="nav-item">
                  <a className="nav-link text-white" href="/">Contacts</a>
                </li>
                
                
              </ul>
             
            </div>
          </div>
        </nav>
      </>
    )
  }
}

export default Header