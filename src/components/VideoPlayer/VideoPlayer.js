import React, { Component } from 'react'

export class VideoPlayer extends Component {
  constructor(props) {
    super(props);
  }
  
  containerStyle() {
    let ratio = 9/16 || this.props.ratio;
    return {
      position: 'relative',
      overflow: 'hidden',
      width: '100%',
      paddingTop: `${ratio * 100}%`,
    }
  }

  get iframeStyle() {
    return {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      width: '100%' ,
      height: '100%' ,
      border: 0,
    }
  }

  render() {
    return (
      <div ref={this.container} style={this.containerStyle.call(this)}>
        <iframe ref={this.iframe} style={this.iframeStyle} src={this.props.video}></iframe>
      </div>
    )
  }
}

export default VideoPlayer
