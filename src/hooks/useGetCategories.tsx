import { useEffect, useState, useCallback } from 'react'
import type { RAWGResponse } from '../types'
import { getCategories } from '../data/data'

interface UseGetCategoriesReturn {
    categories: any
    isLoading: boolean
    error: Error | null
}

const useGetCategories = (): UseGetCategoriesReturn => {
    const [categories, setCategories] = useState<RAWGResponse[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<Error | null>(null)

    const fetchCategories = useCallback(async () => {
        setIsLoading(true)
        try {
            const categoryData: any = await getCategories()
            if (categoryData) {
                setCategories(categoryData)
            } else {
                setError(new Error('Error: No categories received from API.'))
            }
        } catch (err: any) {
            console.error('Error fetching categories:', err)
            setError(err instanceof Error ? err : new Error(String(err)))
        } finally {
            setIsLoading(false)
        }
    }, [getCategories])

    useEffect(() => {
        fetchCategories()
    }, [fetchCategories])

    return {
        categories,
        isLoading,
        error,
    }
}

export default useGetCategories
