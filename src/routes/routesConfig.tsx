import GamesPage from '../pages/GamesPage/GamesPage'
import InfoPage from '../pages/InfoPage/InfoPage'
import MainPage from '../pages/MainPage/MainPage'

export const routesConfig = [
    {
        page: <MainPage />,
        url: '/',
        text: 'main',
    },
    {
        page: <GamesPage />,
        url: '/games',
        text: 'games',
    },
    {
        page: <InfoPage />,
        url: '/games/:id',
    },
]
