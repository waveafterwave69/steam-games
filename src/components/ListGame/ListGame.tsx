import styles from './ListGame.module.css'
import { useEffect, useState } from 'react'
import { getGames } from '../../data/data'
import type { RAWGResponse } from '../../types'

const ListGame: React.FC = () => {
    const [pageCount, setPageCount] = useState<number>(1)
    const [gamesPage, setGamesPage] = useState<RAWGResponse | any>([])

    useEffect(() => {
        const fetchGames = async () => {
            try {
                const games = await getGames(pageCount)
                setGamesPage((prev: any) => [...prev, games])
            } catch (error) {
                console.error('Error fetching games:', error)
                setGamesPage(null)
            }
        }

        fetchGames()
    }, [pageCount])

    function next() {
        setPageCount((prev) => prev + 1)
    }

    return (
        <>
            <button onClick={next}>next</button>
            {gamesPage &&
                gamesPage.map((el: any) =>
                    el.data.results.map((el: any) => (
                        <p key={el.id}>{el.slug}</p>
                    ))
                )}
        </>
    )
}

export default ListGame
