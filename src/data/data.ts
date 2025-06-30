import axios, { type AxiosResponse } from 'axios'
import type { Game } from '../types'

const apiKey = '1be5eb6fe4a1470ead03675c6825d0d3'

export async function getGames(page: number) {
    try {
        const response = await axios.get(`https://api.rawg.io/api/games`, {
            params: {
                key: apiKey,
                page: page,
            },
        })
        return response
    } catch (error) {
        console.error(error)
    }
}

export const searchGame = async (
    searchTerm: string
): Promise<AxiosResponse<Game> | undefined> => {
    try {
        const response: AxiosResponse<Game> = await axios.get(
            `https://api.rawg.io/api/games`,
            {
                params: {
                    key: apiKey,
                    search: searchTerm,
                },
            }
        )
        return response
    } catch (error: any) {
        console.error(error)
    }
}

export async function getGameInfo(id: string | undefined) {
    try {
        const response = await axios.get(
            `https://api.rawg.io/api/games/${id}`,
            {
                params: {
                    key: apiKey,
                },
            }
        )
        return response
    } catch (error) {
        console.error(error)
    }
}

export async function getScreenshots(id: string | undefined) {
    try {
        const response = await axios.get(
            `https://api.rawg.io/api/games/${id}/screenshots`,
            {
                params: {
                    key: apiKey,
                },
            }
        )
        return response
    } catch (error) {
        console.error(error)
    }
}

export async function getCategories() {
    try {
        const response = await axios.get(`https://api.rawg.io/api/tags`, {
            params: {
                key: apiKey,
            },
        })
        return response
    } catch (error) {
        console.error(error)
    }
}

export async function getCurrCategory(
    tags: string | undefined,
    page: number | undefined
) {
    try {
        const response = await axios.get(`https://api.rawg.io/api/games`, {
            params: {
                key: apiKey,
                tags: tags,
                page: page,
            },
        })
        return response
    } catch (error) {
        console.error(error)
    }
}
