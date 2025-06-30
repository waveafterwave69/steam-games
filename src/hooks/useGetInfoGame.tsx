import { useCallback, useState, useEffect } from 'react'
import { getGameInfo } from '../data/data'
import type { Game } from '../types'

interface UseGetInfoGameReturn {
    game: Game | undefined
    loading: boolean
    error: Error | string | null
}

const useGetInfoGame = (id: string | undefined): UseGetInfoGameReturn => {
    const [game, setGame] = useState<Game | undefined>()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<Error | string | null>(null)

    const fetchGames = useCallback(
        async (id: string | undefined) => {
            setLoading(true)
            setError(null)
            try {
                const response: Game | any = await getGameInfo(id)
                if (response && response.status === 200) {
                    setGame(response.data)
                } else {
                    setError('Error while getting game: Invalid response')
                }
            } catch (error: any) {
                console.error('Error fetching games:', error)
                setError(error.message || 'An unexpected error occurred')
            } finally {
                setLoading(false)
            }
        },
        [getGameInfo]
    )

    useEffect(() => {
        fetchGames(id)
    }, [fetchGames, id])
    return {
        loading,
        error,
        game,
    }
}

export default useGetInfoGame
