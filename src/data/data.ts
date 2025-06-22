import axios from 'axios'

export async function getGames(page: number) {
    try {
        const response = await axios.get(
            `https://api.rawg.io/api/games?key=1be5eb6fe4a1470ead03675c6825d0d3&page=${page}`
        )
        return response
    } catch (error) {
        console.error(error)
    }
}
