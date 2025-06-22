import GamesPage from '../pages/GamesPage/GamesPage'
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
    // {
    //     page: <MainPage />,
    //     url: '/haha',
    //     text: 'список игр',
    // },
]
