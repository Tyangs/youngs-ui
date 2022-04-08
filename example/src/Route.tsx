import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Button from './pages/Button';
import Loading from './pages/Loading';

const AllRoute = () => {
	return (
		<BrowserRouter>
			<nav>
				<ul>
					<li>
						<Link to="youngs-ui/button">Button</Link>
					</li>
					<li>
						<Link to="youngs-ui/loading">Loading</Link>
					</li>
					<li>
						<Link to="youngs-ui/users">Users</Link>
					</li>
				</ul>
				<Routes>
					<Route path="youngs-ui/button" element={<Button />} />
					<Route path="youngs-ui/loading" element={<Loading />} />
				</Routes>
			</nav>
		</BrowserRouter>
	);
};

export default AllRoute;
