import { Link } from 'react-router'
import styles from './Main.module.css'

import promoImg from '../../img/promoImg.png'

const Main: React.FC = () => {
    return (
        <>
            <main className={styles.main}>
                <div className={styles.main__row}>
                    <div className={styles.row__text}>
                        <h1 className={styles.text__title}>
                            Вся информация о Steam играх
                        </h1>
                        <h1 className={styles.text__description}>
                            Откройте для себя полную информацию о любой игре в{' '}
                            <a
                                href="https://store.steampowered.com/"
                                target="_blank"
                            >
                                Steam!
                            </a>{' '}
                            Получайте подробное описания и узнавайте об
                            особенностях геймплея!
                        </h1>
                        <Link to="/games" className={styles.text__btn}>
                            Смотреть игры
                        </Link>
                    </div>
                    <img
                        src={promoImg}
                        alt="steam"
                        className={styles.main__img}
                    />
                </div>
            </main>
        </>
    )
}

export default Main
