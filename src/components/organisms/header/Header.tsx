import { FC, useState } from "react"
import "./Header.scss"
import { Link } from "react-router-dom"

const Header: FC = () => {
	const [isNavOpen, setIsNavOpen] = useState(false)

	return (
		<header className="header">
			<div className="header__container">
				<Link to="/" className="header__logo">
					<img width={40} src="/logo.ico" alt="Satisfactory Web" />
				</Link>
				<nav className="header__nav">
					<Link to="/items" className="header__link">
						Items
					</Link>
					<Link to="/recipes" className="header__link">
						Recipes
					</Link>
					<Link to="/buildings" className="header__link">
						Buildings
					</Link>
					<Link to="/progress" className="header__link">
						Progress
					</Link>
					<Link to="/-" className="header__link">
						Notfound page
					</Link>
				</nav>
				<button
					className={`header__toggle-nav${
						isNavOpen ? " header__toggle-nav--open" : ""
					}`}
					onClick={() => {
						setIsNavOpen((state) => !state)
					}}
				>
					<svg
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<rect x="3" y="5" width="18" height="2" rx="1" fill="#FDFDFD" />
						<rect x="3" y="11" width="18" height="2" rx="1" fill="#FDFDFD" />
						<rect x="3" y="17" width="18" height="2" rx="1" fill="#FDFDFD" />
					</svg>
				</button>
			</div>
			<nav
				className={`header__mobile-nav${
					isNavOpen ? " header__mobile-nav--open" : ""
				}`}
			>
				<Link to="/items" className="header__link">
					Items
				</Link>
				<Link to="/recipes" className="header__link">
					Recipes
				</Link>
				<Link to="/buildings" className="header__link">
					Buildings
				</Link>
				<Link to="/progress" className="header__link">
					Progress
				</Link>
				<Link to="/-" className="header__link">
					Notfound page
				</Link>
			</nav>
		</header>
	)
}

export default Header
