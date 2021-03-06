import { HashRouter, Routes, Route, Link } from 'react-router-dom';
import Button from './pages/Button';
import Loading from './pages/Loading';

const AllRoute = () => {
	return (
		<HashRouter>
			<nav>
				<ul>
					<li>
						<Link to="button">Button</Link>
					</li>
					<li>
						<Link to="loading">Loading</Link>
					</li>
					<li>
						<Link to="users">Users</Link>
					</li>
				</ul>
				<Routes>
					<Route path="button" element={<Button />} />
					<Route path="loading" element={<Loading />} />
				</Routes>
			</nav>
		</HashRouter>
	);
};

export default AllRoute;
