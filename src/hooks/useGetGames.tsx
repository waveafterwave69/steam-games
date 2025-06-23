import { useEffect, useState, useCallback } from 'react'
import type { RAWGResponse } from '../types'
import { getGames } from '../data/data'

interface UseGetSearchGamesReturn {
    pageCount: number
    gamesPage: RAWGResponse[]
    isLoading: boolean
    error: Error
    next: () => void
}

const useGetGames = (): UseGetSearchGamesReturn => {
    const [pageCount, setPageCount] = useState<number>(1)
    const [gamesPage, setGamesPage] = useState<RAWGResponse[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<any>(null)

    const fetchGames = useCallback(
        async (page: number) => {
            setIsLoading(true)
            try {
                const games = await getGames(page)
                if (games) {
                    setGamesPage((prev: any) => [...prev, games])
                } else {
                    setError('Error while getting games')
                }
            } catch (error) {
                console.error('Error fetching games:', error)
                setError(error)
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
