import React, { Component } from 'react'
import SearchBar from './SearchBar'
import SearchButton from './SearchButton'

export class Search extends Component {
  render() {
    return (
      <div className="d-flex">
        <span style={{height:'60px', width:'75%'}}>
          <SearchBar />
        </span>
        <span>
          <SearchButton />
        </span>
      </div>
    )
  }
}

export default Search
