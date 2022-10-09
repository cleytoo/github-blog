import { Outlet } from 'react-router-dom'
import { Header } from '../Header'
import { LayoutWrapper } from './styles'

export const DefaultLayout = () => {
	return (
		<LayoutWrapper>
			<Header />
			<Outlet />
		</LayoutWrapper>
	)
}
