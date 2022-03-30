import React from "react";

const Header = () => {
	return (
		<div className="header bg-gray-700 text-white py-4">
			<div className="container mx-auto">
				<nav className="flex justify-between">
					<h4 className="text-2xl">Logo</h4>
					<ul className="flex">
						<li className="mr-12">
							<a className="text-lg" href="/">
								Home
							</a>
						</li>
						<li className="mr-12">
							<a href="/about">About</a>
						</li>
						<li className="mr-12">
							<a href="/restaurant">Restaurant</a>
						</li>
						<li className="mr-12">
							<a href="/cart">Cart</a>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	);
};

export default Header;
