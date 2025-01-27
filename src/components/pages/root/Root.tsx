import { useEffect, FC } from "react"
import BaseTemplate from "../../templates/base/Base"
import { useSelector, useDispatch } from "react-redux"
import { RootState } from "../../../store/store"
import { playerSlice } from "../../../store/reducers/playerSlice"
import "./Root.scss"
import PageBanner from "../../molecules/pageBanner/PageBanner"

const Root: FC = () => {
	useEffect(() => {
		document.title = "Satisfactory Web"
	}, [])

	const { value } = useSelector((state: RootState) => state.player)
	const dispatch = useDispatch()
	const { increment } = playerSlice.actions

	return (
		<BaseTemplate>
			<PageBanner>
				<h1>Satisfactory Web</h1>
			</PageBanner>
			<div className="card">
				<button onClick={() => dispatch(increment(1))}>count is {value}</button>
				<br />
				<span>
					{JSON.stringify(useSelector((state: RootState) => state.player))}
				</span>
			</div>
		</BaseTemplate>
	)
}

export default Root
