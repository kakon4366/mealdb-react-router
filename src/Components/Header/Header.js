import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<div className="header bg-gray-700 text-white py-4">
			<div className="container mx-auto">
				<nav className="flex justify-between">
					<h4 className="text-2xl">Logo</h4>
					<ul className="flex">
						<li className="mr-12">
							<Link to="/">Home</Link>
						</li>
						<li className="mr-12">
							<Link to="/about">About</Link>
						</li>
						<li className="mr-12">
							<Link to="restaurant">Restaurant</Link>
						</li>
						<li className="mr-12">
							<Link to="/cart">Cart</Link>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	);
};

export default Header;
