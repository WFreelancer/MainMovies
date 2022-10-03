import { forwardRef } from "react";
import styled from 'styled-components'
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";


const useStyles = makeStyles({
	root: {
		fontFamily: 'inherit',
		height: '100%',
		width: '100%',
		'& .MuiFormLabel-root': {
			color: '#fff',
		},
		'& .MuiInput-underline': {
			'&:before': {
				borderBottom: '1px solid #fff',
			},
			'&:after': {
				borderBottom: '1px solid #F73A4C',
			},
			'&:hover': {
				'&:before': {
					borderBottom: '1px solid #fff',
				},
			},
		},
		'& input': {
			 color: "white"
		},
 	 }
});

const InputWrapper = styled.div`
	position: relative;
	cursor:pointer;
	height: 40px;
	width: 100%;
	@media (min-width: 1800px){
		height: 55px;
	}
`

const InputError = styled.span`
	position: absolute;
	top: calc(100% + 12px);
	right: 0;
	color: var(--bg-pink);

	@media (min-width: 1800px){
		font-size: 1.5rem;
	};
`


const CustomInput = forwardRef(({label, error, name, type, helperText, register, ...props}, ref) => {
	const styleTextField = useStyles();

	return(
		<InputWrapper>
			<TextField
				{...register(name)}
				{...props}
				type={type}
				name={name}
				label={label}
				inputRef={ref}
				classes={styleTextField}
			>
			</TextField>
			{error && <InputError>{helperText || 'This field is required'}</InputError>}
		</InputWrapper>
	)
})

export {CustomInput};