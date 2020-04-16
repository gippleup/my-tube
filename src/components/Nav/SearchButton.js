import React, { Component } from 'react'
import AnimeSearch from '../generic/AnimeSearch'

export class SearchButton extends Component {
  constructor(props) {
    super(props);
    this.button = React.createRef();
  }

  setButtonWidth() {
    let button = this.button.current;
    let height = button.offsetHeight;
    button.style.width = height + 'px';
  }

  componentDidMount() {
    this.setButtonWidth();
  }

  render() {
    return (
      <button 
      ref={this.button} 
      style={{height: '100%'}}
      className="btn btn-primary"
      >
        <AnimeSearch />
      </button>
    )
  }
}

export default SearchButton
