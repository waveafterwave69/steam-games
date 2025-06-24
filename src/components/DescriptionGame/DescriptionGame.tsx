import styles from './DescriptionGame.module.css'

import metacritic from '../../img/metacritic.svg'

const DescriptionGame: React.FC<any> = ({ game, loading }) => {
    return (
        <>
            {!loading && (
                <section className={styles.description}>
                    <h1 className={styles.description__title}>Описание</h1>
                    <p className={styles.description__text}>
                        {game?.description_raw}
                    </p>
                    {game?.metacritic && (
                        <a href={game?.metacritic_url} target="_blank">
                            <div className={styles.metacritic}>
                                <div className={styles.metacritic__content}>
                                    <img src={metacritic} alt="metacritic" />
                                    <span>metacritic</span>
                                </div>
                                <span
                                    style={{
                                        backgroundColor:
                                            game?.metacritic < 40
                                                ? '#F94141'
                                                : game?.metacritic < 70
                                                ? '#D0D533'
                                                : '#27E42E',
                                    }}
                                    className={styles.metacritic__score}
                                >
                                    {game?.metacritic}
                                </span>
                            </div>
                        </a>
                    )}
                </section>
            )}
        </>
    )
}

export default DescriptionGame
