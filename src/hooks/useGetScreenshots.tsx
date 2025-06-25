import { useCallback, useState, useEffect } from 'react'
import { getGameInfo, getScreenshots } from '../data/data'

interface UseGetInfoGameReturn {
    screenshots: any
    loading: boolean
    error: string | null
}

const useGetScreenshots = (id: string | undefined): UseGetInfoGameReturn => {
    const [screenshots, setScreenshots] = useState<any | null>(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)

    const fetchGames = useCallback(
        async (id: string | undefined) => {
            setLoading(true)
            setError(null)
            try {
                const response: any = await getScreenshots(id)
                if (response && response.status === 200) {
                    setScreenshots(response.data)
                } else {
                    setError('Error while getting game: Invalid response')
                    setScreenshots(null)
                }
            } catch (error: any) {
                console.error('Error fetching games:', error)
                setError(error.message || 'An unexpected error occurred')
                setScreenshots(null)
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
        screenshots,
        loading,
        error,
    }
}

export default useGetScreenshots
