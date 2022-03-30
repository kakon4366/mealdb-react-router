import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Components/About/About";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Restaurant from "./Components/Restaurant/Restaurant";

function App() {
	return (
		<div className="App">
			<Header></Header>
			<Routes>
				<Route path="/" element={<Home></Home>}></Route>
				<Route path="about" element={<About></About>}></Route>
				<Route
					path="restaurant"
					element={<Restaurant></Restaurant>}
				></Route>
			</Routes>
		</div>
	);
}

export default App;
