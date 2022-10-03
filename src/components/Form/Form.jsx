import styled from 'styled-components'
import {motion} from 'framer-motion'
import { useForm } from "react-hook-form";
import {useData} from '../../Context'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import poster from '../../assets/images/form-bg.jpg';
// import poster from '../../assets/images/form-bg2.jpg';
import {Container} from '../Container'
import {MTitle} from '../Title'
import {MButton} from '../Button'
import {CustomInput} from './CustomInput'
import {Overlay} from '../Overlay'
import {PopupSuccess} from '../Popups'

const FormWrapper = styled(motion.section)`
	position: relative;
	padding: 13vh 0;
	overflow: hidden;
`
const FormBg = styled(motion.div)`
	position: absolute;
	top:0;
	right: 0;
	width: 100%;
	height: 100%;
	user-select: none;
	img{
		position: absolute;
		top:0;
		right: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	:before{
		content: "";
		background-color: rgba(0, 0, 0, 0.3);
		position: absolute;
		top:0;
		right: 0;
		width: 100%;
		height: 100%;
		z-index: 2;
	}
`
const FormInit = styled.form``

const FormList = styled.ul`
	margin-bottom: 50px;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-column-gap: 60px;
	grid-row-gap: 80px;

	li:last-child{
		grid-column: span 2;
	};

	@media (min-width: 1800px){
		margin-bottom: 80px;
		grid-column-gap: 80px;
		grid-row-gap: 120px;
	};

	@media (max-width: 550px){
		display: block;
		li{
			margin-bottom: 60px;
		}
	}
`
const schema = yup.object().shape({
	firstName: yup.string().matches(/^([^0-9]*)$/, "First name should not contain numbers").required('Please enter your firstName.'),
	email: yup.string().email("email should have correct format").required('Please enter your email.'),
	message: yup.string().matches(/^([^0-9]*)$/, "Message should not contain numbers").required('Please enter your message.'),
})

const Form = () => {
	const {messageSuccess, setMessageSuccess, animationContent, animationImage} = useData();
	const { register, handleSubmit, formState: { errors }, reset } = useForm({
		mode: 'onBlur',
		resolver: yupResolver(schema),
	});

	const onSubmit = data => {
		setMessageSuccess(!messageSuccess);
		console.log(data);
		reset();
	};

	return(
		<FormWrapper initial="hidden" whileInView="visible" viewport={{once: true, amount: 0.2}}>
			<FormBg variants={animationImage}><motion.img src={poster} alt='form-bg'/></FormBg>
			<Container>
				<MTitle marginBottom="9vh" light="true" variants={animationContent} custom={2}>Mail Us</MTitle>
				<FormInit noValidate autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
					<FormList>
						<motion.li variants={animationContent} custom={3}>
							<CustomInput
								label="FirstName"
								name="firstName"
								type="text"
								register={register}
								error={!!errors?.firstName}
								helperText={errors?.firstName?.message}
							/>
						</motion.li>
						<motion.li variants={animationContent} custom={4}>
							<CustomInput
								label="Email"
								name="email"
								type="text"
								register={register}
								error={!!errors?.email}
								helperText={errors?.email?.message}
							/>
						</motion.li>
						<motion.li variants={animationContent} custom={5}>
							<CustomInput
								label="Your Message"
								name="message"
								type="textarea"
								register={register}
								error={!!errors?.message}
								helperText={errors?.message?.message}
							/>
						</motion.li>
					</FormList>
					<MButton button="true" type="submit" light="true" variants={animationContent} custom={4}>
						Send
					</MButton>
				</FormInit>
			</Container>
			<PopupSuccess/>
			<Overlay active={messageSuccess}/>
		</FormWrapper>
	)
}

export {Form};