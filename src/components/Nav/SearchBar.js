import React, { Component } from 'react'

export class SearchBar extends Component {
  render() {
    return (
      <input 
      className="form-control" 
      style={{width: '100%', height: '100%'}}
      placeholder="Search"
      >
      </input>
    )
  }
}

export default SearchBar
