export interface RAWGResponse {
    config: {
        transitional: {
            silentJSONParsing: boolean
            forcedJSONParsing: boolean
        }
        adapter: string[]
        transformRequest: ((data: any, headers?: any) => any)[]
        transformResponse: ((data: any) => any)[]
        timeout: number
        xsrfCookieName: string
        xsrfHeaderName: string
        maxContentLength: number
        maxBodyLength: number
        validateStatus: (status: number) => boolean
        headers: {
            Accept: string
        }
        method: string
        url: string
    }
    data: {
        count: number

        next: string | null
        previous: string | null
        results: Game[]
        seo_title: string
        seo_description: string
        seo_keywords: string
        seo_h1: string
        noindex: boolean
        nofollow: boolean
        description: string
        filters: {
            years: {
                from: number
                to: number
                filter: string
                decade: number
            }[]
        }
        nofollow_collections: string[]
    }
    headers: {
        'content-language': string
        'content-type': string
    }
    request: {
        onreadystatechange: any
        readyState: number
        timeout: number
        withCredentials: boolean
        upload: {
            onloadstart: any
            onprogress: any
            onload: any
            onerror: any
            onabort: any
            ontimeout: any
            onloadend: any
            addEventListener: any
            removeEventListener: any
            dispatchEvent: any
        }
        responseURL: string
        status: number
        statusText: string
        setRequestHeader: any
        open: any
        send: any
        abort: any
        getAllResponseHeaders: () => string
        getResponseHeader: (header: string) => string | null
    }
    status: number
    statusText: string
}

export interface Game {
    id: number
    slug: string
    name: string
    released: string
    tba: boolean
    description_raw: string
    metacritic_url: string
    developers: []
    background_image: string
    rating: number
    rating_top: number
    ratings: {
        id: number
        title: string
        count: number
        percent: number
    }[]
    ratings_count: number
    reviews_text_count: number
    added: number
    added_by_status: {
        yet: number
        owned: number
        beaten: number
        toplay: number
        dropped: number
        playing: number
    }
    metacritic: number
    playtime: number
    suggestions_count: number
    updated: string
    esrb_rating: {
        id: number
        name: string
        slug: string
    }
    platforms: {
        platform: {
            id: number
            name: string
            slug: string
        }
        released_at: string
        requirements_en: any
        requirements_ru: any
    }[]
}

export interface RAWGTag {
    id: number
    name: string
    slug: string
    games_count: number
    image_background: string
    language: string
}

export interface CategoriesProps {
    games: Game[]
    games_count: number
    id: number
    image_background: string
    language: string
    name: string
    slug: string
}

export interface CategoryResult {
    id: number
    name: string
    slug: string
    games_count: number
    image: string
}

export interface ScreenshotsGameI {
    count: number
    next: string | null
    previous: string | null
    results: CategoryResult[]
}
