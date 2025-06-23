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

export const checkPlatforms = (arr: any): JSX.Element | null => {
    const uniq: string[] = []

    if (arr?.length > 0) {
        arr.forEach((el: any) => {
            if (
                el.platform.name.toLowerCase().includes('pc') &&
                !uniq.includes('pc')
            ) {
                uniq.push('pc')
            }
            if (
                el.platform.name.toLowerCase().includes('playstation') &&
                !uniq.includes('ps')
            ) {
                uniq.push('ps')
            }
            if (
                el.platform.name.toLowerCase().includes('xbox') &&
                !uniq.includes('xbox')
            ) {
                uniq.push('xbox')
            }
        })

        if (
            uniq.includes('pc') &&
            uniq.includes('ps') &&
            uniq.includes('xbox')
        ) {
            return (
                <>
                    <img src={pc} alt="pc" /> <img src={ps} alt="ps" />{' '}
                    <img src={xbox} alt="xbox" />
                </>
            )
        }

        if (uniq.includes('pc') && uniq.includes('ps')) {
            return (
                <>
                    <img src={pc} alt="pc" /> <img src={ps} alt="ps" />
                </>
            )
        }

        if (uniq.includes('pc') && uniq.includes('xbox')) {
            return (
                <>
                    <img src={pc} alt="pc" /> <img src={xbox} alt="xbox" />
                </>
            )
        }

        if (uniq.includes('ps') && uniq.includes('xbox')) {
            return (
                <>
                    <img src={ps} alt="ps" /> <img src={xbox} alt="xbox" />
                </>
            )
        }

        if (uniq.includes('ps')) {
            return (
                <>
                    <img src={ps} alt="ps" />
                </>
            )
        }

        if (uniq.includes('pc')) {
            return (
                <>
                    <img src={pc} alt="pc" />
                </>
            )
        }

        if (uniq.includes('xbox')) {
            return (
                <>
                    <img src={xbox} alt="xbox" />
                </>
            )
        }
    }

    return null
}
