import React, { useState, useEffect, useCallback } from 'react'
import { searchGame } from '../../data/data'
import type { AxiosResponse } from 'axios'
import ListGame from '../ListGame/ListGame'
import CardGame from '../CardGame/CardGame'
import styles from './SearchGame.module.css'

import search from '../../img/search.svg'

interface Game {
    id: number
    name: string
    background_image: string
}

function SearchGame() {
    const [searchTerm, setSearchTerm] = useState('')
    const [games, setGames] = useState<Game[]>([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)

    const memoizedSearchGames = useCallback(async () => {
        setLoading(true)
        setError(null)

        try {
            const response: AxiosResponse<any> | undefined = await searchGame(
                searchTerm
            )

            if (response && response.status === 200 && response.data.results) {
                setGames(response.data.results)
            } else {
                setError('Не удалось получить результаты поиска.')
                setGames([])
            }
        } catch (e: any) {
            setError(e.message || 'An error occurred.')
            setGames([])
        } finally {
            setLoading(false)
        }
    }, [searchTerm, searchGame])

    useEffect(() => {
        memoizedSearchGames()
    }, [memoizedSearchGames])

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
                <div className={styles.games__content}>
                    {games.map((game) => (
                        <CardGame key={game.id} props={game} />
                    ))}
                </div>
            ) : (
                <ListGame />
            )}
        </section>
    )
}

export default SearchGame
