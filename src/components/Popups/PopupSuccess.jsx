import styled from 'styled-components'
import {useData} from '../../Context'

import {MButton} from '../Button'
import { IoCloseSharp } from "react-icons/io5";
import space from '../../assets/images/space.jpg';
import human from '../../assets/images/human.png';
import planet from '../../assets/images/planet.png';


const Popup = styled.div`
	position: fixed;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	opacity: 0;
	visibility: hidden;
	overflow-y: auto;
	overflow-x: hidden;
	transition: var(--transition-md);
	pointer-events: none;
	z-index: 11;

	::-webkit-scrollbar {
		display: none;
	}
	-scrollbar {
		display: none;
	}

	${({openPopup}) => openPopup &&`
			pointer-events: all;
			opacity: 1;
			visibility: visible;
		`
	}
`

const PopupBody = styled.div`
	min-height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 30px 20px;
	transition: var(--transition-md);

	@media (max-width: 480px){
		padding: 30px 0px;
	}
`

const PopupContent = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: var(--white);
	color: var(--bg-dark);
	max-width: 500px;
	border-radius: 20px;
	width: 100%;
	padding: 5vh;
	position: relative;
	transition: var(--transition-md);
	transform: scale(0);

	@media (min-width: 1800px){
		max-width: 800px;
	}

	@media (max-width: 480px){
		border-radius: 0px;
		padding: 3vh;
	}

	${({openPopup}) => openPopup &&`
			transform: scale(1);
		`
	}
`

const PopupClose = styled.div`
	position: absolute;
	top: 10px;
	right: 10px;
	cursor: pointer;
	width: 40px;
	height: 40px;

	@media (min-width: 1800px){
		width: 60px;
		height: 60px;
	}
`
const PopupTitle = styled.h4`
	text-transform: uppercase;
	font-size: 2rem;
	margin-bottom: 10px;
	font-weight: var(--fw-bold);
	color: var(--orange);

	@media (min-width: 1800px){
		font-size: 3rem;
		margin-bottom: 20px;
	}
`

const PopupText = styled.p`
	font-size: 1.2rem;
	margin-bottom: 20px;
	color: var(--grey);
	text-align: center;
	@media (min-width: 1800px){
		font-size: 1.5rem;
		margin-bottom: 30px;
	}
`

const PopupImage = styled.div`
	width: 200px;
	height: 200px;
	border-radius: 50%;
	overflow: hidden;
	position: relative;
	margin-bottom: 20px;
	will-change: transform;

	@media (min-width: 1800px){
		width: 300px;
		height: 300px;
		margin-bottom: 30px;
	}
`
const PopupImageSpace = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;

	img{
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		object-fit: cover;
	}
`
const PopupImageHuman = styled.div`
	position: absolute;
	z-index: 1;
	width: 100px;
	top: 50%;
	left:50%;
	transform:translate(-50%, -50%);

	@media (min-width: 1800px){
		width: 150px;
	}

	img{
		width: 100%;
		top: 0px;
		animation:up-down-final  infinite ;    
		animation-direction: alternate;
		animation-duration: 1s;
	}
	@keyframes up-down-final {
		100% {transform: translateY(0px);}
		0% {transform: translateY(10px);}
	}
`

const PopupImagePlanet = styled.div`
	position: absolute;
	width: 200px;
	bottom: -20px;
	right: -50px;

	@media (min-width: 1800px){
		width: 270px;
	}

	img{
		width: 100%;
		top: 0px;
		animation:up-down-final  infinite ;    
		animation-direction: alternate;
		animation-duration: 2s;
		animation-delay: 2s;
		top: 10%;
	}
	
	@keyframes up-down-final {
		100% {transform: translateY(0px);}
		0% {transform: translateY(10px);}
	}
`

const PopupSuccess = () => {
	const {messageSuccess, setMessageSuccess} = useData();

	return (
		<Popup openPopup={messageSuccess} onClick={() => setMessageSuccess(!messageSuccess)}>
			<PopupBody>
				<PopupContent openPopup={messageSuccess} onClick={(e) => e.stopPropagation()}>
					<PopupClose onClick={() => setMessageSuccess(!messageSuccess)}>
						<IoCloseSharp size="100%"/>
					</PopupClose>
					<PopupImage>
						<PopupImageSpace>
							<img src={space} alt='space'/>
						</PopupImageSpace>
						<PopupImageHuman>
							<img src={human} alt='human'/>
						</PopupImageHuman>
						<PopupImagePlanet>
							<img src={planet} alt='planet'/>
						</PopupImagePlanet>
					</PopupImage>
					<PopupTitle>Success</PopupTitle>
					<PopupText>Your message has been sent</PopupText>
					<MButton button="true" orange="true" onClick={() => setMessageSuccess(!messageSuccess)}>
						Ok
					</MButton>
				</PopupContent>
			</PopupBody>
		</Popup>
	)
}

export {PopupSuccess};