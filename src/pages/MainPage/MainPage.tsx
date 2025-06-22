import { useEffect } from 'react'
import Main from '../../components/Main/Main'

const MainPage: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <Main />
        </>
    )
}

export default MainPage
