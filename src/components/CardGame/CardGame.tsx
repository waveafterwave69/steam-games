import styles from './CardGame.module.css'
import { capitalizeWords, checkPlatforms } from '../../utils/utils'
import star from '../../img/star.svg'
import React from 'react'

interface CardGameProps {
    props: {
        background_image: string
        slug: string
        released: string
        rating: number
        platforms: any[]
        [key: string]: any
    }
}

const CardGame: React.FC<CardGameProps | any> = ({ props }) => {
    return (
        <div className={styles.games__item}>
            <img
                src={props.background_image}
                alt="img"
                className={styles.item__img}
            />
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
            </div>
        </div>
    )
}

export default CardGame
