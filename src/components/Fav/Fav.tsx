import { useDispatch, useSelector } from 'react-redux'
import styles from './Fav.module.css'
import { useEffect, useState } from 'react'

import type { Game } from '../../types'
import CardGame from '../CardGame/CardGame'
import { fetchGames } from '../../store/slices/gamesSlice/gamesSlice'

const Fav: React.FC = () => {
    const dispatch = useDispatch()
    const favorites = useSelector((state: any) => state.games.favorites)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        setIsLoading(true)
        dispatch(fetchGames() as any)
            .then(() => setIsLoading(false))
            .catch((err: any) => {
                setError(err.message || 'Failed to load games')
                setIsLoading(false)
            })
    }, [dispatch])

    if (isLoading) {
        return <div>Loading favorites...</div>
    }

    if (error) {
        return <div>Error loading favorites: {error}</div>
    }

    return (
        <>
            <section className={styles.fav}>
                <ul className={styles.fav__list}>
                    <div className={styles.fav__content}>
                        {favorites && favorites.length > 0 ? (
                            favorites.map((game: Game) => (
                                <CardGame key={game.id} props={game} />
                            ))
                        ) : (
                            <p className={styles.no}>No favorite games yet.</p>
                        )}
                    </div>
                </ul>
            </section>
        </>
    )
}

export default Fav
