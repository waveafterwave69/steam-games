import { useEffect, useState, useCallback } from 'react'
import type { RAWGResponse } from '../types'
import { getCurrCategory } from '../data/data'

interface UseGetCurrCategoriesReturn {
    pageCount: number
    category: RAWGResponse[] // Array of RAWGResponse
    isLoading: boolean
    error: Error | null // Error can be null or an Error object
    next: () => void
}

const useGetCurrCategories = (
    id: string | undefined
): UseGetCurrCategoriesReturn => {
    const [pageCount, setPageCount] = useState<number>(1)
    const [category, setCategory] = useState<RAWGResponse[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<Error | null>(null)

    const fetchGames = useCallback(
        async (page: number) => {
            setIsLoading(true)
            try {
                const currCategory: RAWGResponse | any = await getCurrCategory(
                    id,
                    page
                )

                if (currCategory) {
                    setCategory((prev: RAWGResponse[]) => [
                        ...prev,
                        currCategory,
                    ])
                } else {
                    setError(new Error('Error while getting games'))
                }
            } catch (e: any) {
                console.error('Error fetching games:', e)
                setError(
                    e instanceof Error
                        ? e
                        : new Error('An unexpected error occurred')
                )
            } finally {
                setIsLoading(false)
            }
        },
        [id, getCurrCategory]
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
