import React, { Component } from 'react'
import AnimeMenu from '../generic/AnimeMenu'

export class MenuButton extends Component {
  render() {
    return (
      <div>
        <button className="btn py-0 px-1">
          <AnimeMenu />
        </button>
      </div>
    )
  }
}

export default MenuButton
