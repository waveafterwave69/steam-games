import { useEffect, useState, useCallback } from 'react'
import type { RAWGResponse } from '../types'
import { getCurrCategory } from '../data/data'

interface UseGetSearchGamesReturn {
    pageCount: number
    category: RAWGResponse[]
    isLoading: boolean
    error: Error
    next: () => void
}

const useGetCurrCategories = (
    id: string | undefined
): UseGetSearchGamesReturn => {
    const [pageCount, setPageCount] = useState<number>(1)
    const [category, setCategory] = useState<RAWGResponse[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<any>(null)

    const fetchGames = useCallback(
        async (page: number) => {
            setIsLoading(true)
            try {
                const currCategory = await getCurrCategory(id, page)
                if (currCategory) {
                    setCategory((prev: any) => [...prev, currCategory])
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
        [getCurrCategory]
    )

    useEffect(() => {
        fetchGames(pageCount)
    }, [fetchGames, pageCount])

    const next = useCallback(() => {
        setPageCount((prev) => prev + 1)
    }, [])

    return {
        pageCount,
        isLoading,
        category,
        next,
        error,
    }
}

export default useGetCurrCategories
