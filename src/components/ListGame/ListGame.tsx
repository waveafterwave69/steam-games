import styles from './ListGame.module.css'
import CardGame from '../CardGame/CardGame'
import useGetGames from '../../hooks/useGetGames'
import spinner from '../../img/spinner.svg'
import type { Game, RAWGResponse } from '../../types'

const ListGame: React.FC = () => {
    const { gamesPage, isLoading, next } = useGetGames()

    return (
        <>
            <section className={styles.games}>
                <ul className={styles.games__list}>
                    <div className={styles.games__content}>
                        {gamesPage &&
                            gamesPage.map((el: RAWGResponse) =>
                                el.data.results.map((game: Game) => (
                                    <div key={game.id}>
                                        {' '}
                                        <CardGame props={game} />
                                    </div>
                                ))
                            )}
                    </div>
                    {!isLoading ? (
                        <button
                            onClick={next}
                            className={styles.games__btn}
                            style={{ opacity: isLoading ? '0.6' : '1' }}
                        >
                            More Games
                        </button>
                    ) : (
                        <img
                            src={spinner}
                            className={styles.spinner}
                            alt="Loading..."
                        />
                    )}
                </ul>
            </section>
        </>
    )
}

export default ListGame
