import { useParams } from 'react-router-dom'
import useGetInfoGame from '../../hooks/useGetInfoGame'
import styles from './InfoGame.module.css'

import spinner from '../../img/spinner.svg'

import PromoGame from '../PromoGame/PromoGame'
import DescriptionGame from '../DescriptionGame/DescriptionGame'
import SystemGame from '../SystemGame/SystemGame'
import SameCategories from '../SameCategories/SameCategories'
import ScreenshotsGame from '../ScreenshotsGame/ScreenshotsGame'

const InfoGame: React.FC = () => {
    const { id } = useParams<string>()
    const { loading, game } = useGetInfoGame(id)

    return (
        <>
            {loading && <img src={spinner} className={styles.spinner} />}
            <section className={styles.info}>
                <PromoGame game={game} loading={loading} />
                <DescriptionGame game={game} loading={loading} />
                <ScreenshotsGame loading={loading} />
                <SystemGame game={game} loading={loading} />
                <SameCategories categories={game?.tags} loading={loading} />
            </section>
        </>
    )
}

export default InfoGame
