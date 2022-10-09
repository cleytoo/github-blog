import styled from 'styled-components'

export const Wrapper = styled.main`
	width: 100%;
	max-width: 1440px;
	height: 300px;
	margin: 0 auto;
	/* padding: 0 1.5rem; */
	display: flex;
	justify-content: center;
	align-items: center;
`

export const GithubDetails = styled.div`
	width: 864px;
	height: 212px;
	border-radius: 10px;
	background-color: ${(props) => props.theme['base-profile']};
	box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
	padding: 32px 40px;
	margin-top: -360px;

	display: flex;
	gap: 32px;

	img {
		height: 148px;
		width: 148px;
		border-radius: 8px;
	}

	> div {
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;

		p {
			font-size: 16px;
		}
	}
`

export const Tags = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-top: auto;

	span {
		display: flex;
		align-items: center;
		gap: 10px;

		svg {
			color: ${(props) => props.theme['base-label']};
		}
	}
`

export const Header = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: flex-start;

	a {
		display: flex;
		align-items: center;
		gap: 5px;
	}
`
