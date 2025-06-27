import { useEffect } from 'react'
import InfoGame from '../../components/InfoGame/InfoGame'

const InfoPage: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <InfoGame />
        </>
    )
}

export default InfoPage
