import React from 'react'
import styles from './SystemGame.module.css'
import type { Game } from '../../types'

interface SystemGameProps {
    game: Game[] | any
    loading: boolean
}

const SystemGame: React.FC<SystemGameProps> = ({ game, loading }) => {
    const pcRequirements = game?.platforms?.find(
        (el: any) => el?.platform?.name?.toLowerCase() === 'pc'
    )

    return (
        <>
            {!loading && game && (
                <section className={styles.system}>
                    <h1 className={styles.system__title}>
                        Системные требования
                    </h1>
                    {pcRequirements?.requirements ? (
                        <>
                            <p className={styles.system__title_2}>
                                Минимальные требования:
                            </p>
                            {pcRequirements?.requirements?.minimum ? (
                                <div
                                    className={styles.minimum__max}
                                    dangerouslySetInnerHTML={{
                                        __html: pcRequirements.requirements
                                            .minimum,
                                    }}
                                />
                            ) : (
                                <p className={styles.minimum__max}>
                                    Минимальные требования для PC не указаны.
                                </p>
                            )}

                            <p className={styles.system__title_2}>
                                Рекомендуемые требования:
                            </p>
                            {pcRequirements?.requirements?.recommended ? (
                                <div
                                    className={styles.minimum__max}
                                    dangerouslySetInnerHTML={{
                                        __html: pcRequirements.requirements
                                            .recommended,
                                    }}
                                />
                            ) : (
                                <p className={styles.minimum__max}>
                                    Рекомендуемые требования для PC не указаны.
                                </p>
                            )}
                        </>
                    ) : (
                        <p className={styles.minimum__max}>
                            Системные требования для PC не указаны.
                        </p>
                    )}
                </section>
            )}
        </>
    )
}

export default SystemGame
