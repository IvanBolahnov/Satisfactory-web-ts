import { useEffect, FC } from "react"
import BaseTemplate from "../../templates/base/Base"
import PageBanner from "../../molecules/pageBanner/PageBanner"
import { useSelector, useDispatch } from "react-redux"
import { RootState } from "../../../store/store"
import { playerSlice } from "../../../store/reducers/playerSlice"
import "../root/Root.scss"

const items: string[] = [
	"cable",
	"concrete",
	"copperIngot",
	"copperOre",
	"ficsitCoupon",
	"ironIngot",
	"ironOre",
	"ironPlate",
	"ironRod",
	"limestone",
	"objectScanner",
	"portableMiner",
	"reinforcedIronPlate",
	"screws",
	"wire",
]

const Root: FC = () => {
	useEffect(() => {
		document.title = "Satisfactory Web | Items"
	}, [])

	const { value } = useSelector((state: RootState) => state.player)
	const dispatch = useDispatch()
	const { increment } = playerSlice.actions

	return (
		<BaseTemplate>
			<PageBanner>
				<h1>Items</h1>
			</PageBanner>
			<div className="card">
				<button onClick={() => dispatch(increment(1))}>count is {value}</button>

				{items.map((item) => {
					console.log(item)
					return <img key={item} src={`/src/assets/images/items/${item}.png`} />
				})}
			</div>
		</BaseTemplate>
	)
}

export default Root
