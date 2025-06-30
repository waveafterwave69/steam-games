import styles from './PromoGame.module.css'
import { capitalizeWords, checkPlatforms } from '../../utils/utils'

import star from '../../img/star.svg'
import type { Game } from '../../types'

interface PromoGameProps {
    game: Game | undefined
    loading: boolean
}

const PromoGame: React.FC<PromoGameProps> = ({ game, loading }) => {
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
                            (developer: Game) => developer?.name
                        )}
                    </p>
                    <p className={styles.item__info}>
                        рейтинг: {game?.rating} <img src={star} alt="star" />
                    </p>
                    <p className={styles.item__platforms}>
                        {checkPlatforms(game?.platforms)}
                    </p>
                </section>
            )}
        </>
    )
}

export default PromoGame
