import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Lodging from "../pages/Lodging";
import Error404 from "../pages/Error404";

const router = createBrowserRouter([
	{ path: "/", element: <Home />},
	{ path: "/about", element: <About />},
	{ path: "/lodging/:id", element: <Lodging />},
	{ path: "/*", element: <Error404 />},
]);

function App() {
	return (
		<React.StrictMode>
			<main>
				<RouterProvider router={router} />
			</main>
		</React.StrictMode>
	);
}

export default App;
