import { useParams } from 'react-router-dom'
import useGetInfoGame from '../../hooks/useGetInfoGame'
import styles from './InfoGame.module.css'

import spinner from '../../img/spinner.svg'

import PromoGame from '../PromoGame/PromoGame'

const InfoGame: React.FC = () => {
    const { id } = useParams<string>()
    const { loading, game } = useGetInfoGame(id)

    console.log(game)

    return (
        <>
            {loading && <img src={spinner} className={styles.spinner} />}
            <section className={styles.info}>
                <PromoGame game={game} loading={loading} />
                {/* <p>{game?.description_raw}</p> */}
            </section>
        </>
    )
}

export default InfoGame
