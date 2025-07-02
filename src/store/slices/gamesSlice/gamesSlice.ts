import {
    createSlice,
    createAsyncThunk,
    type PayloadAction,
} from '@reduxjs/toolkit'
import axios, { type AxiosResponse } from 'axios'

interface Game {
    id: number
    name: string
}

interface GamesState {
    games: Game[]
    favorites: Game[]
    loading: boolean
    error: string | null
}

const localStorageKey = 'favoriteGames'

const loadFavoritesFromLocalStorage = (): Game[] => {
    try {
        const serializedFavorites = localStorage.getItem(localStorageKey)
        if (serializedFavorites === null) {
            return []
        }
        return JSON.parse(serializedFavorites)
    } catch (error) {
        console.error('Error loading favorites from local storage:', error)
        return []
    }
}

const initialState: GamesState = {
    games: [],
    favorites: loadFavoritesFromLocalStorage(),
    loading: false,
    error: null,
}

export const fetchGames = createAsyncThunk<Game[], void>(
    'games/fetchGames',
    async () => {
        try {
            const response: AxiosResponse<Game[]> = await axios.get(
                '/api/games'
            )
            return response.data
        } catch (error: any) {
            throw new Error(error.message)
        }
    }
)

const gamesSlice = createSlice({
    name: 'games',
    initialState,
    reducers: {
        addFavorite: (state, action: PayloadAction<Game>) => {
            const gameToAdd = action.payload
            if (!state.favorites.find((game) => game.id === gameToAdd.id)) {
                state.favorites = [...state.favorites, gameToAdd]
                localStorage.setItem(
                    localStorageKey,
                    JSON.stringify(state.favorites)
                )
            }
        },
        removeFavorite: (state, action: PayloadAction<number>) => {
            const gameIdToRemove = action.payload
            state.favorites = state.favorites.filter(
                (game) => game.id !== gameIdToRemove
            )
            localStorage.setItem(
                localStorageKey,
                JSON.stringify(state.favorites)
            )
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchGames.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(
                fetchGames.fulfilled,
                (state, action: PayloadAction<Game[]>) => {
                    state.loading = false
                    state.games = action.payload
                }
            )
            .addCase(fetchGames.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message || 'Failed to fetch games.'
            })
    },
})

export const { addFavorite, removeFavorite } = gamesSlice.actions

export default gamesSlice.reducer
