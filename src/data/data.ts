import axios, { type AxiosResponse } from 'axios'

const apiKey = '1be5eb6fe4a1470ead03675c6825d0d3'

export async function getGames(page: number) {
    try {
        const response = await axios.get(
            `https://api.rawg.io/api/games?key=${apiKey}&page=${page}`
        )
        return response
    } catch (error) {
        console.error(error)
    }
}

export const searchGame = async (
    searchTerm: string
): Promise<AxiosResponse<any> | undefined> => {
    try {
        const response: AxiosResponse<any> = await axios.get(
            `https://api.rawg.io/api/games?key=${apiKey}&search=${searchTerm}`
        )
        return response
    } catch (error: any) {
        console.error(error)
    }
}

export async function getGameInfo(id: string | undefined) {
    try {
        const response = await axios.get(
            `https://api.rawg.io/api/games/${id}?key=${apiKey}`
        )
        return response
    } catch (error) {
        console.error(error)
    }
}

export async function getScreenshots(id: string | undefined) {
    try {
        const response = await axios.get(
            `https://api.rawg.io/api/games/${id}/screenshots?key=${apiKey}`
        )
        return response
    } catch (error) {
        console.error(error)
    }
}
