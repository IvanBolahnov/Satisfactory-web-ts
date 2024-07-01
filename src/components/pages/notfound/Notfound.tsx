import { useEffect, FC } from "react"
import BaseTemplate from "../../templates/base/Base"
import { Link } from "react-router-dom"
import "./Notfound.scss"
import PageBanner from "../../molecules/pageBanner/PageBanner"

const Notfound: FC = () => {
	useEffect(() => {
		document.title = "404 | Page Not Found"
	}, [])

	return (
		<BaseTemplate>
			<PageBanner>
				<h1>
					<span>404</span>&nbsp;<span>Page Not Found</span>
				</h1>
			</PageBanner>
			<div className="notfound">
				<p>
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
