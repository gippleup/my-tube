import React from 'react';
import Nav from './components/Nav/Nav'
import VideoPlayer from './components/VideoPlayer/VideoPlayer';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <div className="dummytron">
        <Nav />
      </div>
      <div className="dummytron px-5">
        <VideoPlayer video={"https://www.youtube.com/embed/tgbNymZ7vqY"}/>
      </div>
      <div className="dummytron">
        VideoLsit
      </div>
    </div>
  );
}

export default App;
