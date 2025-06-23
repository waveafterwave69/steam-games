import CardGame from '../CardGame/CardGame'
import styles from './SearchList.module.css'

const SearchList: React.FC<any> = ({ games }) => {
    return (
        <>
            <section className={styles.search__games}>
                <div className={styles.games__content}>
                    {games.map((game: any) => (
                        <CardGame key={game.id} props={game} />
                    ))}
                </div>
            </section>
        </>
    )
}

export default SearchList
