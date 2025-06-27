import { useEffect } from 'react'
import SingleCategory from '../../components/SingleCategory/SingleCategory'

const SingleCategoryPage: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <SingleCategory />
        </>
    )
}

export default SingleCategoryPage
