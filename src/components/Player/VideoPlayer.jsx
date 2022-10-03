import styled from 'styled-components'
import React, { useEffect, useState, useRef } from 'react'
import ReactPlayer from 'react-player'
import {useData} from '../../Context'

import screenful from "screenfull";
import {Controls} from './Controls'

const VideoWrapper = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;

`
const Overlay = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
	z-index: 2;
`

const VideoInit = styled(ReactPlayer)`
	position: absolute;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
`

const format = (seconds) => {
  if (isNaN(seconds)) {
    return `00:00`;
  }
  const date = new Date(seconds * 1000);
  const hh = date.getUTCHours();
  const mm = date.getUTCMinutes();
  const ss = date.getUTCSeconds().toString().padStart(2, "0");
  if (hh) {
    return `${hh}:${mm.toString().padStart(2, "0")}:${ss}`;
  }
  return `${mm}:${ss}`;
};

let count = 0;

const VideoPlayer = ({url}) => {
	const {trailerPopup} = useData();
	const [state, setState] = useState({
		isPlay: false,
		controls: false,
		played: 0,
		playbackRate: 1.0,
		volume: 0.1,
		seeking: false,
		isFullscreen: false
	});
	const {isPlay, playbackRate, played, controls, volume} = state;
	const playerRef = useRef(null);
	const controlsRef = useRef(null);
	const playerContainerRef = useRef(null);
	const ios = !window.MSStream && /iPad|iPhone|iPod/.test(navigator.userAgent);

	useEffect(() => {
			if(trailerPopup && !ios){
				setTimeout(() => {
					setState({ ...state, isPlay: true });
				}, 800);
			}else{
				setState({ ...state, isPlay: false });
			};
		// eslint-disable-next-line
	}, [trailerPopup]);

	const handlePlay = () => setState({ ...state, isPlay: !isPlay});

	const handleSeekChange = (e, newValue) => setState({ ...state, played: parseFloat(newValue / 100) });

	const handleSeekMouseDown = (e) => setState({ ...state, seeking: true });

	const handleSeekMouseUp = (e, newValue) => {
		setState({ ...state, seeking: false });
		playerRef.current.seekTo(newValue / 100, "fraction");
	};

	const handleProgress = (changeState) => {
		if (count > 3) {
			controlsRef.current.style.visibility = "hidden";
			count = 0;
		}
		if (controlsRef.current.style.visibility === "visible") {
			count += 1;
		}
		if (!state.seeking) {
			setState({ ...state, ...changeState });
		}
	};


	const toggleFullScreen = () => {
		setState({ ...state, isFullscreen: !state.isFullscreen});

		if(!ios){
			screenful.toggle(playerContainerRef.current);
		}else{
			if (!state.isFullscreen) {
				playerContainerRef.current.webkitEnterFullscreen();
			} else {
				playerContainerRef.current.webkitRequestFullscreen();
			}
		}
	};

	const currentTime = playerRef && playerRef.current ? playerRef.current.getCurrentTime() : "00:00";

	const duration = playerRef && playerRef.current ? playerRef.current.getDuration() : "00:00";

	const elapsedTime = format(currentTime);

	const totalDuration = format(duration);

	return (
		<VideoWrapper ref={playerContainerRef}>
			<Overlay onClick={handlePlay}/>
			<VideoInit
				url={url}
				playing={isPlay}
				volume={volume}
				loop={true}
				ref={playerRef}
				controls={controls}
				playbackRate={playbackRate}
				onProgress={handleProgress}
				onClick={handlePlay}
				height="100%"
				width="100%"
			/>
			<Controls
				ref={controlsRef}
				isPlay={isPlay}
				totalDuration={totalDuration}
				elapsedTime={elapsedTime}
				handlePlay={handlePlay}
				onSeek={handleSeekChange}
				onSeekMouseDown={handleSeekMouseDown}
				onSeekMouseUp={handleSeekMouseUp}
				played={played}
				onToggleFullScreen={toggleFullScreen}
			/>
		</VideoWrapper>
	)
}



export {VideoPlayer};