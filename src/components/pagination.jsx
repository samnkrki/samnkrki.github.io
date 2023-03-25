import styles from "./pagination.module.css"

export function PaginationField({currentPage=0, totalPages=0, perPage=0, prevClick, nextClick}) {
    return <div className={styles.paginationContainer}>
        <p>Page <span className={styles.numberSpan}>{currentPage}</span> of <span className={styles.numberSpan}>{totalPages}</span></p>
        <p>Rows Per Page <span className={styles.numberSpan}>{perPage}</span></p>
        <button className={styles.navigationButton} onClick={prevClick} disabled={!prevClick}>Prev</button>
        <button className={styles.navigationButton} onClick={nextClick} disabled={!nextClick}>Next</button>
    </div>
}