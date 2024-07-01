import { FC, ReactNode } from "react"
import "./PageBanner.scss"

type PageBannerProps = {
	children: ReactNode
}

const PageBanner: FC<PageBannerProps> = ({ children }) => {
	return (
		<div className={`page-banner`}>
			<div className="page-banner__container">{children}</div>
		</div>
	)
}

export default PageBanner
