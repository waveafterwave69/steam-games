import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import gamesReducer from './slices/gamesSlice/gamesSlice'

export const store = configureStore({
    reducer: {
        games: gamesReducer,
    },
})

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
