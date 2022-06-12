import React, { Component } from 'react'
import NewItem from '../newsItem/NewItem'

export class Body extends Component {
  render() {
    return (
        <>
            <NewItem/>
            <NewItem/>
            <NewItem/>
            <NewItem/>
            <NewItem/>
            <NewItem/>
        </> 
    )
  }
}

export default Body