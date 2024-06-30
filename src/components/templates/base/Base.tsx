import { FC, ReactNode } from "react"
import Header from "../../organisms/header/Header"
import "./Base.scss"

type baseTemplateProps = {
	footer?: ReactNode
	children: ReactNode
}

const BaseTemplate: FC<baseTemplateProps> = ({ children, footer }) => {
	return (
		<>
			<Header></Header>
			<main className="main">
				<div className="main__container">{children}</div>
				{footer}
			</main>
		</>
	)
}

export default BaseTemplate
