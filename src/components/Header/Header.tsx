import { Link, NavLink } from 'react-router'
import styles from './Header.module.css'
import { useEffect, useState } from 'react'
import { routesConfig } from '../../routes/routesConfig'

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [header, setHeader] = useState<boolean>(true)

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = ''
        }

        return () => {
            document.body.style.overflow = ''
        }
    }, [isOpen])

    const toggleMenu = () => {
        setIsOpen((prev) => !prev)
        setHeader((prev) => !prev)
    }

    const handleLinkClick = () => {
        setIsOpen(false)
        setHeader(true)
    }

    return (
        <>
            {isOpen && (
                <div className={styles.overlay} onClick={handleLinkClick}></div>
            )}

            <header
                className={
                    header ? `${styles.header}` : `${styles.header__open}`
                }
            >
                <div className="container">
                    <div className={styles.header__row}>
                        <Link to="/" className={styles.header__logo}>
                            SteamGames
                        </Link>
                        <button
                            className={`${styles.burger} ${
                                isOpen ? styles.burgerActive : ''
                            }`}
                            onClick={toggleMenu}
                        >
                            <span className={styles.burgerLine}></span>
                            <span className={styles.burgerLine}></span>
                            <span className={styles.burgerLine}></span>
                        </button>

                        {isOpen && (
                            <nav className={styles.burger__nav}>
                                {routesConfig.map(
                                    (el) =>
                                        el.text && (
                                            <NavLink
                                                key={el.url}
                                                className={({ isActive }) =>
                                                    isActive
                                                        ? `${styles.burger__link} ${styles.active}`
                                                        : styles.burger__link
                                                }
                                                onClick={handleLinkClick}
                                                to={el.url}
                                            >
                                                {el.text}
                                            </NavLink>
                                        )
                                )}
                            </nav>
                        )}
                        <nav className={styles.header__nav}>
                            {routesConfig.map(
                                (el) =>
                                    el.text && (
                                        <NavLink
                                            key={el.url}
                                            className={({ isActive }) =>
                                                isActive
                                                    ? `${styles.nav__link} ${styles.active}`
                                                    : styles.nav__link
                                            }
                                            onClick={handleLinkClick}
                                            to={el.url}
                                        >
                                            {el.text}
                                        </NavLink>
                                    )
                            )}
                        </nav>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header
