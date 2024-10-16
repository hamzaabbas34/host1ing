import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./component/Home/Home";
import "./App.css";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<Home />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;