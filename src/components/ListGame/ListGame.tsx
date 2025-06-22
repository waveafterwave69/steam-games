import styles from './ListGame.module.css'
import { useEffect, useState } from 'react'
import { getGames } from '../../data/data'
import type { RAWGResponse } from '../../types'

import CardGame from '../CardGame/CardGame'
const ListGame: React.FC = () => {
    const [pageCount, setPageCount] = useState<number>(1)
    const [gamesPage, setGamesPage] = useState<RAWGResponse | any>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)

    useEffect(() => {
        const fetchGames = async () => {
            setIsLoading(true)
            try {
                const games = await getGames(pageCount)
                setGamesPage((prev: any) => [...prev, games])
            } catch (error) {
                console.error('Error fetching games:', error)
                setGamesPage(null)
            }
            setIsLoading(false)
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
                    <div className={styles.games__content}>
                        {gamesPage &&
                            gamesPage.map((el: any) =>
                                el.data.results.map((el: any) => (
                                    <CardGame key={el.id} props={el} />
                                ))
                            )}
                    </div>
                    <button
                        onClick={next}
                        className={styles.games__btn}
                        style={{ opacity: isLoading ? '0.6' : '1' }}
                    >
                        {isLoading ? 'Loading...' : 'More Games'}
                    </button>
                </ul>
            </section>
        </>
    )
}

export default ListGame
