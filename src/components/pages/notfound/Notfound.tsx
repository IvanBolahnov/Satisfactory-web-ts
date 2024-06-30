import { useEffect, FC } from "react"
import BaseTemplate from "../../templates/base/Base"
import { Link } from "react-router-dom"
import "./Notfound.scss"

const Notfound: FC = () => {
	useEffect(() => {
		document.title = "404 | Page Not Found"
	}, [])

	return (
		<BaseTemplate>
			<div className="notfound">
				<div className="notfound__banner">
					<h1>404 Page Not Found</h1>
				</div>
				<p className="notfound__text">
					The page you are looking for does not exist.&nbsp;
					<Link className="notfound__link" to="/">
						Go home
					</Link>
				</p>
			</div>
		</BaseTemplate>
	)
}

export default Notfound
