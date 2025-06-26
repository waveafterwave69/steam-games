import { useParams } from 'react-router'
import styles from './SingleCategory.module.css'
import useGetCurrCategories from '../../hooks/useGetCurrCategory'

import spinner from '../../img/spinner.svg'
import CardGame from '../CardGame/CardGame'
import { capitalizeWords } from '../../utils/utils'

const SingleCategory: React.FC = () => {
    const { id } = useParams<{ id: string }>()
    const { category, isLoading, next } = useGetCurrCategories(id)
    console.log(category)

    return (
        <>
            <section className={styles.single}>
                <h1 className={styles.single__title}>
                    {id &&
                        capitalizeWords(
                            id[0].toUpperCase() + id.slice(1),
                            ' ',
                            '-'
                        )}
                </h1>
                <div className={styles.single__content}>
                    {category &&
                        category.map((el: any) =>
                            el.data.results.map((el: any) => (
                                <CardGame key={el.id} props={el} />
                            ))
                        )}
                </div>
                {!isLoading ? (
                    <button
                        onClick={next}
                        className={styles.single__btn}
                        style={{ opacity: isLoading ? '0.6' : '1' }}
                    >
                        More Games
                    </button>
                ) : (
                    <img src={spinner} className={styles.spinner} />
                )}
            </section>
        </>
    )
}

export default SingleCategory
