import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
	* {
		padding: 0px;
		margin: 0px;
		box-sizing: border-box;
	}

	body {
      background-color: ${(props) => props.theme['base-bg']};
      color: ${(props) => props.theme['base-text']};
      -webkit-font-smoothing: antialiased
    }

	html, input, button {
		font-family: 'Nunito', sans-serif;
		font-size: 1rem;
		font-weight: 400;
	}

	button {
		cursor: pointer;
	}

`
