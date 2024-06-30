import { useEffect, FC } from "react"
import BaseTemplate from "../../templates/base/Base"
import { useSelector, useDispatch } from "react-redux"
import { RootState } from "../../../store/store"
import { playerSlice } from "../../../store/reducers/playerSlice"
import "./Root.scss"

const Root: FC = () => {
	useEffect(() => {
		document.title = "Satisfactory Web"
	}, [])

	const { value } = useSelector((state: RootState) => state.player)
	const dispatch = useDispatch()
	const { increment } = playerSlice.actions
	// const [count, setCount] = useState(0)

	return (
		<BaseTemplate>
			<div>
				<h1>Satisfactory Web</h1>
			</div>
			<div className="card">
				<button onClick={() => dispatch(increment(1))}>count is {value}</button>
				<p>
					Edit <code>src/App.tsx</code> and save to test HMR
				</p>
			</div>
			<p className="read-the-docs">
				Click on the Vite and React logos to learn more
			</p>
		</BaseTemplate>
	)
}

export default Root
