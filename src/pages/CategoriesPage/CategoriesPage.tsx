import { useEffect } from 'react'
import Categories from '../../components/Categories/Categories'

const CategoriesPage: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <Categories />
        </>
    )
}

export default CategoriesPage
