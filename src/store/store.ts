import { combineReducers, configureStore } from "@reduxjs/toolkit"

import playerSlice from "./reducers/playerSlice"

const rootReducer = combineReducers({
	player: playerSlice,
})

export const store = () => {
	return configureStore({
		reducer: rootReducer,
	})
}

export type RootState = ReturnType<typeof rootReducer>
