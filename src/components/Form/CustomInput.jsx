import { forwardRef, useState } from "react";
import styled from 'styled-components'

const InputLabel = styled.label`
	display: flex;
	position: relative;
	cursor:pointer;
	height: 40px;
	width: 100%;
	@media (min-width: 1800px){
		height: 55px;
	}
`
const InputText = styled.span`
	cursor: text;
	position: absolute;
	top: 50%;
	left: 0;
	color: var(--white);
	transform: translateY(-50%);
	transition: all ease 0.3s;
	user-select: none;

	${({focus}) => focus.length && `
		top: -10px;
		font-size: 0.8rem;
	`};
	
	@media (min-width: 1800px){
		font-size: 1.5rem;

		${({focus}) => focus.length && `
			top: -15px;
			font-size: 1.2rem;
		`}
	};
`
const InputError = styled.span`
	position: absolute;
	top: calc(100% + 6px);
	right: 0;
	color: var(--bg-pink);

	@media (min-width: 1800px){
		font-size: 1.5rem;
	};
`
const TextArea = styled.textarea`
	font-size: 16px;
	position: absolute;
	top: 0;
	right: 0;
	width: 100%;
	height: 100%;
	background: transparent;
	color: var(--white);
	border-bottom: 1px solid #fff;
	padding-top:15px;

	:focus{
		border-color: var(--orange);
	};

	&:focus + ${InputText} {
		top: -10px;
		font-size: 0.8rem;
	};

	@media (min-width: 1800px){
		border-bottom: 2px solid #fff;
		font-size: 1.5rem;

		&:focus + ${InputText} {
			top: -15px;
			font-size: 1.2rem;
		}
	};
`
const Input = styled.input`
	font-size: 16px;
	position: absolute;
	top: 0;
	right: 0;
	width: 100%;
	height: 100%;
	background: transparent;
	color: var(--white);
	transition: all ease 0.3s;
	border-bottom: 1px solid #fff;

	:focus{
		border-color: var(--bg-pink);
	};
	
	&:focus + ${InputText} {
		top: -10px;
		font-size: 0.8rem;
	};

	@media (min-width: 1800px){
		border-bottom: 2px solid #fff;
		font-size: 1.5rem;

		&:focus + ${InputText} {
			top: -15px;
			font-size: 1.2rem;
		};
	};
`

const CustomInput = forwardRef(({children, textarea, error, type, helperText, ...props}, ref) => {
	const [value, setValue] = useState('');

	return(
		<>
			{!textarea ?
				<InputLabel>
					<Input {...props} ref={ref} onChange={(e) => setValue(e.target.value)}/>
					<InputText focus={value}>{children}</InputText>
					{error && <InputError>{helperText || 'This field is required'}</InputError>}
				</InputLabel> :
				<InputLabel>
					<TextArea {...props} ref={ref} onChange={(e) => setValue(e.target.value)}/>
					<InputText focus={value}>{children}</InputText>
					{error && <InputError>{helperText || 'This field is required'}</InputError>}
				</InputLabel>
			}
		</>

		// <InputLabel>
		// 	<Input {...props} ref={ref} {...register(name, rules)} onChange={(e) => setValue(e.target.value)}/>
		// 	<InputText value={value}>{label}</InputText>
		// 	{error && <InputError>{error?.message || 'This field is required'}</InputError>}
		// </InputLabel>
	)
})

export {CustomInput};