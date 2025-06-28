import CategoriesCard from '../CategoriesCard/CategoriesCard'
import styles from './SameCategories.module.css'

const SameCategories: React.FC<any> = ({ categories, loading }) => {
    return (
        <>
            {!loading && (
                <section className={styles.same}>
                    <h1 className={styles.same__title}>
                        Относящиеся Категории
                    </h1>
                    <ul className={styles.list}>
                        {categories &&
                            categories.map((item: any) => (
                                <CategoriesCard item={item} key={item.id} />
                            ))}
                    </ul>
                </section>
            )}
        </>
    )
}

export default SameCategories
