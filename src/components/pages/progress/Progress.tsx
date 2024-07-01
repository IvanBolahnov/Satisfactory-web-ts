import { useEffect, FC } from "react"
import BaseTemplate from "../../templates/base/Base"
import PageBanner from "../../molecules/pageBanner/PageBanner"
import { useSelector, useDispatch } from "react-redux"
import { RootState } from "../../../store/store"
import { playerSlice } from "../../../store/reducers/playerSlice"
import "../root/Root.scss"

const Progress: FC = () => {
	useEffect(() => {
		document.title = "Satisfactory Web | Progress"
	}, [])

	const { value } = useSelector((state: RootState) => state.player)
	const dispatch = useDispatch()
	const { increment } = playerSlice.actions

	return (
		<BaseTemplate>
			<PageBanner>
				<h1>Progress</h1>
			</PageBanner>
			<div className="card">
				<button onClick={() => dispatch(increment(1))}>count is {value}</button>
			</div>
		</BaseTemplate>
	)
}

export default Progress
