import { HeaderWrapper, Logo } from './styles'

import leftDetails from '../../assets/left-details.svg'
import rightDetails from '../../assets/right-details.svg'
import logo from '../../assets/Logo.svg'

export const Header = () => {
	return (
		<HeaderWrapper>
			<img src={leftDetails} alt="" />
			<Logo src={logo} alt="" />
			<img src={rightDetails} alt="" />
		</HeaderWrapper>
	)
}
