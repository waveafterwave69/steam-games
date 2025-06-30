import type { CategoriesProps } from '../../types'
import CategoriesCard from '../CategoriesCard/CategoriesCard'
import styles from './SameCategories.module.css'

interface SameCategoriesProps {
    categories: CategoriesProps[] | undefined
    loading: boolean
}

const SameCategories: React.FC<SameCategoriesProps> = ({
    categories,
    loading,
}) => {
    return (
        <>
            {!loading && (
                <section className={styles.same}>
                    <h1 className={styles.same__title}>
                        Относящиеся Категории
                    </h1>
                    <ul className={styles.list}>
                        {categories &&
                            categories.map((item: CategoriesProps) => (
                                <CategoriesCard item={item} key={item.id} />
                            ))}
                    </ul>
                </section>
            )}
        </>
    )
}

export default SameCategories
