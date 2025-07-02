import styles from './CardGame.module.css'
import { capitalizeWords, checkPlatforms } from '../../utils/utils'
import star from '../../img/star.svg'
import React from 'react'
import { Link } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import {
    addFavorite,
    removeFavorite,
} from '../../store/slices/gamesSlice/gamesSlice'
import type { Game } from '../../types'

interface CardGameProps {
    props: {
        background_image: string
        slug: string
        released: string
        rating: number
        platforms: any[]
        id: number
        [key: string]: any
    }
}

const CardGame: React.FC<CardGameProps> = ({ props }: any) => {
    const dispatch = useDispatch()
    const favorites = useSelector((state: any) => state.games.favorites)
    const isFavorite = favorites.some((game: Game) => game.id === props.id)

    const handleFav = () => {
        if (isFavorite) {
            dispatch(removeFavorite(props.id))
        } else {
            dispatch(addFavorite(props))
        }
    }

    return (
        <div className={styles.games__item}>
            <Link to={`/games/${props.id}`} className={styles.item__link}>
                <div className={styles.item__img}>
                    <img
                        src={props.background_image}
                        alt="img"
                        className={styles.item__image}
                    />
                </div>
            </Link>
            <div className={styles.games__content}>
                <h2 className={styles.item__title}>
                    {capitalizeWords(props.slug, ' ', '-')}
                </h2>
                <p className={styles.item__info}>
                    дата выпуска: {capitalizeWords(props.released, '.', '-')}
                </p>
                <p className={styles.item__info}>
                    рейтинг: {props.rating} <img src={star} alt="star" />
                </p>
                <p className={styles.item__platforms}>
                    {checkPlatforms(props.platforms)}
                </p>
                <button
                    onClick={handleFav}
                    className={
                        isFavorite
                            ? `${styles.games__fav} ${styles.active}`
                            : `${styles.games__fav}`
                    }
                >
                    {isFavorite ? 'remove from favorites' : 'add to favorites'}
                </button>
            </div>
        </div>
    )
}

export default CardGame
