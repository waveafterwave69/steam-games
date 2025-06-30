import { useCallback, useState, useEffect } from 'react'
import { getGameInfo, getScreenshots } from '../data/data'
import type { ScreenshotsGameI } from '../types'

interface UseGetInfoGameReturn {
    screenshots: ScreenshotsGameI | null
    isLoading: boolean
    error: Error | string | null
}

const useGetScreenshots = (id: string | undefined): UseGetInfoGameReturn => {
    const [screenshots, setScreenshots] = useState<ScreenshotsGameI | null>(
        null
    )
    const [isLoading, setLoading] = useState(false)
    const [error, setError] = useState<Error | string | null>(null)

    const fetchGames = useCallback(
        async (id: string | undefined) => {
            setLoading(true)
            setError(null)
            try {
                const response: ScreenshotsGameI | any = await getScreenshots(
                    id
                )
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
        isLoading,
        error,
    }
}

export default useGetScreenshots
