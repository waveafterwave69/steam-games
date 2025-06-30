import { useCallback, useState, useEffect } from 'react'
import { searchGame } from '../data/data'
import type { Game } from '../types'

interface UseGetSearchGamesReturn {
    searchTerm: string
    setSearchTerm: React.Dispatch<React.SetStateAction<string>>
    games: Game[]
    loading: boolean
    error: Error | string | null
    search: () => Promise<void>
}

const useGetSearchGames = (
    initialSearchTerm: string = ''
): UseGetSearchGamesReturn => {
    const [searchTerm, setSearchTerm] = useState(initialSearchTerm)
    const [games, setGames] = useState<Game[]>([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<Error | string | null>(null)

    const search = useCallback(async () => {
        if (!searchTerm) {
            setGames([])
            return
        }

        setLoading(true)
        setError(null)

        try {
            const response: Game | any = await searchGame(searchTerm)

            if (response && response.status === 200 && response.data.results) {
                setGames(response.data.results)
            } else {
                setError('Не удалось получить результаты поиска.')
                setGames([])
            }
        } catch (e: any) {
            setError(e.message || 'An error occurred.')
            setGames([])
        } finally {
            setLoading(false)
        }
    }, [searchTerm, searchGame])

    useEffect(() => {
        if (searchTerm.length > 0) {
            search()
        } else {
            setGames([])
        }
    }, [searchTerm, search])

    return {
        searchTerm,
        setSearchTerm,
        games,
        loading,
        error,
        search,
    }
}

export default useGetSearchGames
