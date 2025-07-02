import styles from './PromoGame.module.css'
import { capitalizeWords, checkPlatforms } from '../../utils/utils'
import star from '../../img/star.svg'
import type { Game } from '../../types'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
    addFavorite,
    removeFavorite,
} from '../../store/slices/gamesSlice/gamesSlice'

interface PromoGameProps {
    game: Game | undefined
    loading: boolean
}

const PromoGame: React.FC<PromoGameProps> = ({ game, loading }) => {
    const dispatch = useDispatch()
    const favorites = useSelector((state: any) => state.games.favorites)

    const isFavorite = game
        ? favorites.some((favGame: any) => favGame.id === game.id)
        : false

    const handleFav = () => {
        if (game) {
            if (isFavorite) {
                dispatch(removeFavorite(game.id))
            } else {
                dispatch(addFavorite(game))
            }
        }
    }

    return (
        <>
            {!loading && (
                <section className={styles.info__promo}>
                    <img
                        src={game?.background_image}
                        alt="bg"
                        className={styles.info__bg}
                    />
                    <h1 className={styles.info__title}>{game?.name}</h1>
                    <p className={styles.info__release}>
                        дата выпуска:{' '}
                        {capitalizeWords(game?.released, '.', '-')}
                    </p>
                    <p className={styles.info__developers}>
                        by:{' '}
                        {game?.developers.map(
                            (developer: any) => developer?.name
                        )}
                    </p>
                    <p className={styles.item__info}>
                        рейтинг: {game?.rating} <img src={star} alt="star" />
                    </p>
                    <button
                        onClick={handleFav}
                        className={
                            isFavorite
                                ? `${styles.games__favorites} ${styles.active}`
                                : `${styles.games__favorites}`
                        }
                    >
                        {isFavorite
                            ? 'remove from favorites'
                            : 'add to favorites'}
                    </button>
                    <p className={styles.item__platforms}>
                        {checkPlatforms(game?.platforms)}
                    </p>
                </section>
            )}
        </>
    )
}

export default PromoGame
