/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'

import '../index'
import AudioControls from './AudioControls'

const Wrapper = styled.div`
  left: 250px;
  text-align: center;
  position: absolute;
  z-index: 1;
  @media only screen and (max-width: 768px) {
    left: 50%;
    top: 64%;
    transform: translate(-50%, -50%);
  }
  @media only screen and (max-width: 425px) {
    width: 70%;
  }
  .upper {
    margin-bottom: 28px;
  }
  .info {
    font-family: 'tcm';
    font-size: 40px;
    line-height: 40px;
  }
  .details {
    font-family: 'tcm';
    font-size: 11px;
    line-height: 20px;
    letter-spacing: 0.27em;
  }
  .song-title {
    font-family: 'ronet';
    font-size: 90px;
    line-height: 81px;
  }
  .range {
    background: linear-gradient(to right, red 0%, red 40%, #fff 40%, #fff 100%);
    height: 2px;
    width: 100%;
    outline: none;
    transition: background 450ms ease-in;
    -webkit-appearance: none;
  }

  .range::-webkit-slider-thumb {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    border: 2px solid #fff;
    -webkit-appearance: none;
    cursor: ew-resize;
    background: #313132;
  }
`
const Player = ({ tracks }) => {
  // State
  const [trackIndex, setTrackIndex] = useState(0)
  const [trackProgress, setTrackProgress] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)

  // Destructure for conciseness
  const { title, audioSrc } = tracks[trackIndex]

  // Refs
  const audioRef = useRef(new Audio(audioSrc))
  const intervalRef = useRef()
  const isReady = useRef(false)

  // Destructure for conciseness
  const { duration } = audioRef.current

  const currentPercentage = duration ? `${(trackProgress / duration) * 100}%` : '0%'
  const trackStyling = `
    -webkit-gradient(linear, 0% 0%, 100% 0%, color-stop(${currentPercentage}, #fff), color-stop(${currentPercentage}, #777))
  `

  const startTimer = () => {
    // Clear any timers already running
    clearInterval(intervalRef.current)

    intervalRef.current = setInterval(() => {
      if (audioRef.current.ended) {
        toNextTrack()
      } else {
        setTrackProgress(audioRef.current.currentTime)
      }
    }, [1000])
  }

  const onScrub = (value) => {
    // Clear any timers already running
    clearInterval(intervalRef.current)
    audioRef.current.currentTime = value
    setTrackProgress(audioRef.current.currentTime)
  }

  const onScrubEnd = () => {
    // If not already playing, start
    if (!isPlaying) {
      setIsPlaying(true)
    }
    startTimer()
  }
  const toPrevTrack = () => {
    if (trackIndex - 1 < 0) {
      setTrackIndex(tracks.length - 1)
    } else {
      setTrackIndex(trackIndex - 1)
    }
  }

  const toNextTrack = () => {
    if (trackIndex < tracks.length - 1) {
      setTrackIndex(trackIndex + 1)
    } else {
      setTrackIndex(0)
    }
  }

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play()
      startTimer()
    } else {
      audioRef.current.pause()
    }
  }, [isPlaying])

  useEffect(() => {
    audioRef.current.pause()

    audioRef.current = new Audio(audioSrc)
    setTrackProgress(audioRef.current.currentTime)

    if (isReady.current) {
      audioRef.current.play()
      setIsPlaying(true)
      startTimer()
    } else {
      // Set the isReady ref as true for the next pass
      isReady.current = false
    }
  }, [trackIndex])

  useEffect(() => {
    // Pause and clean up on unmount
    return () => {
      audioRef.current.pause()
      clearInterval(intervalRef.current)
    }
  }, [])
  return (
    <Wrapper>
      <div className="upper">
        <p className="info">NEW SINGLE</p>
        <p className="details">OUT NOW ON ALL PLATFORMS</p>
      </div>

      <div className="song">
        <h2 className="song-title">{title}</h2>
        <AudioControls
          isPlaying={isPlaying}
          onPrevClick={toPrevTrack}
          onNextClick={toNextTrack}
          onPlayPauseClick={setIsPlaying}
        />
        <input
          type="range"
          className="range"
          value={trackProgress}
          step="1"
          min="0"
          max={duration ? duration : `${duration}`}
          onChange={(e) => onScrub(e.target.value)}
          onMouseUp={onScrubEnd}
          onKeyUp={onScrubEnd}
          style={{ background: trackStyling }}
        />
      </div>
    </Wrapper>
  )
}

export { Player }
