import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './components/@Layout'
import { Details } from './pages/Details'
import { Home } from './pages/Home'

export const MainRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<DefaultLayout />}>
				<Route path="/" element={<Home />} />
				<Route path="details" element={<Details />} />
			</Route>
		</Routes>
	)
}
