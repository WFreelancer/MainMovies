import { NavLink } from 'react-router-dom';
import styled from 'styled-components';


const FixedNav = styled.nav`
	position: fixed;
	right: 0;
	top: 0;
	height: 100%;
	background: var(--bg-dark);
	z-index: 11;
	transform: translate(calc(100% + 6vw),0) rotate(0.001deg);
	transition: var(--animation-menu-wrap);
	will-change: transform;

	${({menuOpen}) => menuOpen &&`
			transform: translate(0,0) rotate(0.001deg);
		`
	}

	@media (max-width: 550px){
		width: 100%;
	}

	::-webkit-scrollbar {
		display: none;
	}

	-scrollbar {
		display: none;
	}
`

const FixedNavContent = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;
	padding: 15vh 7.5vw 10vh 7.5vw;
	position: relative;
	transition: var(--animation-menu-content);
	will-change: transform;
	overflow-y: auto;
	z-index: 2;

	@media (min-width: 1800px){
		padding: 20vh 10.5vw 13vh 10.5vw;
	}

	@media (max-width: 1024px){
		padding: 15vh 9.5vw 10vh 9.5vw;
	}

	${({menuOpen}) => menuOpen &&`
			transform: translate(0,0) rotate(0.001deg);
		`
	}
`

const FixedNavHeader = styled.div`
	padding-bottom: 1em;
	border-bottom: 1px solid var(--color-border-light);
	h5{
		text-transform: uppercase;
		color: var(--white);
	}
`

const FixedList = styled.ul`
	padding-top: 5vh;

	li{
		max-width: 100%;
		margin-bottom: 10px;
		:last-child{
			margin-bottom: 0px;
		}
	}
`

const FixedLink = styled(NavLink)`
    position: relative;
	cursor: pointer;
	font-size: 3em;
	line-height: 1.25;
	color: transparent;

	@media (min-width: 1800px){
		font-size: 4.5em;
	}

	span{
		position: absolute;
		left: 0;
		height: 100%;
		transition: var(--transition-sm);
		color: var(--white);
	}

	span:nth-child(1){
		top: 0.5px;
		clip-path: polygon(0 65%, 100% 55%, 100% 0, 0 0);
	}

	span:nth-child(2){
		bottom: 0;
		clip-path: polygon(0 65%, 100% 55%, 100% 100%, 0 100%);
	}

	:after{
		content: "";
		position: absolute;
		top: 50%;
		left: -25px;
		width: calc(clamp(16px, 1.2vw, 19px) / 1.65);
		height: calc(clamp(16px, 1.2vw, 19px) / 1.65);
		border-radius: 50%;
		background: var(--white);
		transform: translate(-50%, -50%) scale(0);
		will-change: transform;
		transition: var(--transition-sm);
	}
	@media (any-hover: hover){
		:hover{
			span:nth-child(1){
				transform: translate(-7px, -3px);
			}
		}
	}
	

	&.active{
		span:nth-child(1){
			transform: none;
		}
		:after{
			transform: translate(-50%, -50%) scale(1);
		}
	}

	@media (max-width: 767px){
		font-size: 2.5em;
		:after{
			left: -15px;
		}
	}
	@media (max-width: 550px){
		display: block;
		:after{
			left: unset;
			right: 0;
		}
	}
`

const FixedRoundedWrapper = styled.div`
	position: absolute;
    left: 1px;
    transform: translateX(-100%);
    height: 100%;
    top: 0;
`

const FixedRoundedBody = styled.div`
	width: 6vw;
	height: 100%;
	transition: var(--animation-menu-slow);
	will-change: width;

	${({menuOpen}) => menuOpen &&`
			width: 0vw;
		`
	}
`

const RoundedDiv = styled.div`
	background: var(--bg-dark);
    height: 150%;
    content: "";
    display: block;
    position: absolute;
    width: 775%;
    top: 50%;
    border-radius: 50%;
    transform: translate(-6.5%, -50%);
	z-index: 1;
	left: 50%;
`


const FixedMenu = ({menuOpen, setMenuOpen, links}) => {
	return(
		<FixedNav menuOpen={menuOpen} onClick={(e) => e.stopPropagation()}>
			<FixedNavContent>
				<FixedNavHeader>
					<h5>Navigation</h5>
				</FixedNavHeader>
				<FixedList>
					{links.map((link, index) => (
							<li key={index} onClick={() => setMenuOpen(!menuOpen)}>
								<FixedLink to={link.to}>
									{link.text}
									<span>{link.text}</span>
									<span>{link.text}</span>
								</FixedLink>
							</li>
						)
					)}
				</FixedList>
			</FixedNavContent>
			<FixedRoundedWrapper>
				<FixedRoundedBody menuOpen={menuOpen}>
					<RoundedDiv></RoundedDiv>
				</FixedRoundedBody>
			</FixedRoundedWrapper>
		</FixedNav>
	)
}

export {FixedMenu}