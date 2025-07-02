import SingleCategory from '../components/SingleCategory/SingleCategory'
import CategoriesPage from '../pages/CategoriesPage/CategoriesPage'
import FavoritesPage from '../pages/FavoritesPage/FavoritesPage'
import GamesPage from '../pages/GamesPage/GamesPage'
import InfoPage from '../pages/InfoPage/InfoPage'
import MainPage from '../pages/MainPage/MainPage'

export const routesConfig = [
    {
        page: <MainPage />,
        url: '/',
    },
    {
        page: <GamesPage />,
        url: '/games',
        text: 'games',
    },
    {
        page: <CategoriesPage />,
        url: '/categories',
        text: 'categories',
    },
    {
        page: <SingleCategory />,
        url: 'categories/:id',
    },
    {
        page: <InfoPage />,
        url: '/games/:id',
    },
    {
        page: <FavoritesPage />,
        url: '/favorites',
        text: 'favorites',
    },
]
