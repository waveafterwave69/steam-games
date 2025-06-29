import React, { useEffect, useState } from 'react'
import ListGame from '../ListGame/ListGame'
import styles from './SearchGame.module.css'
import search from '../../img/search.svg'
import useGetSearchGames from '../../hooks/useGetSearchGames'
import SearchList from '../SearchList/SearchList'

const SearchGame: React.FC = () => {
    const [localSearchTerm, setLocalSearchTerm] = useState<string>(() => {
        const storedSearchTerm = localStorage.getItem('searchTerm')
        return storedSearchTerm || ''
    })

    const {
        setSearchTerm,
        games,
        loading,
        error,
        search: memoizedSearchGames,
    } = useGetSearchGames(localSearchTerm)

    useEffect(() => {
        localStorage.setItem('searchTerm', localSearchTerm)
        setSearchTerm(localSearchTerm)
    }, [localSearchTerm, setSearchTerm])

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLocalSearchTerm(event.target.value)
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
                    value={localSearchTerm}
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

            {localSearchTerm.length > 0 ? (
                <SearchList games={games} loading={loading} />
            ) : (
                <ListGame />
            )}
        </section>
    )
}

export default SearchGame
