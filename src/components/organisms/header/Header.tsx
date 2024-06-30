import { FC } from "react"
import "./Header.scss"
import { Link } from "react-router-dom"

const Header: FC = () => {
	return (
		<header className="header">
			<div className="header__container">
				<Link to="./" className="header__logo">
					<h3>Satisfactory Web</h3>
				</Link>
				<div className="header__links">
					<Link to="./items" className="header__link">
						Items
					</Link>
					<Link to="./milestones" className="header__link">
						Milestones
					</Link>
					<Link to="./buildings" className="header__link">
						Buildings
					</Link>
				</div>
			</div>
		</header>
	)
}

export default Header
