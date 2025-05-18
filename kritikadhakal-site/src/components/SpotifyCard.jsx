import React, { useRef, useState } from 'react';
import styled from 'styled-components';

const SpotifyCard = () => {
  const [playingIndex, setPlayingIndex] = useState(null);

  const savingUpRef = useRef(null);
  const bloodOnLeavesRef = useRef(null);
  const fashionKillaRef = useRef(null);

  const audioRefs = [savingUpRef, bloodOnLeavesRef, fashionKillaRef];

  const playAudio = (index) => {
    audioRefs.forEach((ref, i) => {
      if (ref.current) {
        if (i === index) {
          ref.current.currentTime = 0;
          ref.current.play();
          setPlayingIndex(index);
        } else {
          ref.current.pause();
          ref.current.currentTime = 0;
        }
      }
    });
  };

  const pauseAudio = (index) => {
    if (audioRefs[index].current) {
      audioRefs[index].current.pause();
      audioRefs[index].current.currentTime = 0;
    }
    setPlayingIndex(null);
  };

  return (
    <StyledWrapper>
      <div className="main">
        <div className="currentplaying">
          <img
            src="/spotify.png"
            alt="Spotify Logo"
            className="spotify"
            width={50}
            height={50}
          />
          <p className="heading">Current Favorites</p>
        </div>

        {/* Song 1 */}
        <div
          className="loader"
          onMouseEnter={() => playAudio(0)}
          onMouseLeave={() => pauseAudio(0)}
        >
          <div className="song">
            <p className="name">Saving up</p>
            <p className="artist">Dom Dolla</p>
          </div>
          <img className="albumcover" src="/album1.png" alt="Album Cover1" />
          {playingIndex === 0 ? (
            <div className="loading">
              <div className="load" />
              <div className="load" />
              <div className="load" />
              <div className="load" />
            </div>
          ) : (
            <div className="play" />
          )}
          <audio ref={savingUpRef} src="/album1.mp3" preload="auto" />
        </div>

        {/* Song 2 */}
        <div
          className="loader"
          onMouseEnter={() => playAudio(1)}
          onMouseLeave={() => pauseAudio(1)}
        >
          <div className="song">
            <p className="name">Blood on the Leaves</p>
            <p className="artist">Kanye West</p>
          </div>
          <img className="albumcover" src="/album2.png" alt="Album Cover2" />
          {playingIndex === 1 ? (
            <div className="loading">
              <div className="load" />
              <div className="load" />
              <div className="load" />
              <div className="load" />
            </div>
          ) : (
            <div className="play" />
          )}
          <audio ref={bloodOnLeavesRef} src="/album2.mp3" preload="auto" />
        </div>

        {/* Song 3 */}
        <div
          className="loader"
          onMouseEnter={() => playAudio(2)}
          onMouseLeave={() => pauseAudio(2)}
        >
          <div className="song">
            <p className="name">Fashion Killa</p>
            <p className="artist">A$ap Rocky</p>
          </div>
          <img className="albumcover" src="/album3.png" alt="Album Cover3" />
          {playingIndex === 2 ? (
            <div className="loading">
              <div className="load" />
              <div className="load" />
              <div className="load" />
              <div className="load" />
            </div>
          ) : (
            <div className="play" />
          )}
          <audio ref={fashionKillaRef} src="/album3.mp3" preload="auto" />
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  /* Your CSS here (same as before) */
  font-family: 'Inter', sans-serif;

  .main {
    background: linear-gradient(135deg, #d3d3d3, #696969);
  }
  .loader {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 75px;
    transform: rotate(180deg);
    justify-content: right;
    transition: 0.3s ease-in-out;
  }
  .song {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    transform: rotate(180deg);
    color: black;
    margin-right: 1em;
    gap: 0.2em;
  }
  .loader:hover {
    cursor: pointer;
    background-color: lightgray;
  }
  .currentplaying {
    display: flex;
  }
  .spotify {
    width: 50px;
    height: 50px;
    margin-right: 10px;
  }
  .heading {
    color: black;
    font-size: 1.1em;
    font-weight: bold;
    align-self: center;
  }
  .loading {
    display: flex;
    margin-top: 1em;
    margin-left: 0.3em;
  }
  .load {
    width: 2px;
    height: 33px;
    background-color: limegreen;
    animation: 1s move6 infinite;
    border-radius: 5px;
    margin: 0.1em;
  }
  .load:nth-child(1) {
    animation-delay: 0.2s;
  }
  .load:nth-child(2) {
    animation-delay: 0.4s;
  }
  .load:nth-child(3) {
    animation-delay: 0.6s;
  }
  .play {
    position: relative;
    left: 0.35em;
    height: 1.6em;
    width: 1.6em;
    clip-path: polygon(50% 50%, 100% 50%, 75% 6.6%);
    background-color: black;
    transform: rotate(-90deg);
    align-self: center;
    justify-self: center;
  }
  .albumcover {
    position: relative;
    margin-right: 0.5em;
    height: 40px;
    width: 40px;
    background-color: rgb(233, 232, 232);
    align-self: center;
    border-radius: 5px;
  }
  .artist {
    font-size: 0.6em;
  }
  .name,
  .artist {
    margin: 0;
    line-height: 1.2;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  @keyframes move6 {
    0% {
      height: 0.2em;
    }
    25% {
      height: 0.7em;
    }
    50% {
      height: 1.5em;
    }
    100% {
      height: 0.2em;
    }
  }
`;

export default SpotifyCard;
