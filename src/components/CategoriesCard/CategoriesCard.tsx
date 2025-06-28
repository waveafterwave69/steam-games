import { Link } from 'react-router'
import styles from './CategoriesCard.module.css'

const CategoriesCard: React.FC<any> = ({ item }) => {
    return (
        <>
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
        </>
    )
}

export default CategoriesCard
