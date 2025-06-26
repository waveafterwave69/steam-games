import styles from './ListGame.module.css'

import CardGame from '../CardGame/CardGame'
import useGetGames from '../../hooks/useGetGames'

import spinner from '../../img/spinner.svg'

const ListGame: React.FC = () => {
    const { gamesPage, isLoading, next } = useGetGames()
    console.log(gamesPage)

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
                    {!isLoading ? (
                        <button
                            onClick={next}
                            className={styles.games__btn}
                            style={{ opacity: isLoading ? '0.6' : '1' }}
                        >
                            More Games
                        </button>
                    ) : (
                        <img src={spinner} className={styles.spinner} />
                    )}
                </ul>
            </section>
        </>
    )
}

export default ListGame
