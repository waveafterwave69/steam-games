import React from 'react'
import ListGame from '../ListGame/ListGame'
import styles from './SearchGame.module.css'
import search from '../../img/search.svg'
import useGetSearchGames from '../../hooks/useGetSearchGames'
import SearchList from '../SearchList/SearchList'

const SearchGame: React.FC = () => {
    const {
        searchTerm,
        setSearchTerm,
        games,
        loading,
        error,
        search: memoizedSearchGames,
    } = useGetSearchGames()

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value)
    }

    const handleSearchClick = () => {
        memoizedSearchGames()
    }

    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            memoizedSearchGames()
        }
    }

    return (
        <section className={styles.search}>
            <div className={styles.search__bar}>
                <input
                    type="text"
                    placeholder="Game name..."
                    value={searchTerm}
                    autoComplete="off"
                    onChange={handleInputChange}
                    onKeyPress={handleKeyPress}
                    className={styles.search__input}
                />
                <button
                    id="searchButton"
                    onClick={handleSearchClick}
                    disabled={loading}
                >
                    <img
                        src={search}
                        alt="search"
                        className={styles.search__btn}
                    />
                </button>
            </div>

            {error && <div className="error-message">Ошибка: {error}</div>}

            {searchTerm && games.length > 0 ? (
                <SearchList games={games} />
            ) : (
                <ListGame />
            )}
        </section>
    )
}

export default SearchGame
