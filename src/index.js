import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {DataProvider} from './Context';
import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`

	* {
		padding: 0px;
		margin: 0px;
		border: 0px;
		-webkit-tap-highlight-color: transparent;
        -webkit-focus-ring-color: transparent;
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
	}


	*,
	*:before,
	*:after {
		-moz-box-sizing: border-box;
		-webkit-box-sizing: border-box;
		box-sizing: border-box;
	}

	:focus,
	:active {
		outline: none;
	}

	a:focus,
	a:active {
		outline: none;
	}

	aside,
	nav,
	footer,
	header,
	section {
		display: block;
	}

	body {
		-webkit-font-smoothing: antialiased;
		line-height: 1;
		-ms-text-size-adjust: 100%;
		-moz-text-size-adjust: 100%;
		-webkit-text-size-adjust: 100%;
		font-family: 'Lexend Deca', sans-serif;
		color: var(--bg-dark);
		
		::-webkit-scrollbar {
			display: none;
		}
		-scrollbar {
			display: none;
		}
	}
	
	p{
		font-size: 1em;
		line-height: 1.66;
	}

	input::-ms-clear {
		display: none;
	}

	input::-webkit-search-decoration,
	input::-webkit-search-cancel-button,
	input::-webkit-search-results-button,
	input::-webkit-search-results-decoration { display: none; }

	textarea {
		resize:none
	}

	button {
		font-size: inherit;
		cursor: pointer;
	}

	button::-moz-focus-inner {
		padding: 0;
		border: 0;
	}

	a{
		color: inherit;
	}

	a,
	a:visited {
		text-decoration: none;
	}

	a:hover {
		text-decoration: none;
	}

	ul li {
		list-style: none;
	}

	img {
		vertical-align: top;
	}

	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		font-weight: inherit;
		font-size: inherit;
		font-family: inherit;
	}

	h5 {
		font-size: .6em;
		line-height: 1.065;
		margin-bottom: 1em;
		text-transform: uppercase;
		letter-spacing: .05em;
		opacity: .5;

		@media (min-width: 1800px){
			font-size: 1em;
			line-height: 1.365;
		}
	}


	html,
	body,
	#root {
		height: 100%;
	}

	#root {
		--white: #fff;
		--grey: #75797A;
		--color-text: #F9FAFC;
		--bg-pink: #F73A4C;
		--bg-red:#CA1A2C;
		--bg-dark: #1C1D20;
		--orange: #FF4C1C;
		--color-border-light: rgba(255, 255, 255, 0.2);
		--color-border-dark: rgba(28, 29, 32, 0.175);
		--fw-light: 300;
		--fw-regular: 400;
		--fw-medium: 500;
		--fw-bold: 700;

		--shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
		--transition-sm: all 0.3s ease;
		--transition-md: all 0.8s ease 0s;

		--animation-primary: all .5s cubic-bezier(.7, 0, .3, 1);
		--animation-fast: all .3s cubic-bezier(.7, 0, .3, 1);
		--animation-smooth: all .7s cubic-bezier(.7, 0, .3, 1);
		--animation-slow: all .9s cubic-bezier(.7, 0, .3, 1);

		--animation-menu-wrap: transform .8s cubic-bezier(.7, 0, .2, 1);
		--animation-menu-content: all .6s cubic-bezier(.7, 0, .2, 1);
		--animation-menu-slow: all .85s cubic-bezier(.7, 0, .2, 1);
	}

	.container {
		max-width: 1240px;
		padding: 0 20px;
		margin: 0 auto;
	}
`

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
	<GlobalStyle/>
	<DataProvider>
		<App />
	</DataProvider>
  </React.StrictMode>
);
