import {forwardRef} from 'react';
import styled from 'styled-components'

import { IoLogoGooglePlaystore, IoPauseOutline} from "react-icons/io5";
import { FaCompress } from "react-icons/fa";
import Slider from '@mui/material/Slider';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const theme = createTheme({
  palette: {
    primary: {
      main: 'var(--bg-pink)',
    },
  },
});

const ControlsWrapper = styled.div`
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;
	z-index: 3;
	padding 13px 20px;
	transition: var(--transition-md);
	background-color: var(--bg-dark);
	display: flex;
	align-items: center;

	svg{
		transition: var(--transition-sm);

		@media (any-hover: hover){
			:hover{
				color: var(--bg-pink);
			}
		}
	}
`
const ButtonAction = styled.button`
	background: unset;
	margin-right: 15px;
`

const ButtonCompress = styled.button`
	background: unset;
	margin-left: 15px;
`

const PlayIcon = styled(IoLogoGooglePlaystore)`
	color: var(--white);
	font-size: 30px;
`
const PauseIcon = styled(IoPauseOutline)`
	color: var(--white);
	font-size: 30px;
`
const CompressIcon = styled(FaCompress)`
	color: var(--white);
	font-size: 20px;
`

const Info = styled.div`
	display: flex;
	margin-right: 15px;
	opacity: 0.9;
`
const CurrentTime = styled.span`
	display: inline-flex;
	position: relative;
	min-width: 42px;
	color: var(--white);
	font-size: 0.9rem;

	:after{
		content: '/';
		color: var(--white);
		position: absolute;
		right: 0;
	}

`
const Time = styled.span`
	font-size: 0.9rem;
	padding-left: 5px;
	color: var(--white);
`

const Controls = forwardRef((props, ref) => {
	const {isPlay, handlePlay, played, totalDuration,  elapsedTime, onSeek, onSeekMouseDown, onSeekMouseUp, onToggleFullScreen} = props;

	return (
		<ControlsWrapper ref={ref}>
			<ButtonAction type='button' onClick={handlePlay}>
				{isPlay ?
					<PauseIcon/>
					:
					<PlayIcon/>
				}
			</ButtonAction>
			<Info>
				<CurrentTime>{elapsedTime}</CurrentTime>
				<Time>{totalDuration}</Time>
			</Info>
			<ThemeProvider theme={theme}>
				<Slider
					min={0}
					max={100}
					sx={{
						color: 'primary.main',
						'& .MuiSlider-thumb': {
							width: '13px',
							height: '13px',
						},
					}}
					value={played * 100}
					onChange={onSeek}
					onMouseDown={onSeekMouseDown}
					onChangeCommitted={onSeekMouseUp}
				/>
			</ThemeProvider>
			<ButtonCompress type='button' onClick={onToggleFullScreen}>
				<CompressIcon/>
			</ButtonCompress>
		</ControlsWrapper>
	)
})



export {Controls};