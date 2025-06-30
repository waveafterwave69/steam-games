import { useEffect, useState, useCallback } from 'react'
import type { RAWGResponse } from '../types'
import { getGames } from '../data/data'

interface UseGetGamesReturn {
    pageCount: number
    gamesPage: RAWGResponse[]
    isLoading: boolean
    error: Error | string | null
    next: () => void
}

const useGetGames = (): UseGetGamesReturn => {
    const [pageCount, setPageCount] = useState<number>(1)
    const [gamesPage, setGamesPage] = useState<RAWGResponse[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<Error | string | null>(null)

    const fetchGames = useCallback(
        async (page: number) => {
            setIsLoading(true)
            try {
                const games: RAWGResponse | any = await getGames(page)
                if (games) {
                    setGamesPage((prev) => [...prev, games])
                } else {
                    setError('Error while getting games')
                }
            } catch (e: any) {
                console.error('Error fetching games:', e)
                setError(e instanceof Error ? e : String(e))
            } finally {
                setIsLoading(false)
            }
        },
        [getGames]
    )

    useEffect(() => {
        fetchGames(pageCount)
    }, [fetchGames, pageCount])

    const next = useCallback(() => {
        setPageCount((prev) => prev + 1)
    }, [])

    return {
        pageCount,
        gamesPage,
        isLoading,
        next,
        error,
    }
}

export default useGetGames
