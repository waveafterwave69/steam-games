import useGetCategories from '../../hooks/useGetCategories'
import styles from './Categories.module.css'

import spinner from '../../img/spinner.svg'
import CategoriesList from '../CategoriesList/CategoriesList'

const Categories: React.FC = () => {
    const { categories, isLoading } = useGetCategories()

    return (
        <>
            {isLoading ? (
                <img src={spinner} className={styles.spinner} />
            ) : (
                <section className={styles.categories}>
                    <CategoriesList categories={categories} />
                </section>
            )}
        </>
    )
}

export default Categories
