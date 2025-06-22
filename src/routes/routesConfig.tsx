import GamesPage from '../pages/GamesPage/GamesPage'
import MainPage from '../pages/MainPage/MainPage'

export const routesConfig = [
    {
        page: <MainPage />,
        url: '/',
        text: 'список игр',
    },
    {
        page: <GamesPage />,
        url: '/games',
        text: 'список игр',
    },
    {
        page: <MainPage />,
        url: '/haha',
        text: 'список игр',
    },
]
