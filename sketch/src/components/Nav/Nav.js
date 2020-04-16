import React, { Component } from 'react'
import Search from './Search'
import MenuButton from './Menu'

export class Nav extends Component {
  render() {
    return (
      <div className="d-flex">
        <div className="d-flex justify-content-center" style={{width:'15%', margin:'5px'}}>
          <MenuButton />
        </div>
        <div style={{width:'85%', margin:'auto'}}>
          <Search />
        </div>
      </div>
    )
  }
}

export default Nav
