import Root from "./components/pages/root/Root"
import Notfound from "./components/pages/notfound/Notfound"
import Items from "./components/pages/items/Items"
import Recipes from "./components/pages/recipes/Recipes"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { FC } from "react"
import Buildings from "./components/pages/buildings/Buildings"
import Progress from "./components/pages/progress/Progress"

const router = createBrowserRouter([
	{ path: "/", element: <Root />, errorElement: <Notfound /> },
	{ path: "/items", element: <Items /> },
	{ path: "/recipes", element: <Recipes /> },
	{ path: "/buildings", element: <Buildings /> },
	{ path: "/progress", element: <Progress /> },
])

const App: FC = () => {
	return (
		<>
			<RouterProvider router={router} />
		</>
	)
}

export default App
