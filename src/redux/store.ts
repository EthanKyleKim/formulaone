import { configureStore } from '@reduxjs/toolkit'
import meetingsReducer from './meetings'
import driversReducer from './drivers'
import raceControlReducer from './receControl'
import weatherReducer from './weather'

export const store = configureStore({
    reducer: {
        meetings: meetingsReducer,
        drivers: driversReducer,
        raceControl: raceControlReducer,
        weather: weatherReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
