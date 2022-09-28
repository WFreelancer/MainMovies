import styled from 'styled-components'
import { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {motion} from 'framer-motion'
import {useData} from '../../Context'

import {MContainer} from '../Container'
import {MTitle} from '../Title'
import {MCardSm} from '../Card'

const animationSlide = {
	hidden: {
		opacity: 0,
		x: 150
	},
	visible: custom => ({
		opacity: 1,
		x: 0,
		transition: {
			delay: custom * 0.2,
			duration: 0.5,
		}
	})
}

const SliderWrapper = styled(motion.section)`
	overflow: hidden;
	position:relative;
	padding: 10vh 0;

	@media (max-width: 1024px){
		padding: 6vh 0;
	}
`

const SliderInit = styled(Swiper)`
	width: calc(100% + (100vw - 1240px)/2);
	display: flex;

	@media (max-width: 1280px){
		width: calc(100% - 20px);
	}

	.swiper-wrapper{
		display: flex;
	}
`

const SliderItem = styled(SwiperSlide)`
	text-align:center;
`

const Slider = ({title, request}) => {
	const {moviesSlider = [], sliderLoadMovies, animationContent} = useData();


	useEffect(() => {
		sliderLoadMovies(request);
		// eslint-disable-next-line
	}, [])


	return(
		<SliderWrapper>
			<MContainer initial="hidden" whileInView="visible" viewport={{once: true, amount: 0.5}}>
				<MTitle marginBottom="7vh" variants={animationContent} custom={1}>{title}</MTitle>
				<SliderInit
					spaceBetween={30}
					scrollbar={{ draggable: true }}
					breakpoints={{
						320: {
						slidesPerView: 1,
						},
						480: {
						slidesPerView: 2,
						},
						768: {
						slidesPerView: 3,
						},
						1024: {
						slidesPerView: 4,
						},
						1220: {
						slidesPerView: 5,
						},
					}}
				>
					{
						moviesSlider.map((slide, index) => {
							return (
								<SliderItem key={index}>
									<MCardSm
										{...slide}
										variants={animationSlide}
										custom={index + 1}
									/>
								</SliderItem>
							)
						})
					}
				</SliderInit>
			</MContainer>
		</SliderWrapper>
	)
}

export {Slider};