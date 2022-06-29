import React from 'react'
import playBtn from '../assets/play.svg'
import pauseBtn from '../assets/pause.png'
import styled from 'styled-components'

const Wrapper = styled.div`
button{
  cursor: pointer;
  &:hover{
    opacity: .7;
  }
}
  img {
    width: 50px;
    margin: 10px 0;
  }
`
const AudioControls = ({ isPlaying, onPlayPauseClick }) => (
  <Wrapper className="audio-controls">
    {isPlaying ? (
      <button
        type="button"
        className="pause"
        onClick={() => onPlayPauseClick(false)}
        aria-label="Pause"
      >
        <img src={pauseBtn} alt="pauseBtn" />
      </button>
    ) : (
      <button
        type="button"
        className="play"
        onClick={() => onPlayPauseClick(true)}
        aria-label="Play"
      >
        <img src={playBtn} alt="playBtn" />
      </button>
    )}
  </Wrapper>
)

export default AudioControls
