import { Link } from 'react-router'
import styles from './CategoriesList.module.css'

const CategoriesList: React.FC<any> = ({ categories }) => {
    return (
        <>
            <ul className={styles.list}>
                {categories?.data?.results.map((item: any) => (
                    <Link
                        to={`/categories/${item.slug}`}
                        className={styles.list__item}
                        key={item.id}
                    >
                        <li>
                            <p className={styles.item__text}>{item.name}</p>
                            <img
                                src={item.image_background}
                                alt={item.name}
                                className={styles.item__img}
                            />
                        </li>
                    </Link>
                ))}
            </ul>
        </>
    )
}

export default CategoriesList
