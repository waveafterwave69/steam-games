import styles from './ListGame.module.css'
import { useEffect, useState } from 'react'
import { getGames } from '../../data/data'
import type { RAWGResponse } from '../../types'

import CardGame from '../CardGame/CardGame'
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

    const next = () => {
        setPageCount((prev) => prev + 1)
    }

    return (
        <>
            <section className={styles.games}>
                <ul className={styles.games__list}>
                    {gamesPage &&
                        gamesPage.map((el: any) =>
                            el.data.results.map((el: any) => (
                                <CardGame key={el.id} props={el} />
                            ))
                        )}
                    <button onClick={next}>next</button>
                </ul>
            </section>
        </>
    )
}

export default ListGame
