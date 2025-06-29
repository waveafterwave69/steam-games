import CardGame from '../CardGame/CardGame'
import styles from './SearchList.module.css'

import spinner from '../../img/spinner.svg'
import type { Game } from '../../types'

interface SearchListProps {
    games: Game[]
    loading: boolean
}

const SearchList: React.FC<SearchListProps> = ({ games, loading }) => {
    return (
        <>
            {loading ? (
                <img src={spinner} className={styles.spinner} />
            ) : (
                <section className={styles.search__games}>
                    <div className={styles.games__content}>
                        {games.map((game: Game) => (
                            <CardGame key={game.id} props={game} />
                        ))}
                    </div>
                </section>
            )}
        </>
    )
}

export default SearchList
