import styles from './CategoriesList.module.css'
import CategoriesCard from '../CategoriesCard/CategoriesCard'

const CategoriesList: React.FC<any> = ({ categories }) => {
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
