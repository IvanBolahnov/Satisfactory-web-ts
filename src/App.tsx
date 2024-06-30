import Root from "./components/pages/root/Root"
import Notfound from "./components/pages/notfound/Notfound"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { FC } from "react"

const router = createBrowserRouter([
	{ path: "/", element: <Root />, errorElement: <Notfound /> },
])

const App: FC = () => {
	return (
		<>
			<RouterProvider router={router} />
		</>
	)
}

export default App
