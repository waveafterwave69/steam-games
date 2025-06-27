import CardGame from '../CardGame/CardGame'
import styles from './SearchList.module.css'

import spinner from '../../img/spinner.svg'

const SearchList: React.FC<any> = ({ games, loading }) => {
    return (
        <>
            {loading ? (
                <img src={spinner} className={styles.spinner} />
            ) : (
                <section className={styles.search__games}>
                    <div className={styles.games__content}>
                        {games.map((game: any) => (
                            <CardGame key={game.id} props={game} />
                        ))}
                    </div>
                </section>
            )}
        </>
    )
}

export default SearchList
