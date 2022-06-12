import './Header.css'
import 'bootstrap/dist/css/bootstrap.css'
import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Header(props) {
    return ( <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="#"><h4>{props.title}</h4></a>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <Link className="nav-link" to="/"><h4>Home</h4> <span className="sr-only"></span></Link>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#"><h4>Link</h4></a>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/about"><h4>About</h4></Link>
                </li>
                </ul>
            </div>
        </nav> 
        </>
    )
}

Header.propTypes = {
    title: PropTypes.string
}

Header.defaultProps = {
    title:'My Application'
}
