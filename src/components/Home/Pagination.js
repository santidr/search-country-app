/* eslint-disable jsx-a11y/anchor-is-valid */
const Pagination = ({ totalPosts, postsPerPage, paginate, currentPage }) => {
    let pageNumbers = []

    for (let i = 1; i <= Math.round(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i)
    }

    const handlePaginateClick = (e, number) => {
        e.preventDefault()
        paginate(number)
        const elements = document.querySelectorAll('.pagination-link')
        elements.forEach(elem => {
            elem.classList.remove('is-current')
        })
        document.querySelector(`#page${number}`).classList.add('is-current')
    }

    return (
        <nav className="pagination my-5" role="navigation" aria-label="pagination">
            <a
                href="#"
                className="pagination-previous is-disabled"
                title="This is the first page"
                onClick={(e) => {
                    if (currentPage > 1) {
                        handlePaginateClick(e, currentPage - 1)
                        document.querySelector('.pagination-next').classList.remove('is-disabled')
                        if (currentPage === 2){
                            document.querySelector('.pagination-previous').classList.add('is-disabled')
                        }
                    }
                }}
            >
                Previous
            </a>
            <a
                href="#"
                className="pagination-next"
                onClick={(e) => {
                    if (currentPage < pageNumbers.length) {
                        handlePaginateClick(e, currentPage + 1)
                        document.querySelector('.pagination-previous').classList.remove('is-disabled')
                        if (currentPage + 1 === pageNumbers.length){
                            document.querySelector('.pagination-next').classList.add('is-disabled')
                        }
                    }
                }}
            >
                Next page
            </a>
            <ul className="pagination-list">
                {pageNumbers.map(number => (
                    <li key={number}>
                        <a
                            href="#"
                            id={'page' + number.toString()}
                            className={`pagination-link ${(number === 1) ? 'is-current' : ''}`}
                            aria-label={`Page ${number}`}
                            aria-current="page"
                            onClick={(e) => handlePaginateClick(e, number)}
                        >
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Pagination