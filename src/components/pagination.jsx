export function PaginationField({currentPage=0, totalPages=0, perPage=0, prevClick, nextClick}) {
    return <div>
        Page <span>{currentPage}</span> of <span>{totalPages}</span>
        Rows Per Page <span>{perPage}</span>
        <button onClick={prevClick} disabled={!prevClick}>Previous Page</button>
        <button onClick={nextClick} disabled={!nextClick}>Next Page</button>
    </div>
}