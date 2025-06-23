import styles from './ListGame.module.css'

import CardGame from '../CardGame/CardGame'
import useGetGames from '../../hooks/useGetGames'
const ListGame: React.FC = () => {
    const { gamesPage, isLoading, next } = useGetGames()

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
