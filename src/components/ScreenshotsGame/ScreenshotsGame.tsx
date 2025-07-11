import { useParams } from 'react-router'
import useGetScreenshots from '../../hooks/useGetScreenshots'
import styles from './ScreenshotsGame.module.css'
import { useEffect, useState } from 'react'
import type { CategoryResult } from '../../types'

interface ScreenshotsGameProps {
    loading: boolean
}

const ScreenshotsGame: React.FC<ScreenshotsGameProps> = ({ loading }) => {
    const { id } = useParams<string>()
    const { screenshots, isLoading } = useGetScreenshots(id)
    const [fullscreenImage, setFullscreenImage] = useState<string | null>(null)

    const handleImageClick = (imageSrc: string) => {
        setFullscreenImage(imageSrc)
    }

    const handleCloseFullscreen = () => {
        setFullscreenImage(null)
    }

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                handleCloseFullscreen()
            }
        }
        document.addEventListener('keydown', handleKeyDown)
        return () => {
            document.removeEventListener('keydown', handleKeyDown)
        }
    }, [handleCloseFullscreen])

    return (
        <>
            {!isLoading && !loading && (
                <section className={styles.screenshots}>
                    <h1 className={styles.screenshots__title}>Скриншоты</h1>
                    <div className={styles.screenshots__column}>
                        {screenshots?.results.map(
                            ({ image }: CategoryResult) => (
                                <img
                                    key={image}
                                    src={image}
                                    alt="screen"
                                    className={styles.screenshots__image}
                                    onClick={() => handleImageClick(image)}
                                />
                            )
                        )}
                    </div>
                    {fullscreenImage && (
                        <div
                            className={styles.fullscreen__overlay}
                            onClick={handleCloseFullscreen}
                        >
                            <img
                                src={fullscreenImage}
                                alt="Fullscreen Image"
                                className={styles.fullscreen__image}
                            />
                        </div>
                    )}
                </section>
            )}
        </>
    )
}

export default ScreenshotsGame
