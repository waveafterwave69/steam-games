import type { JSX } from 'react'

import pc from '../img/pc.svg'
import ps from '../img/ps.svg'
import xbox from '../img/xbox.svg'

export const capitalizeWords = (
    str: string,
    addStr: string,
    deleteStr: string
): any => {
    if (str) {
        return str
            .split(`${deleteStr}`)
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(`${addStr}`)
    }
}

interface PlatformData {
    platform: {
        name: string
    }
}

export const checkPlatforms = (
    arr: PlatformData[] | undefined | null
): JSX.Element | null => {
    if (!arr || arr.length === 0) {
        return null
    }

    const platforms: string[] = []

    arr.forEach((item) => {
        const platformName = item.platform.name.toLowerCase()
        if (platformName.includes('pc') && !platforms.includes('pc')) {
            platforms.push('pc')
        }
        if (platformName.includes('playstation') && !platforms.includes('ps')) {
            platforms.push('ps')
        }
        if (platformName.includes('xbox') && !platforms.includes('xbox')) {
            platforms.push('xbox')
        }
    })

    const renderPlatformImages = (): JSX.Element => {
        const images: JSX.Element[] = []

        if (platforms.includes('pc')) {
            images.push(<img key="pc" src={pc} alt="PC" />)
        }
        if (platforms.includes('ps')) {
            images.push(<img key="ps" src={ps} alt="PlayStation" />)
        }
        if (platforms.includes('xbox')) {
            images.push(<img key="xbox" src={xbox} alt="Xbox" />)
        }

        return <>{images}</>
    }

    return renderPlatformImages()
}
