import styles from './CategoriesList.module.css'
import CategoriesCard from '../CategoriesCard/CategoriesCard'
import type { RAWGResponse } from '../../types'

interface CategoriesListProps {
    categories: RAWGResponse
}

const CategoriesList: React.FC<CategoriesListProps> = ({ categories }) => {
    return (
        <>
            <ul className={styles.list}>
                {categories?.data?.results.map((item: any) => (
                    <CategoriesCard item={item} key={item.id} />
                ))}
            </ul>
        </>
    )
}

export default CategoriesList
