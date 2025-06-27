import { useEffect } from 'react'
import SearchGame from '../../components/SearchGame/SearchGame'

const GamesPage: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <SearchGame />
        </>
    )
}

export default GamesPage
